import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { sprintsActions } from '../sprints';

const {
  getSprintsSuccess,
  addSprintSuccess,
  deleteSprintSuccess,
  editSprintTitleSuccess,
} = sprintsActions;

const itemsReducer = createReducer([], {
  [getSprintsSuccess]: (_, { payload }) => payload,
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [deleteSprintSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editSprintTitleSuccess]: (state, { payload }) =>
    state.map(sprint => (sprint.id !== payload.id ? sprint : payload)),
});

const sprintsReducer = combineReducers({
  items: itemsReducer,
});

export default sprintsReducer;
