import { combineReducers } from 'redux';

import userReducer from './users';
import teamReducer from './teams';

const appReducer = combineReducers({
  users: userReducer,
  teams: teamReducer,
});

export default appReducer;
