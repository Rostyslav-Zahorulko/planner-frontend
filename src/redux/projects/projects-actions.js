import { createAction } from '@reduxjs/toolkit';

const getProjectsRequest = createAction('projects/getRequest');
const getProjectsSuccess = createAction('projects/getSuccess');
const getProjectsError = createAction('projects/getError');

const addProjectRequest = createAction('projects/addRequest');
const addProjectSuccess = createAction('projects/addSuccess');
const addProjectError = createAction('projects/addError');

const deleteProjectRequest = createAction('projects/deleteRequest');
const deleteProjectSuccess = createAction('projects/deleteSuccess');
const deleteProjectError = createAction('projects/deleteError');

const editProjectTitleRequest = createAction('projects/editTitleRequest');
const editProjectTitleSuccess = createAction('projects/editTitleSuccess');
const editProjectTitleError = createAction('projects/editTitleError');

// const getProjectInfoRequest = createAction('projects/getInfoRequest');
// const getProjectInfoSuccess = createAction('projects/getInfoSuccess ');
// const getProjectInfoError = createAction('projects/getInfoError');

const projectsActions = {
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
  // getProjectInfoRequest,
  // getProjectInfoSuccess,
  // getProjectInfoError,
};

export default projectsActions;
