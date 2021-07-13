import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { sprintsActions } from '../sprints';
import currentSprintActions from '../current-sprint/current-sprint-actions';
import { authActions } from '../auth';

const { getSprintInfoSuccess, editSprintTitleSuccess } = sprintsActions;
const { getSprintDisplayedDateSuccess, setNewDisplayedDateSuccess } =
  currentSprintActions;
const { logoutSuccess } = authActions;

const titleReducer = createReducer('', {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.title,
  [editSprintTitleSuccess]: (_, { payload }) => payload.title,
  [logoutSuccess]: () => '',
});

const durationReducer = createReducer(0, {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.duration,
  [logoutSuccess]: () => 0,
});

const startDateReducer = createReducer(0, {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.startDate,
  [logoutSuccess]: () => 0,
});

const displayedDateReducer = createReducer('', {
  [getSprintDisplayedDateSuccess]: (_, { payload }) => payload,
  [setNewDisplayedDateSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => '',
});

const currentSprintReducer = combineReducers({
  title: titleReducer,
  duration: durationReducer,
  startDate: startDateReducer,
  displayedDate: displayedDateReducer,
});

export default currentSprintReducer;
