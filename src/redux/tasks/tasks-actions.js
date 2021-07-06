import { createAction } from '@reduxjs/toolkit';

const getAllTasksRequest = createAction('tasks/getTasksRequest');
const getAllTasksSuccess = createAction('tasks/getTasksSuccess');
const getAllTasksError = createAction('tasks/getTasksError');

const addTaskRequest = createAction('tasks/addRequest');
const addTaskSuccess = createAction('tasks/addSuccess');
const addTaskError = createAction('tasks/addError');

const deleteTaskRequest = createAction('tasks/deleteRequest');
const deleteTaskSuccess = createAction('tasks/deleteSuccess');
const deleteTaskError = createAction('tasks/deleteErTasks');

const updateHoursSpentOnTaskPerDayRequest = createAction(
  'tasks/updateSpentHoursPerDayRequest',
);
const updateHoursSpentOnTaskPerDaySuccess = createAction(
  'tasks/updateSpentHoursPerDaySuccess',
);
const updateHoursSpentOnTaskPerDayError = createAction(
  'tasks/updateSpentHoursPerDayError',
);
export const changeFilter = createAction('tasks/changeFilter');

const tasksActions = {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  updateHoursSpentOnTaskPerDayRequest,
  updateHoursSpentOnTaskPerDaySuccess,
  updateHoursSpentOnTaskPerDayError,
  changeFilter,
  getAllTasksRequest,
  getAllTasksSuccess,
  getAllTasksError,
};

export default tasksActions;
