import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { sprintsActions } from '../sprints';
import currentSprintActions from '../current-sprint/current-sprint-actions';

const { getSprintInfoSuccess, editSprintTitleSuccess } = sprintsActions;
const { getSprintDisplayedDateSuccess, setNewDisplayedDateSuccess } =
  currentSprintActions;

const titleReducer = createReducer('', {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.title,
  [editSprintTitleSuccess]: (_, { payload }) => payload.title,
});

const durationReducer = createReducer(0, {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.duration,
});

const startDateReducer = createReducer(0, {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.startDate,
});

const displayedDateReducer = createReducer('', {
  [getSprintDisplayedDateSuccess]: (_, { payload }) => payload,
  [setNewDisplayedDateSuccess]: (_, { payload }) => payload,
});

const currentSprintReducer = combineReducers({
  title: titleReducer,
  duration: durationReducer,
  startDate: startDateReducer,
  displayedDate: displayedDateReducer,
});

export default currentSprintReducer;
