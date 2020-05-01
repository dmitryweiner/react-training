import React from "react";
import { connect } from "react-redux";
import Message from "./Message";
import {IMessage, IMessagesList, IStoreState} from '../interfaces';
import PropTypes from 'prop-types';

function mapStateToProps(state: IStoreState) {
    const { messages } = state;
    return {
        messages,
        messagesCount: messages.length
    };
}

type MessagesListProps = {
    messages: PropTypes.InferProps<IMessagesList>;
    messagesCount: number;
}

export const MessagesList: React.FC<MessagesListProps> = (props: MessagesListProps) => {
    return <div>
        <ul>
        {props.messages.map((item: IMessage, index: number) =>
            <Message message={item} key={index} />
        )}
        </ul>
        <span data-testid="total-messages">Total messages: {props.messagesCount}</span>
    </div>
};

export default connect(mapStateToProps)(MessagesList);
