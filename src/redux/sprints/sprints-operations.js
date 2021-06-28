import axios from 'axios';
import { sprintsActions } from '../sprints';

const {
  getSprintsRequest,
  getSprintsSuccess,
  getSprintsError,
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  editSprintTitleRequest,
  editSprintTitleSuccess,
  editSprintTitleError,
} = sprintsActions;

const getSprints = projectId => async dispatch => {
  dispatch(getSprintsRequest());

  try {
    const { data } = await axios.get(`/projects/${projectId}`);

    dispatch(getSprintsSuccess(data));
  } catch ({ message }) {
    dispatch(getSprintsError(message));
  }
};

const addSprint =
  ({ projectId, sprint }) =>
  async dispatch => {
    dispatch(addSprintRequest());

    try {
      const { data } = await axios.post(`/projects/${projectId}`, sprint);

      dispatch(addSprintSuccess(data));
    } catch ({ message }) {
      dispatch(addSprintError(message));
    }
  };

const deleteSprint =
  ({ projectId, sprintId }) =>
  async dispatch => {
    dispatch(deleteSprintRequest());

    try {
      await axios.delete(`/projects/${projectId}/${sprintId}`);

      dispatch(deleteSprintSuccess(sprintId));
    } catch ({ message }) {
      dispatch(deleteSprintError(message));
    }
  };

const editSprintTitle =
  ({ projectId, sprintId, title }) =>
  async dispatch => {
    const update = { title };

    dispatch(editSprintTitleRequest());

    try {
      const { data } = await axios.patch(
        `/projects/${projectId}/${sprintId}`,
        update,
      );

      dispatch(editSprintTitleSuccess(data));
    } catch ({ message }) {
      dispatch(editSprintTitleError(message));
    }
  };

const sprintsOperations = {
  getSprints,
  addSprint,
  deleteSprint,
  editSprintTitle,
};

export default sprintsOperations;
