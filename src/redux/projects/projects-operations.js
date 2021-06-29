import axios from 'axios';
import { projectsActions } from '../projects';

const {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsError,
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  editProjectTitleRequest,
  editProjectTitleSuccess,
  editProjectTitleError,
  getProjectInfoRequest,
  getProjectInfoSuccess,
  getProjectInfoError,
} = projectsActions;

const getProjects = () => async dispatch => {
  dispatch(getProjectsRequest());

  try {
    const { data } = await axios.get('/projects');

    dispatch(getProjectsSuccess(data));
  } catch ({ message }) {
    dispatch(getProjectsError(message));
  }
};

const addProject = project => async dispatch => {
  dispatch(addProjectRequest());

  try {
    const { data } = await axios.post('/projects', project);

    dispatch(addProjectSuccess(data));
  } catch ({ message }) {
    dispatch(addProjectError(message));
  }
};

const deleteProject = id => async dispatch => {
  dispatch(deleteProjectRequest());

  try {
    await axios.delete(`/projects/${id}`);

    dispatch(deleteProjectSuccess(id));
  } catch ({ message }) {
    dispatch(deleteProjectError(message));
  }
};

const editProjectTitle =
  ({ id, title }) =>
  async dispatch => {
    const update = { title };

    dispatch(editProjectTitleRequest());
    try {
      const { data } = await axios.patch(`/projects/${id}`, update);

      dispatch(editProjectTitleSuccess(data));
    } catch ({ message }) {
      dispatch(editProjectTitleError(message));
    }
  };

const getProjectInfo = id => async dispatch => {
  dispatch(getProjectInfoRequest());

  try {
    const { data } = await axios.get(`/projects/${id}`);

    dispatch(getProjectInfoSuccess(data));
  } catch ({ message }) {
    dispatch(getProjectInfoError(message));
  }
};

const projectsOperations = {
  getProjects,
  addProject,
  deleteProject,
  editProjectTitle,
  getProjectInfo,
};

export default projectsOperations;
