import React from "react";
import { connect } from "react-redux";
import Message from "./Message";

function mapStateToProps(state) {
    const { messages } = state;
    return {
        messages,
        messagesCount: messages.length
    };
}

function MessagesList(props) {
    return <div>
        <ul>
        {props.messages.map((item, index) =>
            <Message message={item} key={index} />
        )}
        </ul>
        <span data-testid="total-messages">Total messages: {props.messagesCount}</span>
    </div>
}

export default connect(mapStateToProps)(MessagesList);

