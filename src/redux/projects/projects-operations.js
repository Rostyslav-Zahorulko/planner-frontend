import axios from 'axios';
import { toast } from 'react-toastify';

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
  addUserInProjectRequest,
  addUserInProjectSuccess,
  addUserInProjectError,
  getProjectInfoRequest,
  getProjectInfoSuccess,
  getProjectInfoError,
} = projectsActions;

const getProjects = () => async dispatch => {
  dispatch(getProjectsRequest());

  try {
    const { data } = await axios.get('/projects');

    dispatch(getProjectsSuccess(data.data.projects));
  } catch (e) {
    if (e.response) {
      dispatch(getProjectsError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(getProjectsError(e.message));
    toast.error(e.message);
  }
};

const addProject = project => async dispatch => {
  dispatch(addProjectRequest());

  try {
    const { data } = await axios.post('/projects', project);

    dispatch(addProjectSuccess(data.project));
  } catch (e) {
    if (e.response) {
      dispatch(addProjectError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(addProjectError(e.message));
    toast.error(e.message);
  }
};

const deleteProject = id => async dispatch => {
  dispatch(deleteProjectRequest());

  try {
    await axios.delete(`/projects/${id}`);

    dispatch(deleteProjectSuccess(id));
  } catch (e) {
    if (e.response) {
      dispatch(deleteProjectError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(deleteProjectError(e.message));
    toast.error(e.message);
  }
};

const editProjectTitle = (id, title) => async dispatch => {
  const update = { title };

  dispatch(editProjectTitleRequest());
  try {
    const { data } = await axios.patch(`/projects/${id}`, update);
    // console.log(data);
    
    dispatch(editProjectTitleSuccess(data.project.title));
 
    } catch (e) {
      if (e.response) {
        dispatch(editProjectTitleError(e.response.data.message));
        toast.error(e.response.data.message);
        return;
      }

      dispatch(editProjectTitleError(e.message));
      toast.error(e.message);
    }
  };

const addUser =
  ({ projectId, user }) =>
  async dispatch => {
    dispatch(addUserInProjectRequest());

    try {
      const { data } = await axios.post(`/projects/${projectId}`, user); 

      console.log(data);

      // dispatch(addUserInProjectSuccess());
    } catch (e) {
      if (e.response) {
        dispatch(addUserInProjectError(e.response.data.message));
        toast.error(e.response.data.message);
        return;
      }

      dispatch(addUserInProjectError(e.message));
      toast.error(e.message);
    }
  };

const getProjectInfo = id => async dispatch => {
  dispatch(getProjectInfoRequest());

  try {
    const { data } = await axios.get(`/projects/${id}`);

    dispatch(getProjectInfoSuccess(data.project));
  } catch (e) {
    if (e.response) {
      dispatch(getProjectInfoError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(getProjectInfoError(e.message));
    toast.error(e.message);
  }
};

const projectsOperations = {
  getProjects,
  addProject,
  deleteProject,
  editProjectTitle,
  addUser,
  getProjectInfo,
};

export default projectsOperations;
