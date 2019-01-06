import { GET_TEAM_MEMBERS } from '../constants/actionTypes';

const initialState = {
  currentTeam: {
    members: [],
  },
};

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM_MEMBERS:
      return {
        ...state,
        currentTeam: {
          ...state.currentTeam
          members: action.data,
        },
      };
    default:
      return state;
  }
};
export default teamsReducer;
