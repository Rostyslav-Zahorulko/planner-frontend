import { combineReducers, createReducer } from '@reduxjs/toolkit';

import { projectsActions } from '../projects';
import { authActions } from '../auth';

const {
  getProjectInfoSuccess,
  addUserInProjectSuccess,
  editProjectTitleSuccess,
} = projectsActions;

const { logoutSuccess } = authActions;

const titleReducer = createReducer('', {
  [getProjectInfoSuccess]: (_, { payload }) => payload.title,
  [editProjectTitleSuccess]: (_, { payload }) => payload.title,
  [logoutSuccess]: () => '',
});

const descriptionReducer = createReducer('', {
  [getProjectInfoSuccess]: (_, { payload }) => payload.description,
  [logoutSuccess]: () => '',
});

const teamReducer = createReducer([], {
  [getProjectInfoSuccess]: (_, { payload }) => payload.team,
  [addUserInProjectSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => [],
});

const currentProjectReducer = combineReducers({
  title: titleReducer,
  description: descriptionReducer,
  team: teamReducer,
});

export default currentProjectReducer;
