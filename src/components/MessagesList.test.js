import React from 'react'
import { createStore } from 'redux'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'
import MessagesList from './MessagesList'

test('MessagesList with empty store', () => {
    render(<MessagesList />);
    expect(screen.getByTestId('total-messages')).toHaveTextContent('Total messages: 0');
});

test('MessagesList with some messages', () => {
    const messages = [
        {
            message: "Message 1",
            nick: "Nick 1"
        },
        {
            message: "Message 2",
            nick: "Nick 2"
        },
        {
            message: "Message 3",
            nick: "Nick 3"
        }
    ];
    render(<MessagesList />, { initialState: { messages }});
    expect(screen.getByTestId('total-messages')).toHaveTextContent('Total messages: ' + messages.length);
    expect(screen.getAllByTestId('message').length).toBe(messages.length);
    expect(screen.getAllByTestId('message')[0]).toHaveTextContent(`${messages[0].nick}: ${messages[0].message}`);
});