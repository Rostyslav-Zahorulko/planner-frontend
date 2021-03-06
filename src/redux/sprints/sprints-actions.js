import { createAction } from '@reduxjs/toolkit';

const addSprintRequest = createAction('sprints/addRequest');
const addSprintSuccess = createAction('sprints/addSuccess');
const addSprintError = createAction('sprints/addError');

const deleteSprintRequest = createAction('sprints/deleteRequest');
const deleteSprintSuccess = createAction('sprints/deleteSuccess');
const deleteSprintError = createAction('sprints/deleteError');

const editSprintTitleRequest = createAction('sprints/editTitleRequest');
const editSprintTitleSuccess = createAction('sprints/editTitleSuccess');
const editSprintTitleError = createAction('sprints/editTitleError');

const getSprintInfoRequest = createAction('sprints/getInfoRequest');
const getSprintInfoSuccess = createAction('sprints/getInfoSuccess ');
const getSprintInfoError = createAction('sprints/getInfoError');

const sprintsActions = {
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
};

export default sprintsActions;
