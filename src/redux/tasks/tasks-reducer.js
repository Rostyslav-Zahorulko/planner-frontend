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
  getAllTasksSuccess,
} = tasksActions;

const itemsReducer = createReducer([], {
  [getSprintInfoSuccess]: (_, { payload }) => payload.sprint.tasks,
  [addTaskSuccess]: (state, { payload }) => [...state, payload],
  [deleteTaskSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updateHoursSpentOnTaskPerDaySuccess]: (_, { payload }) => payload,
  [getAllTasksSuccess]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const tasksReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default tasksReducer;
