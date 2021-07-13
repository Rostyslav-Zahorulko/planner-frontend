import axios from 'axios';
import { toast } from 'react-toastify';

import { authActions } from '../auth';

axios.defaults.baseURL = 'https://dreamteam-planner-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;

const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);

    dispatch(registerSuccess(data));
  } catch (e) {
    if (e.response) {
      dispatch(registerError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(registerError(e.message));
    toast.error(e.message);
  }
};

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);

    dispatch(loginSuccess(data));
  } catch (e) {
    if (e.response) {
      dispatch(loginError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(loginError(e.message));
    toast.error(e.message);
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();

    dispatch(logoutSuccess());
  } catch (e) {
    if (e.response) {
      dispatch(logoutError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(logoutError(e.message));
    toast.error(e.message);
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(data.user));
  } catch (e) {
    if (e.response) {
      dispatch(getCurrentUserError(e.response.data.message));
      toast.error(e.response.data.message);
      return;
    }

    dispatch(getCurrentUserError(e.message));
    toast.error(e.message);
  }
};

const authOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
};

export default authOperations;
