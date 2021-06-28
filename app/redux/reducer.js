import * as actionTypes from './actionTypes';

const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 },
    ],
    accounts: [],
    accountsLoading: true,
    accountsErr: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(
                    transaction => transaction.id !== action.payload)
            }
        case actionTypes.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case actionTypes.LOAD_ACCOUNTS:
            // for (let key in action.payload) {
            //     console.log(action.payload[key]); 
            // }
            let accounts = [];
            for (let key in action.payload) {
                accounts.push({
                    ...action.payload[key],
                    id: key,
                })
            }
            return {
                ...state,
                accounts: accounts,
                accountsLoading: false,
            }
        case actionTypes.ACCOUNTS_LOAD_FAILED:
            return {
                ...state,
                accountErr: true,
                accountsLoading: false,
            }
        case actionTypes.ADD_ACCOUNTS:
            let account = action.payload;
            console.log(account);
            return {
                ...state,
                accounts: state.accounts.concat(account),
            }
        default:
            return state;
    }
}