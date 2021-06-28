import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { addTransaction, saveAccount, fetchAccounts } from '../redux/actionCreators';

const mapStateToProps = state => {
  return {
    transactions: state.transactions,
    accounts: state.accounts,
    accountsLoading: state.accountsLoading,
    accountsErr: state.accountsErr,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTransaction: (transaction) => dispatch(addTransaction(transaction)),
    saveAccount: (transactions, total, income, expense) => dispatch(saveAccount(transactions, total, income, expense)),
    fetchAccounts: () => dispatch(fetchAccounts()),
  }
}

const AddTransaction = (props) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    props.fetchAccounts();
  }, [])

  const onSubmit = e => {
    e.preventDefault();
    if (text === '' || amount === '') {
      alert("Please Fill in Both Feilds!")
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }

      props.addTransaction(newTransaction);
      setText('');
      setAmount('');
    }
  }

  const transactions = [...props.transactions]
  const amounts = props.transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  const submitAccount = e => {
    e.preventDefault();
    // if (text === '' || amount === '') {
    //   alert("Please Fill in Both Feilds!");
    // } else {
    //   props.saveAccount(props.transactions, total, income, expense);
    //   setText('');
    //   setAmount('');
    // }
    props.saveAccount(props.transactions, total, income, expense);
    setText('');
    setAmount('');
    alert("Account Saved!")
  }

  const accounts = props.accounts.map((account) => {
    return (
      <View key={account.id}>
        <View className="display-card">
          <Text>{account.accountTime}</Text>
          <Text>{"Income $" + account.accounts.income}</Text>
          <Text>{"Expense $" + account.accounts.expense}</Text>
          <Text>{"Balance $" + account.accounts.total}</Text>
        </View>
      </View>
    )
  })


  return (
    <>
      <View style={styles.card}>
        <Text style={styles.title}>Add Transaction</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Field..."
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Amount..."
          value={amount}
          onChangeText={(value) => setAmount(value)}
        />
        <Text>income: positive, expense: negative</Text>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btnContainer}
            onPress={onSubmit}>
            <Text style={styles.btnStyle}>Add Transaction</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnContainer}
            onPress={submitAccount}>
            <Text style={styles.btnStyle}>Save Account</Text>
          </TouchableOpacity>
        </View>

      </View>
      {/* <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
          >Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      <hr />
      <div>
        {accounts}
      </div>
      <form onSubmit={submitAccount}>
        <button className="btn">Save Account</button>
      </form> */}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction)

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    overflow: "hidden",
    margin: 10,
    elevation: 5,
  },
  title: {
    marginBottom: 2,
    fontSize: 20,
  },
  input: {
    width: "100%",
    padding: 5,
    marginTop: 10,
    backgroundColor: "#eee",
    borderWidth: 1,
    borderColor: "#009688",
    borderRadius: 4
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",

  },
  btnStyle: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center"
  },
  btnContainer: {
    flexDirection: "row",
    width: 150,
    paddingVertical: 5,
    backgroundColor: "#009688",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})
