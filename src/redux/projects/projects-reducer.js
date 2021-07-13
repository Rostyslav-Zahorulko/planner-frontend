import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { projectsActions } from '../projects';
import { authActions } from '../auth';

const {
  getProjectsSuccess,
  addProjectSuccess,
  deleteProjectSuccess,
  editProjectTitleSuccess,
} = projectsActions;

const { logoutSuccess } = authActions;

const itemsReducer = createReducer([], {
  [getProjectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editProjectTitleSuccess]: (state, { payload }) =>
    state.map(project => (project.id === payload.id ? payload : project)),
  [logoutSuccess]: () => [],
});

const projectsReducer = combineReducers({
  items: itemsReducer,
});

export default projectsReducer;
