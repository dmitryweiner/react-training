import React from 'react';
import { action } from '@storybook/addon-actions';
import { MessagesList } from './MessagesList';

export default {
    title: 'MessagesList',
    component: MessagesList,
};

export const ShowList = () => {
    const messages = [
        {
            nick: "Nobody",
            message: "Hello everybody!"
        },
        {
            nick: "Nobody",
            message: "Hello everybody!"
        },
        {
            nick: "Nobody",
            message: "Hello everybody!"
        }
    ];
    const props = {
        messages,
        messagesCount: messages.length
    };
    return <MessagesList {...props}/>;
};

export const ShowEmptyList = () => {
    const messages = [];
    const props = {
        messages,
        messagesCount: messages.length
    };
    return <MessagesList {...props}/>;
};