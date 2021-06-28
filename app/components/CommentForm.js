import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addComment } from '../redux/actionCreators';
import Comments from './Comments';
// import Auth from './Auth';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (author, comment, dbPath) => dispatch(addComment(author, comment, dbPath)),
    }
}

class CommentForm extends Component {

    state = {
        comments: {
            comment: "",
            author: "",
        },
    }

    updateInputs = (value, name) => {
        this.setState({
            comments: {
                ...this.state.comments,
                [name]: value
            }
        })
    }

    submitHandler = () => {
        this.props.addComment(this.state.comments.author, this.state.comments.comment, this.props.dbPath);
    }

    render() {
        // let commentCard = null;
        // if (this.props.token === null) {
        //     commentCard = (
        //         <Card body className="display-card" style={{marginBottom: "20px"}}>
        //             <CardTitle tag="h4" style={{paddingLeft:"5px"}}>Please Login to add a comment</CardTitle>
        //         </Card>
        //     )
        // } else {
        let commentCard = (
            <View style={styles.card}>
                <Text style={styles.title}>Add a review</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Your Name"
                    value={this.state.comments.author}
                    onChangeText={value => this.updateInputs(value, "author")}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Your Review"
                    value={this.state.comments.comment}
                    onChangeText={value => this.updateInputs(value, "comment")}
                    multiline={true}
                    numberOfLines={6}
                />
                <TouchableOpacity style={styles.btnContainer}
                    onPress={() => {
                        this.submitHandler()
                    }}>
                    <Text style={styles.btnStyle}>Post Review</Text>
                </TouchableOpacity>
                {/* <form>
                    <input
                        type="text"
                        name="author"
                        id="author"
                        value={this.state.comments.author}
                        placeholder="Your Name Here"
                        className="form-control"
                        onChange={(e) => this.inputChangeHandler(e)}
                        required />
                    <br />
                    <textarea
                        name="comment"
                        id="comment"
                        value={this.state.comments.comment}
                        placeholder="Your Comment Here"
                        className="form-control"
                        onChange={(e) => this.inputChangeHandler(e)}
                        required />
                    <br />
                    <Button className="btn btn-success" onClick={this.submitHandler}>Post Comment</Button>
                </form> */}
            </View>
        )
        // }

        return (
            <View>
                <View>
                    <Comments dbPath={this.props.dbPath} />
                </View>
                {commentCard}
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);

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