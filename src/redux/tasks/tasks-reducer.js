import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { tasksActions } from '../tasks';

const {
  getTasksSuccess,
  addTaskSuccess,
  deleteTaskSuccess,
  filterTasksByTitle,
} = tasksActions;

const itemsReducer = createReducer([], {
  [getTasksSuccess]: (_, { payload }) => payload,
  [addTaskSuccess]: (state, { payload }) => [...state, payload],
  [deleteTaskSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterTasksByTitle]: (_, { payload }) => payload,
});

const tasksReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default tasksReducer;
