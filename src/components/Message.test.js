import React from 'react';
import { render } from '@testing-library/react';
import Message from './Message';

test('Component Message gets property message and displays it', () => {
    const message = {
        message: "Hello!",
        nick: "Nick"
    };
    const { container, getByText } = render(<Message message={message}/>);
    expect(getByText(/Nick/i)).toBeInTheDocument();
    expect(getByText(/Hello/i)).toBeInTheDocument();
});
