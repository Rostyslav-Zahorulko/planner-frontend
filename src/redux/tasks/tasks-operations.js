import axios from 'axios';
import { toast } from 'react-toastify';
import * as dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { tasksActions } from '../tasks';

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
  ({ task, projectId, sprintId }) =>
  async dispatch => {
    dispatch(addTaskRequest());

    try {
      const { data } = await axios.post(
        `/projects/${projectId}/sprints/${sprintId}`,
        task,
      );

      // console.log(data.project.sprints);

      const {
        project: { sprints },
      } = data;

      // console.log(sprints);

      const sprint = sprints.find(sprint => sprint.id === sprintId);

      // console.log(sprint);

      dispatch(addTaskSuccess(sprint.tasks));
    } catch (e) {
      if (e.response) {
        dispatch(addTaskError(e.response.data.message));
        toast.error(e.response.data.message);
        return;
      }

      dispatch(addTaskError(e.message));
      toast.error(e.message);
    }
  };

const deleteTask = (projectId, sprintId, taskId) => async dispatch => {
  dispatch(deleteTaskRequest());

  try {
    await axios.delete(`/projects/${projectId}/sprints/${sprintId}/${taskId}`);

    dispatch(deleteTaskSuccess(taskId));
  } catch (e) {
    if (e.response) {
      dispatch(deleteTaskError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(deleteTaskError(e.message));
    toast.error(e.message);
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
    // console.log(normalizedDaywithHours);
    try {
      const { data } = await axios.patch(
        `/projects/${projectId}/sprints/${sprintId}/${taskId}`,
        normalizedDaywithHours,
      );
      // console.log(data);

      dispatch(updateHoursSpentOnTaskPerDaySuccess(data.tasks));
    } catch (e) {
      if (e.response) {
        dispatch(updateHoursSpentOnTaskPerDayError(e.response.data.message));
        toast.error(e.response.data.message);
        return;
      }

      dispatch(updateHoursSpentOnTaskPerDayError(e.message));
      toast.error(e.message);
    }
  };

const tasksOperations = {
  addTask,
  deleteTask,
  updateHoursPerDay,
};

export default tasksOperations;
