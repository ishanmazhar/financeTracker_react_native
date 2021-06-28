import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchComments } from '../redux/actionCreators';
// import Spinner from '../Spinner/Spinner';

const mapStateToProps = state => {
    return {
        comments: state.comments,
        commentsLoading: state.commentsLoading,
        commentsErr: state.commentsErr,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchComments: (dbPath) => dispatch(fetchComments(dbPath)),
    }
}

class Comments extends Component {
    componentDidMount() {
        this.props.fetchComments(this.props.dbPath);
    }
    render() {
        console.log(this.props.comments);
        const comments = this.props.comments.map((comment) => {
            return (
                <View key={comment.id}>
                    <View style={styles.card}>
                        <Text style={styles.title}>{comment.comments.author + " on " + comment.commentTime}</Text>
                        <Text>{comment.comments.comment}</Text>
                    </View>
                </View>
            )
        })
        return (
            <View style={styles.reviewCard}>
                <Text style={styles.reviewTitle}>Reviews</Text>
                {/* {this.props.commentsLoading ? <Spinner /> : comments} */}
                {comments}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    reviewCard: {
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "white",
        overflow: "hidden",
        margin: 10,
        elevation: 5,
    },
    card: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: "white",
        overflow: "hidden",
        margin: 10,
        elevation: 5,
    },
    reviewTitle: {
        marginLeft: 10,
        fontSize: 20,
    },
    details: {
        padding: 25,
    },
    image: {
        width: "100%",
        height: 150,
    },
    title: {
        marginBottom: 2,
        fontSize: 15,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments);