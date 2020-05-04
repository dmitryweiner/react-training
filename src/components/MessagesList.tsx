/** @jsx jsx */
import React from "react";
import { connect } from "react-redux";
import Message from "./Message";
import {IMessage, IMessagesList, IStoreState} from '../interfaces';
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled';

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
    const List = styled.li`
        list-style-type: none;
        padding: 0;
        margin: 0;
    `;

    return <div>
        <List>
        {props.messages.map((item: IMessage, index: number) =>
            <Message message={item} key={index} backgroundColor="#F0F0F0"/>
        )}
        </List>
        <span data-testid="total-messages">Total messages: {props.messagesCount}</span>
    </div>
};

export default connect(mapStateToProps)(MessagesList);
