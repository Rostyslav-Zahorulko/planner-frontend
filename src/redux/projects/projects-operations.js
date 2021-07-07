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
  addUserInProjectRequest,
  addUserInProjectSuccess,
  addUserInProjectError,
} = projectsActions;

const getProjects = () => async dispatch => {
  dispatch(getProjectsRequest());

  try {
    const { data } = await axios.get('/projects');
    // console.log(data.data.projects);

    dispatch(getProjectsSuccess(data.data.projects));
  } catch ({ message }) {
    dispatch(getProjectsError(message));
  }
};

const addProject = project => async dispatch => {
  dispatch(addProjectRequest());

  try {
    const { data } = await axios.post('/projects', project);

    // console.dir(data.project);

    dispatch(addProjectSuccess(data.project));
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

const editProjectTitle = (id, title) => async dispatch => {
  const update = { title };

  dispatch(editProjectTitleRequest());
  try {
    const { data } = await axios.patch(`/projects/${id}`, update);
    // console.log(data);

    dispatch(editProjectTitleSuccess(data.project.title));
  } catch ({ message }) {
    dispatch(editProjectTitleError(message));
  }
};

const getProjectInfo = id => async dispatch => {
  dispatch(getProjectInfoRequest());

  try {
    const { data } = await axios.get(`/projects/${id}`);

    dispatch(getProjectInfoSuccess(data.project));
  } catch ({ response }) {
    dispatch(getProjectInfoError(response.data.message));
  }
};

const addUser =
  ({ projectId, user }) =>
  async dispatch => {
    dispatch(addUserInProjectRequest());

    try {
      const { data } = axios.post(`/projects/${projectId}`, user);

      // console.log(data);

      // dispatch(addUserInProjectSuccess(data.user));
    } catch ({ message }) {
      dispatch(addUserInProjectError(message));
    }
  };

const projectsOperations = {
  getProjects,
  addProject,
  deleteProject,
  editProjectTitle,
  getProjectInfo,
  addUser,
};

export default projectsOperations;
