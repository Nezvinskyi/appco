import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as actions from './actions';

const currentUser = createReducer(
  {},
  {
    [actions.changeCurrentUser]: (_, { payload }) => payload,
  },
);

const users = createReducer([], {
  [actions.fetchUsersSuccess]: (_, { payload }) => payload,
});

const stats = createReducer([], {
  [actions.fetchStatsSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
  currentUser,
  users,
  stats,
});
