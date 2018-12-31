import { combineReducers } from 'redux';

import userReducer from './users';
import teamReducer from './teams';

const appReducer = combineReducers({
  users: userReducer,
  team: teamReducer,
});

export default appReducer;
