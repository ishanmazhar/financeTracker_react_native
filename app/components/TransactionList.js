import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Transaction from './Transaction'; 
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        transactions: state.transactions, 
    }
}

const TransactionList = (props) => {

  return (
    <>
      <View>
        {props.transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </View>
    </>
  )
}

export default connect(mapStateToProps)(TransactionList);
