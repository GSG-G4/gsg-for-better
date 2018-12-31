import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducer from '../reducers';

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  appReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
