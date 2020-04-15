import React from "react";
import { connect } from "react-redux";
import {sendMessage} from "../store";

class MessageForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            nick: ""
        };
    }

    sendMessage() {
        this.props.dispatch(sendMessage({message: this.state.message, nick: this.state.nick}));
        this.setState({message: ""});
    }

    render() {
        return <form>
            <input
                value={this.state.nick}
                type="text"
                aria-label="nick-input"
                onChange={(event) => this.setState({nick: event.target.value})}/>
            <br/>
            <textarea
                value={this.state.message}
                aria-label="message-input"
                onChange={(event) => this.setState({message: event.target.value})}>
            </textarea>
            <br/>
            <input
                type="button"
                value="Send"
                aria-label="send-button"
                onClick={() => this.sendMessage()}/>
        </form>;
    }
}

export default connect()(MessageForm);