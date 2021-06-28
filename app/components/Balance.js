import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, StyleSheet } from 'react-native';

const mapStateToProps = state => {
    return {
        transactions: state.transactions, 
    }
}
const Balance = (props) => {

    const amounts = props.transactions.map(transaction => transaction.amount); 
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); 

    return (
        <View style={styles.balanceView}>
            <Text style={styles.text}>Your Balance:</Text>
            <Text style={styles.text}>${total}</Text>
        </View>
    )
}

export default connect(mapStateToProps)(Balance); 

const styles = StyleSheet.create({
    balanceView: {
        flexDirection: "row",
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        padding: 5,
    },
})
