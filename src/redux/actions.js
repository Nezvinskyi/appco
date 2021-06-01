import { createAction } from '@reduxjs/toolkit';

export const fetchUsersRequest = createAction('users/fetchUsersRequest');
export const fetchUsersSuccess = createAction('users/fetchUsersSuccess');
export const fetchUsersError = createAction('users/fetchUsersError');

export const fetchStatsRequest = createAction('users/fetchStatsRequest');
export const fetchStatsSuccess = createAction('users/fetchStatsSuccess');
export const fetchStatsError = createAction('users/fetchStatsError');

export const changeCurrentUser = createAction('users/changeCurrentUser');
