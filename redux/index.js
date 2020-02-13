import { createStore } from 'redux';
import reducer from './reducers';
export const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};