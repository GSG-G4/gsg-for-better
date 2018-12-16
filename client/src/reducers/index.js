import { combineReducers } from 'redux';

import userReducer from './users';

const appReducer = combineReducers({
  users: userReducer,
});

export default appReducer;
