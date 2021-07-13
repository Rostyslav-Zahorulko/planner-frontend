import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { authActions } from '../auth';

const {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  logoutSuccess,
  logoutError,
  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;

const initialUserState = { email: null };

const userReducer = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const isLoggedInReducer = createReducer(false, {
  [registerSuccess]: () => true,
  [registerError]: () => false,
  [loginSuccess]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutError]: () => true,
  [getCurrentUserSuccess]: () => true,
  [getCurrentUserError]: () => false,
});

const tokenReducer = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const isRefreshedReducer = createReducer(false, {
  [getCurrentUserSuccess]: () => true,
  [getCurrentUserError]: () => true,
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [logoutSuccess]: () => false,
});

const authReducer = combineReducers({
  user: userReducer,
  isLoggedIn: isLoggedInReducer,
  token: tokenReducer,
  isRefreshed: isRefreshedReducer,
});

export default authReducer;
