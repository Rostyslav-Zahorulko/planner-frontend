import { createAction } from '@reduxjs/toolkit';

const fetchSprintsRequest = createAction('sprints/fetchRequest');
const fetchSprintsSuccess = createAction('sprints/fetchSuccess');
const fetchSprintsError = createAction('sprints/fetchError');

const addSprintRequest = createAction('sprints/addRequest');
const addSprintSuccess = createAction('sprints/addSuccess');
const addSprintError = createAction('sprints/addError');

const deleteSprintRequest = createAction('sprints/deleteRequest');
const deleteSprintSuccess = createAction('sprints/deleteSuccess');
const deleteSprintError = createAction('sprints/deleteError');

const changeSprintTitleRequest = createAction('sprints/changeTitleRequest');
const changeSprintTitleSuccess = createAction('sprints/changeTitleSuccess');
const changeSprintTitleError = createAction('sprints/changeTitleError');

const sprintsActions = {
  fetchSprintsRequest,
  fetchSprintsSuccess,
  fetchSprintsError,
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  changeSprintTitleRequest,
  changeSprintTitleSuccess,
  changeSprintTitleError,
};

export default sprintsActions;
