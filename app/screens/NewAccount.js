import React from 'react';
import Balance from '../components/Balance';
import IncomeExpenses from '../components/IncomeExpenses';
import TransactionList from '../components/TransactionList';
import AddTransaction from '../components/AddTransaction';
import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native';

const NewAccount = () => {
    return (
        <ScrollView>
            <View style={styles.incomeExpenses}>
                <IncomeExpenses />
            </View>
            <View style={styles.transactionList}>
                <TransactionList />
            </View>
            <View style={styles.addTransaction}>
                <AddTransaction />
            </View>
        </ScrollView>
    )
}

export default NewAccount;

const styles = StyleSheet.create({
    balance: {
        marginTop: 10,
    },
    incomeExpenses: {
        marginTop: 10,
    },
    transactionList: {
        marginTop: 10,
    },
    addTransaction: {
        marginTop: 10
    },

})
