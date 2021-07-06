import axios from 'axios';
import { tasksActions } from '../tasks';
import * as dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const {
  addTaskRequest,
  addTaskSuccess,
  addTaskError,
  deleteTaskRequest,
  deleteTaskSuccess,
  deleteTaskError,
  updateHoursSpentOnTaskPerDayRequest,
  updateHoursSpentOnTaskPerDaySuccess,
  updateHoursSpentOnTaskPerDayError,
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

const deleteTask = (projectId, sprintId, taskId) => async dispatch => {
  dispatch(deleteTaskRequest());

  try {
    await axios.delete(`/projects/${projectId}/${sprintId}/${taskId}`);

    dispatch(deleteTaskSuccess(taskId));
  } catch ({ message }) {
    dispatch(deleteTaskError(message));
  }
};

const updateHoursPerDay =
  (projectId, sprintId, taskId, dayWithHours) => async dispatch => {
    // console.log(dayWithHours);
    const formattedDate = dayjs(dayWithHours.date).format('YYYY-MM-DD');
    const normalizedDaywithHours = {
      ...dayWithHours,
      date: formattedDate,
    };

    dispatch(updateHoursSpentOnTaskPerDayRequest());
    console.log(normalizedDaywithHours);
    try {
      const { data } = await axios.patch(
        `/projects/${projectId}/${sprintId}/${taskId}`,
        normalizedDaywithHours,
      );
      // console.log(data);

      dispatch(updateHoursSpentOnTaskPerDaySuccess(data.task));
    } catch ({ message }) {
      dispatch(updateHoursSpentOnTaskPerDayError(message));
    }
  };

const tasksOperations = {
  addTask,
  deleteTask,
  updateHoursPerDay,
};

export default tasksOperations;
