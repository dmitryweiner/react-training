import {createStore, applyMiddleware, Dispatch} from "redux";
import thunkMiddleware from "redux-thunk";
import fetch from "cross-fetch";
import {IMessage, IMessagesList, IStoreState} from './interfaces';

export const UPDATE_MESSAGES = "updateMessages";
export const ADD_MESSAGE = "addMessage";
const apiUrl = "http://localhost:3001";

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V

type Response = IMessagesList;

export type ActionType =
    | Action<typeof UPDATE_MESSAGES, { messages: IMessagesList }>
    | Action<typeof ADD_MESSAGE, { message: IMessage }>

// ------ ACTIONS -------
export function updateMessages(messages: IMessagesList) {
    return {
        type: UPDATE_MESSAGES,
        messages
    };
}

export function fetchMessages() {
    return (dispatch: Dispatch) => {
        return fetch(apiUrl)
            .then(response => response.json())
            .then((response: Response) => {
                dispatch(updateMessages(response))
            });
    }
}

export function pushMessage(message: IMessage) {
    return {
        type: ADD_MESSAGE,
        message
    };
}

export function sendMessage(data: IMessage) {
    return (dispatch: Dispatch) => {
        return fetch(apiUrl, {method: "POST", body: JSON.stringify(data)})
            .then((response) => dispatch(pushMessage(data)));
    }
}

// ------ /ACTIONS -------

// ------ STORE -------
export const initialState: IStoreState = {
    messages: []
};

export const reducer = function (state: IStoreState = initialState, action: ActionType) {
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
