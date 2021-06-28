import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { addTransaction, saveAccount, fetchAccounts } from '../redux/actionCreators';

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        accountsLoading: state.accountsLoading,
        accountsErr: state.accountsErr,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAccounts: () => dispatch(fetchAccounts()),
    }
}
class AllAccounts extends Component {

    componentDidMount() {
        this.props.fetchAccounts();
    }

    render() {
        // const sign = this.props.accounts.accounts.transaction.amount < 0 ? '-' : '+';
        // const transactions = this.props.accounts.accounts.transaction.map((transaction) => {
        //     return (
        //         <View style={styles.mainView}>
        //             <View style={styles.category}>
        //                 <Text style={styles.text}>{transaction.text}</Text>
        //                 <Text style={styles.amount}>{sign}${Math.abs(transaction.amount)}</Text>
        //             </View>
        //         </View>
        //     )
        // })

        const accounts = this.props.accounts.map((account) => {
            console.log(account)
            return (
                <View key={account.id} style={styles.card} >
                    <View >
                        <Text style={{alignSelf: "flex-end"}}>{account.accountTime}</Text>
                        <View style={styles.balanceView}>
                            <Text style={styles.balanceText}>Your Balance:</Text>
                            <Text style={styles.balanceText}>${account.accounts.total}</Text>
                        </View>
                        <View style={styles.incomeExpenseView}>
                            <View style={styles.incomeExpense}>
                                <Text style={styles.text}>Income</Text>
                                <Text style={styles.amount}>+${account.accounts.income}</Text>
                            </View>
                            <View style={styles.incomeExpense}>
                                <Text style={styles.text}>Expense</Text>
                                <Text style={styles.amount}>-${account.accounts.expense}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        {account.accounts.transaction.map((transaction) => {
                            console.log("TRX = ", transaction); 
                            return (
                                <View style={styles.category} key={transaction.id}>
                                    <Text style={styles.text}>{transaction.text}</Text>
                                    <Text style={styles.amount}>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</Text>
                                </View>
                            )
                        })}

                    </View>

                </View>
            )
        })

        return (
            <ScrollView>
                {accounts}
            </ScrollView >
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AllAccounts);

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "wheat",
        overflow: "hidden",
        margin: 10,
        elevation: 5,
    },
    title: {
        marginBottom: 2,
        fontSize: 20,
    },
    mainView: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "white",
        overflow: "hidden",
        margin: 5,
        elevation: 5,

    },
    balanceView: {
        flexDirection: "row",
        justifyContent: "center",
    },
    category: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    amount: {
        fontSize: 20,
        fontWeight: "bold",
    },
    deleteBtn: {
        flexDirection: "row",
        justifyContent: "flex-end",
        borderRadius: 5,
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
    balanceText: {
        fontSize: 25,
        fontWeight: "bold",
        padding: 5,
    },
    amount: {
        fontSize: 20,
        fontWeight: "bold",
    }
})
