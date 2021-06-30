import { createAction } from '@reduxjs/toolkit';

const addTaskRequest = createAction('tasks/addRequest');
const addTaskSuccess = createAction('tasks/addSuccess');
const addTaskError = createAction('tasks/addError');

const deleteTaskRequest = createAction('tasks/deleteRequest');
const deleteTaskSuccess = createAction('tasks/deleteSuccess');
const deleteTaskError = createAction('tasks/deleteErTasks');

// const editHoursSpentOnTaskPerDayRequest = createAction(
//   'tasks/editSpentHoursPerDayRequest',
// );
// const editHoursSpentOnTaskPerDaySuccess = createAction(
//   'tasks/editSpentHoursPerDaySuccess',
// );
// const editHoursSpentOnTaskPerDayError = createAction(
//   'tasks/editSpentHoursPerDayError',
// );

const filterTasksByTitle = createAction('tasks/filterByTitle');

const tasksActions = {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  // editHoursSpentOnTaskPerDayRequest,
  // editHoursSpentOnTaskPerDaySuccess,
  // editHoursSpentOnTaskPerDayError,
  filterTasksByTitle,
};

export default tasksActions;
