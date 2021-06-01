import * as actions from './actions';

import usersData from '../data/users.json';
import userStats from '../data/users_statistic.json';

//Comment: mocking async data request
export const fetchUsers = () => dispatch => {
  dispatch(actions.fetchUsersRequest());

  try {
    dispatch(actions.fetchUsersSuccess(usersData));
    dispatch(actions.fetchStatsSuccess(userStats));
  } catch (error) {
    dispatch(actions.fetchUsersError(error.message));
  }
};

export const changeCurrentUser = user => dispatch => {
  dispatch(actions.changeCurrentUser(user));
};
