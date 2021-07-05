import axios from 'axios';
import { sprintsActions } from '../sprints';

const {
  addSprintRequest,
  addSprintSuccess,
  addSprintError,
  deleteSprintRequest,
  deleteSprintSuccess,
  deleteSprintError,
  editSprintTitleRequest,
  editSprintTitleSuccess,
  editSprintTitleError,
  getSprintInfoRequest,
  getSprintInfoSuccess,
  getSprintInfoError,
  getAllSprintsRequest,
  getAllSprintsSuccess,
  getAllSprintsError,
} = sprintsActions;

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

const deleteSprint = (projectId, sprintId) => async dispatch => {
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

const getSprintInfo = (projectId, sprintId) => async dispatch => {
  dispatch(getSprintInfoRequest());

  try {
    const { data } = await axios.get(`/projects/${projectId}/${sprintId}`);

    dispatch(getSprintInfoSuccess(data));
  } catch ({ message }) {
    dispatch(getSprintInfoError(message));
  }
};

const getAllSprints = projectId => async dispatch => {
  dispatch(getAllSprintsRequest());

  try {
    const { data } = await axios.get(`/projects/${projectId}`);

    dispatch(getAllSprintsSuccess(data.project.sprints));
  } catch ({ response }) {
    dispatch(getAllSprintsError(response.data.message));
  }
};

const sprintsOperations = {
  addSprint,
  deleteSprint,
  editSprintTitle,
  getSprintInfo,
  getAllSprints,
};

export default sprintsOperations;
