import axios from 'axios';
import { tasksActions } from '../tasks';

const {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  //   editHoursSpentOnTaskPerDayRequest,
  //   editHoursSpentOnTaskPerDaySuccess,
  //   editHoursSpentOnTaskPerDayError,
} = tasksActions;

const addTask =
  ({ projectId, sprintId }) =>
  async dispatch => {
    dispatch(addTaskRequest());

    try {
      const { data } = await axios.post(`/projects/${projectId}/${sprintId}`);

      dispatch(addTaskSuccess(data));
    } catch ({ message }) {
      dispatch(addTaskError(message));
    }
  };

const deleteTask =
  ({ projectId, sprintId, taskId }) =>
  async dispatch => {
    dispatch(deleteTaskRequest());

    try {
      await axios.delete(`/projects/${projectId}/${sprintId}/${taskId}`);

      dispatch(deleteTaskSuccess(taskId));
    } catch ({ message }) {
      dispatch(deleteTaskError(message));
    }
  };

// const editHoursSpentOnTaskPerDay =
//   ({ projectId, sprintId, taskId, hours }) =>
//   async dispatch => {
//     dispatch(editHoursSpentOnTaskPerDayRequest());

//     try {
//       const { data } = await axios.patch(
//         `/projects/${projectId}/${sprintId}/${taskId}`,
//         hours,
//       );

//       dispatch(editHoursSpentOnTaskPerDaySuccess(data));
//     } catch ({ message }) {
//       dispatch(editHoursSpentOnTaskPerDayError(message));
//     }
//   };

const tasksOperations = {
  addTask,
  deleteTask,
  //   editHoursSpentOnTaskPerDay,
};

export default tasksOperations;
