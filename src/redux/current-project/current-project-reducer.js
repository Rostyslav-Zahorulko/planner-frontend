import { combineReducers, createReducer } from '@reduxjs/toolkit';

import { projectsActions } from '../projects';

const {
  getProjectInfoSuccess,
  addUserInProjectSuccess,
  editProjectTitleSuccess,
} = projectsActions;

const titleReducer = createReducer('', {
  [getProjectInfoSuccess]: (_, { payload }) => payload.title,
  [editProjectTitleSuccess]: (_, { payload }) => payload,
});

const descriptionReducer = createReducer('', {
  [getProjectInfoSuccess]: (_, { payload }) => payload.description,
});

const teamReducer = createReducer([], {
  [getProjectInfoSuccess]: (_, { payload }) => payload.team,
  // [addUserInProjectSuccess]: (state, { payload }) => [...state, payload],
});

const currentProjectReducer = combineReducers({
  title: titleReducer,
  description: descriptionReducer,
  team: teamReducer,
});

export default currentProjectReducer;
