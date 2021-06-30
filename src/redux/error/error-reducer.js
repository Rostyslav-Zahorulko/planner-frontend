import { createReducer } from '@reduxjs/toolkit';
import { authActions } from '../auth';
import { projectsActions } from '../projects';
import { sprintsActions } from '../sprints';
import { tasksActions } from '../tasks';

const { registerError, loginError, logoutError, getCurrentUserError } =
  authActions;

const {
  getProjectsError,
  addProjectError,
  deleteProjectError,
  editProjectTitleError,
  getProjectInfoError,
} = projectsActions;

const {
  addSprintError,
  deleteSprintError,
  editSprintTitleError,
  getSprintInfoError,
} = sprintsActions;

const { addTaskError, deleteTaskError } = tasksActions;

const errorReducer = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,

  [getProjectsError]: (_, { payload }) => payload,
  [addProjectError]: (_, { payload }) => payload,
  [deleteProjectError]: (_, { payload }) => payload,
  [editProjectTitleError]: (_, { payload }) => payload,
  [getProjectInfoError]: (_, { payload }) => payload,

  [addSprintError]: (_, { payload }) => payload,
  [deleteSprintError]: (_, { payload }) => payload,
  [editSprintTitleError]: (_, { payload }) => payload,
  [getSprintInfoError]: (_, { payload }) => payload,

  [addTaskError]: (_, { payload }) => payload,
  [deleteTaskError]: (_, { payload }) => payload,
});

export default errorReducer;
