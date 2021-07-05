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
export const changeFilter = createAction('tasks/changeFilter');


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
  changeFilter,
};

export default tasksActions;
