import { createAction } from '@reduxjs/toolkit';

const fetchTasksRequest = createAction('tasks/fetchRequest');
const fetchTasksSuccess = createAction('tasks/fetchSuccess');
const fetchTasksError = createAction('tasks/fetchError');

const addTaskRequest = createAction('tasks/addRequest');
const addTaskSuccess = createAction('tasks/addSuccess');
const addTaskError = createAction('tasks/addError');

const deleteTaskRequest = createAction('tasks/deleteRequest');
const deleteTaskSuccess = createAction('tasks/deleteSuccess');
const deleteTaskError = createAction('tasks/deleteErTasks');

const changeHoursSpentOnTaskPerDayRequest = createAction(
  'tasks/changeSpentHoursPerDayRequest',
);
const changeHoursSpentOnTaskPerDaySuccess = createAction(
  'tasks/changeSpentHoursPerDaySuccess',
);
const changeHoursSpentOnTaskPerDayError = createAction(
  'tasks/changeSpentHoursPerDayError',
);

const filterTasksByTitle = createAction('tasks/filterByTitle');

const tasksActions = {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  changeHoursSpentOnTaskPerDayRequest,
  changeHoursSpentOnTaskPerDaySuccess,
  changeHoursSpentOnTaskPerDayError,
  filterTasksByTitle,
};

export default tasksActions;
