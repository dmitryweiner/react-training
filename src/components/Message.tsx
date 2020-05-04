/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { IMessage} from "../interfaces";
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

type MessageProps = {
    message: PropTypes.InferProps<IMessage>;
    backgroundColor?: string;
};

/**
 * Use `Message` to display chat messages
 */
const Message: React.FC<MessageProps> = function (props: MessageProps) {
    const messageStyle = css`
        border: 1px dotted gray;
        border-radius: 4px;
        padding: 10px;
        margin: 5px;
        background-color: ${props.backgroundColor ? props.backgroundColor : "white"}
    `;

    const nickStyle = css`
        color: darkgray;
    `;

    return <ul data-testid="message" css={messageStyle}>
        <strong css={nickStyle}>
            {props.message.nick}:
        </strong>&nbsp;
        {props.message.message}
    </ul>;
};

Message.propTypes = {
    message: PropTypes.shape({
        nick: PropTypes.string,
        message: PropTypes.string
    }).isRequired
};

export default Message;

