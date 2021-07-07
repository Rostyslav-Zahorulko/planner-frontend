import axios from 'axios';
import { toast } from 'react-toastify';

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
} = sprintsActions;

const addSprint =
  ({ projectId, sprint }) =>
  async dispatch => {
    dispatch(addSprintRequest());

    try {
      const { data } = await axios.post(
        `/projects/${projectId}/sprints`,
        sprint,
      );

      dispatch(addSprintSuccess(data.data.sprints));
    } catch (e) {
      if (e.response) {
        dispatch(addSprintError(e.response.data.message));
        toast.error(e.response.data.message);
        return;
      }

      dispatch(addSprintError(e.message));
      toast.error(e.message);
    }
  };

const deleteSprint = (projectId, sprintId) => async dispatch => {
  dispatch(deleteSprintRequest());

  try {
    await axios.delete(`/projects/${projectId}/sprints/${sprintId}`);

    dispatch(deleteSprintSuccess(sprintId));
  } catch (e) {
    if (e.response) {
      dispatch(deleteSprintError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(deleteSprintError(e.message));
    toast.error(e.message);
  }
};

const editSprintTitle =
  ({ projectId, sprintId, title }) =>
  async dispatch => {
    const update = { title };

    dispatch(editSprintTitleRequest());

    try {
      const { data } = await axios.patch(
        `/projects/${projectId}/sprints/${sprintId}`,
        update,
      );

      dispatch(editSprintTitleSuccess(data));
    } catch (e) {
      if (e.response) {
        dispatch(editSprintTitleError(e.response.data.message));
        toast.error(e.response.data.message);
        return;
      }

      dispatch(editSprintTitleError(e.message));
      toast.error(e.message);
    }
  };

const getSprintInfo = (projectId, sprintId) => async dispatch => {
  dispatch(getSprintInfoRequest());

  try {
    const { data } = await axios.get(
      `/projects/${projectId}/sprints/${sprintId}`,
    );

    dispatch(getSprintInfoSuccess(data));
  } catch (e) {
    if (e.response) {
      dispatch(getSprintInfoError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }
  }
};

// const getAllSprints = projectId => async dispatch => {
//   dispatch(getAllSprintsRequest());

//   try {
//     const { data } = await axios.get(`/projects/${projectId}`);

//     dispatch(getAllSprintsSuccess(data.project.sprints));
//   } catch ({ response }) {
//     dispatch(getAllSprintsError(response.data.message));
//   }
// };

const sprintsOperations = {
  addSprint,
  deleteSprint,
  editSprintTitle,
  getSprintInfo,
  // getAllSprints,
};

export default sprintsOperations;
