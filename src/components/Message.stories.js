import React from 'react';
import { action } from '@storybook/addon-actions';
import Message from './Message';

export default {
    title: 'Message',
    component: Message,
};

export const ShowText = () => {
    const message = {
        nick: "Nobody",
        message: "Hello everybody!"
    };
    return <Message message={message}/>;
};