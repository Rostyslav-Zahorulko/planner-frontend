import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { projectsActions } from '../projects';
import { sprintsActions } from '../sprints';

const { getProjectInfoSuccess } = projectsActions;
const {
  addSprintSuccess,
  deleteSprintSuccess,
  editSprintTitleSuccess,
  getAllSprintsSuccess,
} = sprintsActions;

const itemsReducer = createReducer([], {
  [getProjectInfoSuccess]: (_, { payload }) => payload.items,
  [addSprintSuccess]: (state, { payload }) => [...state, payload],
  [deleteSprintSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editSprintTitleSuccess]: (state, { payload }) =>
    state.map(sprint => (sprint.id !== payload.id ? sprint : payload)),
  [getAllSprintsSuccess]: (_, { payload }) => payload,
});

const sprintsReducer = combineReducers({
  items: itemsReducer,
});

export default sprintsReducer;
