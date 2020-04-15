import React from 'react'
import { render, fireEvent, screen, wait, testStore } from '../test-utils'
import '@testing-library/jest-dom/extend-expect'
import MessageForm from './MessageForm'
import nock from "nock";

test('MessageForm calls proper action', async () => {
    const nockScope = nock('http://localhost:3001')
        .post('/') // Route to catch and mock
        .reply(200, []);
    const message = {
        message: "Message 1",
        nick: "Nick 1"
    };

    const renderResult = render(<MessageForm />);
    fireEvent.change(
        screen.getByLabelText('message-input'),
        { target: { value: message.message } }
    );
    fireEvent.change(
        screen.getByLabelText('nick-input'),
        { target: { value: message.nick } }
    );
    fireEvent.click(
        screen.getByLabelText('send-button')
    );

    await wait(() => expect(nockScope.isDone()).toBe(true));
    expect(testStore.getState()).toEqual({messages:[message]});

    //expect(testStore.)
});