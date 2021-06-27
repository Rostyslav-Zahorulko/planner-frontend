import axios from 'axios';
import { projectsActions } from '../projects';

const {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  addProjectRequest,
  addProjectSuccess,
  addProjectError,
  deleteProjectRequest,
  deleteProjectSuccess,
  deleteProjectError,
  changeProjectTitleRequest,
  changeProjectTitleSuccess,
  changeProjectTitleError,
  getProjectInfoRequest,
  getProjectInfoSuccess,
  getProjectInfoError,
} = projectsActions;

const getProjects = () => async dispatch => {
  dispatch(fetchProjectsRequest());

  try {
    const { data } = await axios.get('/projects');

    dispatch(fetchProjectsSuccess(data));
  } catch ({ message }) {
    dispatch(fetchProjectsError(message));
  }
};

const addProject = project => async dispatch => {
  dispatch(addProjectRequest());

  try {
    const { data } = axios.post('/projects', project);

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

const changeProjectTitle =
  ({ id, title }) =>
  async dispatch => {
    const update = { title };

    dispatch(changeProjectTitleRequest());
    try {
      const { data } = await axios.patch(`/projects/${id}`, update);

      dispatch(changeProjectTitleSuccess(data));
    } catch ({ message }) {
      dispatch(changeProjectTitleError(message));
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
  changeProjectTitle,
  getProjectInfo,
};

export default projectsOperations;
