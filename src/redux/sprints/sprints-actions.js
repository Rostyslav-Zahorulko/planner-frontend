import { createAction } from '@reduxjs/toolkit';

const getSprintsRequest = createAction('sprints/getRequest');
const getSprintsSuccess = createAction('sprints/getSuccess');
const getSprintsError = createAction('sprints/getError');

const addSprintRequest = createAction('sprints/addRequest');
const addSprintSuccess = createAction('sprints/addSuccess');
const addSprintError = createAction('sprints/addError');

const deleteSprintRequest = createAction('sprints/deleteRequest');
const deleteSprintSuccess = createAction('sprints/deleteSuccess');
const deleteSprintError = createAction('sprints/deleteError');

const editSprintTitleRequest = createAction('sprints/editTitleRequest');
const editSprintTitleSuccess = createAction('sprints/editTitleSuccess');
const editSprintTitleError = createAction('sprints/editTitleError');

const sprintsActions = {
  getSprintsRequest,
  getSprintsSuccess,
  getSprintsError,
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  editSprintTitleRequest,
  editSprintTitleSuccess,
  editSprintTitleError,
};

export default sprintsActions;
