import React from 'react';
import renderer from 'react-test-renderer';
import Message from './Message';

test('Component Message gets property message and displays it', () => {
    const message = {
        message: "Hello!",
        nick: "Nick"
    };
    const component = renderer.create(
      <Message message={message}/>,
    );
    let componentSnapshot = component.toJSON();
    expect(componentSnapshot).toMatchSnapshot();
});
