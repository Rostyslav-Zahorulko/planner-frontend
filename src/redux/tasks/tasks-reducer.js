import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { sprintsActions } from '../sprints';
import { tasksActions } from '../tasks';
import { authActions } from '../auth';

const { getSprintInfoSuccess } = sprintsActions;

const {
  addTaskSuccess,
  deleteTaskSuccess,
  updateHoursSpentOnTaskPerDaySuccess,
  changeFilter,
} = tasksActions;

const { logoutSuccess } = authActions;

const itemsReducer = createReducer([], {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.tasks,
  [addTaskSuccess]: (_, { payload }) => payload,
  [deleteTaskSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updateHoursSpentOnTaskPerDaySuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => [],
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
  [logoutSuccess]: () => '',
});

const tasksReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default tasksReducer;
