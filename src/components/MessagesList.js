import React from "react";
import { connect } from "react-redux";

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
            <li key={index}>
                <strong>{item.nick}:</strong> {item.message}
            </li>
        )}
        </ul>
        <span>Total messages: {props.messagesCount}</span>
    </div>
}

export default connect(mapStateToProps)(MessagesList);

