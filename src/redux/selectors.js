// import { createSelector } from 'reselect';

export const getAllUsers = state => state.users;
export const getAllStats = state => state.stats;

export const getCurrentUserId = state => state.currentUser.id;
export const getCurrentUserFirstName = state => state.currentUser.first_name;
export const getCurrentUserLastName = state => state.currentUser.last_name;

const getUserStats = state => {
  const id = getCurrentUserId(state);

  return state.stats.filter(({ user_id }) => user_id === id);
};

export const getUserViews = state => {
  const userStats = getUserStats(state);
  const userViews = [];
  userStats.forEach(({ date, page_views }) => {
    userViews.push({ date, page_views });
  });
  return userViews;
};

export const getUserClicks = state => {
  const userStats = getUserStats(state);
  const userClicks = [];
  userStats.forEach(({ date, clicks }) => {
    userClicks.push({ date, clicks });
  });
  return userClicks;
};
