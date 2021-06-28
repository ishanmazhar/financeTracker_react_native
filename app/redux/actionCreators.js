import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addTransaction = transaction => {
    return {
        type: actionTypes.ADD_TRANSACTION,
        payload: transaction,
    }
}

export const deleteTransaction = id => {
    return {
        type: actionTypes.DELETE_TRANSACTION,
        payload: id,
    }
}

export const saveAccount = (transactions, total, income, expense) => dispatch => {
    var id;
    const newAccount = {
        accounts: {
            transaction: transactions,
            total: total,
            income: income,
            expense: expense,
        },
    }
    newAccount.accountTime = new Date().toDateString();
    axios.post(`https://financetracker-reactnative-default-rtdb.firebaseio.com/allaccounts.json`, newAccount)
        .then(response => {
            console.log(response);
            id = response.data.name;
            newAccount.id = id;
            console.log(id)
            dispatch(accountConcat(newAccount));
            return response.data;
        })
        .catch(error => console.log(error))
}

export const accountConcat = account => {
    return {
        type: actionTypes.ADD_ACCOUNTS,
        payload: account,
    }
}

export const loadAccounts = accounts => {
    return {
        type: actionTypes.LOAD_ACCOUNTS,
        payload: accounts,
    }
}

export const accountsLoadFailed = () => {
    return {
        type: actionTypes.ACCOUNTS_LOAD_FAILED,
    }
}

export const fetchAccounts = () => dispatch => {
    axios.get(`https://financetracker-reactnative-default-rtdb.firebaseio.com/allaccounts.json`)
        .then(response => {
            console.log(response.data);
            dispatch(loadAccounts(response.data))
        })
}