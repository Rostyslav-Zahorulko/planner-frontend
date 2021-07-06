import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { sprintsActions } from '../sprints';
import { tasksActions } from '../tasks';

const { getSprintInfoSuccess } = sprintsActions;
const {
  addTaskSuccess,
  deleteTaskSuccess,
  changeFilter,
  updateHoursSpentOnTaskPerDaySuccess,
} = tasksActions;

const itemsReducer = createReducer([], {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.tasks,
  [addTaskSuccess]: (_, { payload }) => payload,
  [deleteTaskSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updateHoursSpentOnTaskPerDaySuccess]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const tasksReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default tasksReducer;
