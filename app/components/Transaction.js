import React from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'
import { deleteTransaction } from '../redux/actionCreators'

const mapDispatchToProps = dispatch => {
    return {
        deleteTransaction: (id) => dispatch(deleteTransaction(id))
    }
}

const Transaction = (props) => {

    const sign = props.transaction.amount < 0 ? '-' : '+';
    return (
        // <Text className={props.transaction.amount < 0 ? "minus" : "plus"}>
        <View style={styles.mainView}>
            <View style={styles.category}>
                <Text style={styles.text}>{props.transaction.text}</Text>
                <Text style={styles.amount}>{sign}${Math.abs(props.transaction.amount)}</Text>
            </View>
            <View style={styles.deleteBtn}>
                <Button
                    title="X"
                    onPress={() => props.deleteTransaction(props.transaction.id)}
                    color="red"
                > </Button>
            </View>
        </View>

    )
}
export default connect(null, mapDispatchToProps)(Transaction)

const styles = StyleSheet.create({
    mainView: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "white",
        overflow: "hidden",
        marginLeft: 10,
        marginRight: 10, 
        marginBottom: 5,
        elevation: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    category: {
        flexDirection: "row",
        justifyContent: "space-between", 
        width: "85%", 
    },
    text: {
        fontSize: 20,
    },
    amount: {
        fontSize: 20,
    },
    deleteBtn: {
        flexDirection: "row",
        justifyContent: "flex-end",
        borderRadius: 5,
    }

})