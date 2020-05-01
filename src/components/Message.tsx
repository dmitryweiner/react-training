import React from "react";
import PropTypes from "prop-types";
import { IMessage} from "../interfaces";

type MessageProps = {
    message: PropTypes.InferProps<IMessage>;
};

/**
 * Use `Message` to display chat messages
 */
const Message: React.FC<MessageProps> = function (props: MessageProps) {
    return <li data-testid="message">
        <strong>{props.message.nick}:</strong> {props.message.message}
    </li>;
};

Message.propTypes = {
    message: PropTypes.shape({
        nick: PropTypes.string,
        message: PropTypes.string
    }).isRequired
};

export default Message;

