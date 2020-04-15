import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {ADD_MESSAGE, initialState, sendMessage} from "./store";
import nock from "nock";
import {wait} from "./test-utils";

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

test('Store action ADD_MESSAGE', async () => {
    const message = {
        message: "Message 1",
        nick: "Nick 1"
    };

    const nockScope = nock('http://localhost:3001')
        .post('/') // Route to catch and mock
        .reply(200, []);

    const store = mockStore(initialState);
    store.dispatch(sendMessage(message));
    await wait(() => expect(nockScope.isDone()).toBe(true));

    expect(store.getActions().length).toBe(1);
    expect(store.getActions()).toContainEqual({ type: ADD_MESSAGE, message });
});