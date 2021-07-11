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

const isRefreshingReducer = createReducer(true, {
  [getCurrentUserSuccess]: () => false,
  [getCurrentUserError]: () => false,
});

const authReducer = combineReducers({
  user: userReducer,
  isLoggedIn: isLoggedInReducer,
  token: tokenReducer,
  isRefreshing: isRefreshingReducer,
});

export default authReducer;
