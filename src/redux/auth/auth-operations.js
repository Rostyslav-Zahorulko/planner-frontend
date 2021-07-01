import axios from 'axios';
import { toast } from 'react-toastify';

import { authActions } from '../auth';

axios.defaults.baseURL = 'https://dreamteam-planner-api.herokuapp.com';
// ДЛЯ ЛОКАЛЬНОГО БЭКА
axios.defaults.baseURL = 'http://localhost:3000/';

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

const register = credentials => async (dispatch, getState) => {
  dispatch(registerRequest());

  try {
    const { data } = await axios.post('/users/signup', credentials);

    token.set(data.token);

    dispatch(registerSuccess(data));
  } catch ({ response }) {
    // console.log(response.data.message);
    dispatch(registerError(response.data.message));
    toast.error(response.data.message);
  }
};

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post('/users/login', credentials);

    token.set(data.token);

    dispatch(loginSuccess(data));
  } catch ({ response }) {
    dispatch(loginError(response.data.message));
    toast.error(response.data.message);
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());

  try {
    await axios.post('/users/logout');

    token.unset();

    dispatch(logoutSuccess());
  } catch ({ message }) {
    dispatch(logoutError(message));
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

    dispatch(getCurrentUserSuccess(data));
  } catch ({ message }) {
    dispatch(getCurrentUserError(message));
  }
};

const authOperations = {
  register,
  logIn,
  logOut,
  getCurrentUser,
};

export default authOperations;
