import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Balance from '../components/Balance';

const mapStateToProps = state => {
    return {
        transactions: state.transactions,
    }
}

const IncomeExpenses = (props) => {

    const amounts = props.transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    );


    return (
        <View style={styles.mainView}>
            <View>
                <Balance />
            </View>
            <View style={styles.incomeExpenseView}>
                <View style={styles.incomeExpense}>
                    <Text style={styles.text}>Income</Text>
                    {/* <Text className="money plus">+${income}</Text> */}
                    <Text style={styles.amount}>+${income}</Text>
                </View>
                <View style={styles.incomeExpense}>
                    <Text style={styles.text}>Expense</Text>
                    {/* <Text className="money minus">-${expense}</Text> */}
                    <Text style={styles.amount}>-${expense}</Text>
                </View>
            </View>
        </View>
    )
}

export default connect(mapStateToProps)(IncomeExpenses)

const styles = StyleSheet.create({
    mainView: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "white",
        overflow: "hidden",
        margin: 10,
        elevation: 5,
    },
    incomeExpenseView: {
        flexDirection: "row",
        justifyContent: "center",
    },
    incomeExpense: {
        paddingLeft: 30,
        paddingRight: 30,
        alignItems: "center",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
    },
    amount: {
        fontSize: 20,
        fontWeight: "bold",
    }
})
