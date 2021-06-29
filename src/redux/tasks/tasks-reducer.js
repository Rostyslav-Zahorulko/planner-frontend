import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { sprintsActions } from '../sprints';
import { tasksActions } from '../tasks';

const { getSprintInfoSuccess } = sprintsActions;

const { addTaskSuccess, deleteTaskSuccess, filterTasksByTitle } = tasksActions;

const itemsReducer = createReducer([], {
  [getSprintInfoSuccess]: (_, { payload }) => payload.items,
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
