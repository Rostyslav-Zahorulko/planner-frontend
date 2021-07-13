import { createReducer } from '@reduxjs/toolkit';

import { authActions } from '../auth';
import { projectsActions } from '../projects';
import { sprintsActions } from '../sprints';
import { tasksActions } from '../tasks';

const {
  registerRequest,
  registerError,
  loginRequest,
  loginError,
  logoutRequest,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserError,
} = authActions;

const {
  getProjectsRequest,
  getProjectsError,
  addProjectRequest,
  addProjectError,
  deleteProjectRequest,
  deleteProjectError,
  editProjectTitleRequest,
  editProjectTitleError,
  addUserInProjectRequest,
  addUserInProjectError,
  getProjectInfoRequest,
  getProjectInfoError,
} = projectsActions;

const {
  addSprintRequest,
  addSprintError,
  deleteSprintRequest,
  deleteSprintError,
  editSprintTitleRequest,
  editSprintTitleError,
  getSprintInfoRequest,
  getSprintInfoError,
} = sprintsActions;

const {
  addTaskRequest,
  addTaskError,
  deleteTaskRequest,
  deleteTaskError,
  updateHoursSpentOnTaskPerDayRequest,
  updateHoursSpentOnTaskPerDayError,
} = tasksActions;

const errorReducer = createReducer(null, {
  [registerRequest]: () => null,
  [registerError]: (_, { payload }) => payload,
  [loginRequest]: () => null,
  [loginError]: (_, { payload }) => payload,
  [logoutRequest]: () => null,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserRequest]: () => null,
  [getCurrentUserError]: (_, { payload }) => payload,

  [getProjectsRequest]: () => null,
  [getProjectsError]: (_, { payload }) => payload,
  [addProjectRequest]: () => null,
  [addProjectError]: (_, { payload }) => payload,
  [deleteProjectRequest]: () => null,
  [deleteProjectError]: (_, { payload }) => payload,
  [editProjectTitleRequest]: () => null,
  [editProjectTitleError]: (_, { payload }) => payload,
  [addUserInProjectRequest]: () => null,
  [addUserInProjectError]: (_, { payload }) => payload,
  [getProjectInfoRequest]: () => null,
  [getProjectInfoError]: (_, { payload }) => payload,

  [addSprintRequest]: () => null,
  [addSprintError]: (_, { payload }) => payload,
  [deleteSprintRequest]: () => null,
  [deleteSprintError]: (_, { payload }) => payload,
  [editSprintTitleRequest]: () => null,
  [editSprintTitleError]: (_, { payload }) => payload,
  [getSprintInfoRequest]: () => null,
  [getSprintInfoError]: (_, { payload }) => payload,

  [addTaskRequest]: () => null,
  [addTaskError]: (_, { payload }) => payload,
  [deleteTaskRequest]: () => null,
  [deleteTaskError]: (_, { payload }) => payload,
  [updateHoursSpentOnTaskPerDayRequest]: () => null,
  [updateHoursSpentOnTaskPerDayError]: (_, { payload }) => payload,
});

export default errorReducer;
