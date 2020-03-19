import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    const { messages } = state;
    return { messages };
}

function MessagesList(props) {
    return <ul>
        {props.messages.map((item, index) =>
            <li key={index}>
                <strong>{item.nick}:</strong> {item.message}
            </li>
        )}
    </ul>
}

export default connect(mapStateToProps)(MessagesList);

