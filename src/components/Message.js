import React from "react";

export default function Message(props) {
    return <li data-testid="message">
        <strong>{props.message.nick}:</strong> {props.message.message}
    </li>;
}

