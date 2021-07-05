import { createAction } from '@reduxjs/toolkit';

const getSprintDisplayedDateRequest = createAction(
  'sprints/getSprintDisplayedDateRequest',
);
const getSprintDisplayedDateSuccess = createAction(
  'sprints/getSprintDisplayedDateSuccess ',
);
const getSprintDisplayedDateError = createAction(
  'sprints/getSprintDisplayedDateError',
);

const setNewDisplayedDateSuccess = createAction(
  'sprints/setNewDisplayedDateSuccess',
);

const currentSprintActions = {
  getSprintDisplayedDateRequest,
  getSprintDisplayedDateSuccess,
  getSprintDisplayedDateError,
  setNewDisplayedDateSuccess,
};

export default currentSprintActions;
