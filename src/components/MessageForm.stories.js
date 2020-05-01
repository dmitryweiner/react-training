import React from 'react';
import { action } from '@storybook/addon-actions';
import { MessageForm } from './MessageForm';

export default {
    title: 'MessageForm',
    component: MessageForm,
};

export const ShowForm = () => {
    const props = {
        dispatch: action("Dispatch called")
    };
    return <MessageForm {...props}/>;
};