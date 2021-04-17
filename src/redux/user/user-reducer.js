import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './user-actions';

const initialUserState = { name: null, email: null };
const user = createReducer(initialUserState, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => initialUserState,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.logoutError]: () => (_, { payload }) => payload,
  [actions.getCurrentUserError]: (_, { payload }) => payload,
});

const isAuthenticated = createReducer(false, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.getCurrentUserSuccess]: () => true,
  [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  [actions.logoutError]: () => false,
  [actions.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
