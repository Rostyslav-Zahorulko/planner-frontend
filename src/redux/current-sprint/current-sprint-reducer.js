import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { sprintsActions } from '../sprints';
import currentSprintActions from '../current-sprint/current-sprint-actions';

const { getSprintInfoSuccess } = sprintsActions;
const { getSprintDisplayedDateSuccess, setNewDisplayedDateSuccess } =
  currentSprintActions;

// const initialSprintState = {
//   title: '',
//   duration: '',
//   startDate: '',
//   displayedDate: '',
// };

// const currentSprintReducer = createReducer(initialSprintState, {
//   [getSprintInfoSuccess]: (_, { payload }) => ({
//     title: payload.sprint.title,
//     duration: payload.sprint.duration,
//     startDate: payload.sprint.startDate,
//   }),
// });

const titleReducer = createReducer('', {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.title,
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
