import React from "react";

export default function MessagesList(props) {
    return <ul>
        {props.messages.map((item, index) =>
            <li key={index}>
                <strong>{item.nick}:</strong> {item.message}
            </li>
        )}
    </ul>
}

