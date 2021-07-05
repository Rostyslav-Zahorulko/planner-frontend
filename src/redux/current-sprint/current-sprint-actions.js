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

const currentSprintActions = {
  getSprintDisplayedDateRequest,
  getSprintDisplayedDateSuccess,
  getSprintDisplayedDateError,
};

export default currentSprintActions;
