import { createAction } from '@reduxjs/toolkit';

const fetchProjectsRequest = createAction('projects/fetchRequest');
const fetchProjectsSuccess = createAction('projects/fetchSuccess');
const fetchProjectsError = createAction('projects/fetchError');

const addProjectRequest = createAction('projects/addRequest');
const addProjectSuccess = createAction('projects/addSuccess');
const addProjectError = createAction('projects/addError');

const deleteProjectRequest = createAction('projects/deleteRequest');
const deleteProjectSuccess = createAction('projects/deleteSuccess');
const deleteProjectError = createAction('projects/deleteError');

const changeProjectTitleRequest = createAction('projects/changeTitleRequest');
const changeProjectTitleSuccess = createAction('projects/changeTitleSuccess');
const changeProjectTitleError = createAction('projects/changeTitleError');

const projectsActions = {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  changeProjectTitleRequest,
  changeProjectTitleSuccess,
  changeProjectTitleError,
};

export default projectsActions;
