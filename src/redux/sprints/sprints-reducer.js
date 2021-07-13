import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { projectsActions } from '../projects';
import { sprintsActions } from '../sprints';
import { authActions } from '../auth';

const { getProjectInfoSuccess } = projectsActions;

const { addSprintSuccess, deleteSprintSuccess, editSprintTitleSuccess } =
  sprintsActions;

const { logoutSuccess } = authActions;

const itemsReducer = createReducer([], {
  [getProjectInfoSuccess]: (_, { payload }) => payload.sprints,
  [addSprintSuccess]: (_, { payload }) => payload,
  [deleteSprintSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editSprintTitleSuccess]: (state, { payload }) =>
    state.map(sprint => (sprint.id === payload.id ? payload : sprint)),
  [logoutSuccess]: () => [],
});

const sprintsReducer = combineReducers({
  items: itemsReducer,
});

export default sprintsReducer;
