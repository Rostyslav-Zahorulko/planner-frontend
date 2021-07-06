import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../auth';
import { projectsActions } from '../projects';
import { sprintsActions } from '../sprints';
import { tasksActions } from '../tasks';

const {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;

const {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsError,
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  editProjectTitleRequest,
  editProjectTitleSuccess,
  editProjectTitleError,
  getProjectInfoRequest,
  getProjectInfoSuccess,
  getProjectInfoError,
} = projectsActions;

const {
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  editSprintTitleRequest,
  editSprintTitleSuccess,
  editSprintTitleError,
  getSprintInfoRequest,
  getSprintInfoSuccess,
  getSprintInfoError,
} = sprintsActions;

const {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  getAllTasksRequest,
  getAllTasksSuccess,
  getAllTasksError,
} = tasksActions;

const isLoadingReducer = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
  [getCurrentUserRequest]: () => true,
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,

  [getProjectsRequest]: () => true,
  [getProjectsSuccess]: () => false,
  [getProjectsError]: () => false,
  [addProjectRequest]: () => true,
  [addProjectSuccess]: () => false,
  [addProjectError]: () => false,
  [deleteProjectRequest]: () => true,
  [deleteProjectSuccess]: () => false,
  [deleteProjectError]: () => false,
  [editProjectTitleRequest]: () => true,
  [editProjectTitleSuccess]: () => false,
  [editProjectTitleError]: () => false,
  [getProjectInfoRequest]: () => true,
  [getProjectInfoSuccess]: () => false,
  [getProjectInfoError]: () => false,

  [addSprintRequest]: () => true,
  [addSprintSuccess]: () => false,
  [addSprintError]: () => false,
  [deleteSprintRequest]: () => true,
  [deleteSprintSuccess]: () => false,
  [deleteSprintError]: () => false,
  [editSprintTitleRequest]: () => true,
  [editSprintTitleSuccess]: () => false,
  [editSprintTitleError]: () => false,
  [getSprintInfoRequest]: () => true,
  [getSprintInfoSuccess]: () => false,
  [getSprintInfoError]: () => false,

  [addTaskRequest]: () => true,
  [addTaskSuccess]: () => false,
  [addTaskError]: () => false,
  [deleteTaskRequest]: () => true,
  [deleteTaskSuccess]: () => false,
  [deleteTaskError]: () => false,
  [getAllTasksRequest]: () => true,
  [getAllTasksSuccess]: () => false,
  [getAllTasksError]: () => false,
});

export default isLoadingReducer;
