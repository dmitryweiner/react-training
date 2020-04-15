// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { initialState as reducerInitialState, reducer } from './store'
import thunkMiddleware from "redux-thunk";

export let testStore = null;

function render(
    ui,
    {
        initialState = reducerInitialState,
        store = createStore(reducer, initialState, applyMiddleware(thunkMiddleware)),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    testStore = store;
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }