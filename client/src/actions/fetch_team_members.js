import axios from 'axios';
import { GET_TEAM_MEMBERS } from '../constants/actionTypes';

export default teamId => dispatch => {
  axios.get(`/teams/${teamId}/members`).then(({ data }) =>
    dispatch({
      type: GET_TEAM_MEMBERS,
      data,
    })
  );
};
