import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import fetch from "cross-fetch";

export const UPDATE_MESSAGES = "updateMessages";
export const ADD_MESSAGE = "addMessage";
const apiUrl = "http://localhost:3001";

// ------ ACTIONS -------
export function updateMessages(messages) {
    return {
        type: UPDATE_MESSAGES,
        messages
    };
}

export function fetchMessages() {
    return (dispatch) => {
        return fetch(apiUrl)
            .then(response => response.json())
            .then((response) => {
                dispatch(updateMessages(response))
            });
    }
}

export function pushMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    };
}

export function sendMessage(data) {
    return (dispatch) => {
        return fetch(apiUrl, {method: "POST", body: JSON.stringify(data)})
            .then((response) => dispatch(pushMessage(data)));
    }
}

// ------ /ACTIONS -------

// ------ STORE -------
export const initialState = {
    messages: []
};

export const reducer = function (state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, action.message]
            };
        }
        case UPDATE_MESSAGES: {
            return {
                ...state,
                messages: action.messages
            };
        }
        default: {
            return state;
        }
    }
};

export default createStore(reducer, applyMiddleware(thunkMiddleware));
