import { createStore } from 'redux';
import appReducer from '../reducers';

const initialState = {};

const store = createStore(appReducer, initialState);

export default store;
