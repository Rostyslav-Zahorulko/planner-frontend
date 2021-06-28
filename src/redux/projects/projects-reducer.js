import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { projectsActions } from './projects-actions';

const {
  getProjectsSuccess,
  addProjectSuccess,
  deleteProjectSuccess,
  editProjectTitleSuccess,
} = projectsActions;

const itemsReducer = createReducer([], {
  [getProjectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [deleteProjectSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [editProjectTitleSuccess]: (state, { payload }) =>
    state.map(project => (project.id !== payload.id ? project : payload)),
});

const projectsReducer = combineReducers({
  items: itemsReducer,
});

export default projectsReducer;
