import axios from 'axios';
import { tasksActions } from '../tasks';

const {
  getTasksRequest,
  getTasksSuccess,
  getTasksError,
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

const getTasks =
  ({ projectId, sprintId }) =>
  async dispatch => {
    dispatch(getTasksRequest());

    try {
      const { data } = await axios.get(`/projects/${projectId}/${sprintId}`);

      dispatch(getTasksSuccess(data));
    } catch ({ message }) {
      dispatch(getTasksError(message));
    }
  };

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
  getTasks,
  addTask,
  deleteTask,
  //   editHoursSpentOnTaskPerDay,
};

export default tasksOperations;
