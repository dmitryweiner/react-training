import React from "react";
import PropTypes from "prop-types";

/**
 * Use `Message` to display chat messages
 */
const Message = function (props) {
    return <li data-testid="message">
        <strong>{props.message.nick}:</strong> {props.message.message}
    </li>;
};

Message.propTypes = {
    message: PropTypes.shape({
        nick: PropTypes.string,
        message: PropTypes.string
    }),
};

Message.defaultProps = {
    message: null,
};

export default Message;

