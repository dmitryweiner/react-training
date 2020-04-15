import React from 'react'
import { render, fireEvent, screen, wait, testStore } from './test-utils'
import nock from "nock";
import App from './App';

test('renders learn react link', async () => {
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

  const nockScope = nock('http://localhost:3001')
      .get('/') // Route to catch and mock
      .reply(200, messages);

  render(<App />);

  await wait(() => expect(nockScope.isDone()).toBe(true));

  expect(testStore.getState()).toEqual({messages});
});
