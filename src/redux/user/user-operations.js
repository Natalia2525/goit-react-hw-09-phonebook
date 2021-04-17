import axios from 'axios';
import * as actions from './user-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const setToken = token => (axios.defaults.headers['Authorization'] = token);

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const register = credentials => dispatch => {
  dispatch(actions.registerRequest());

  axios
    .post(`/users/signup`, credentials)
    .then(({ data }) => dispatch(actions.registerSuccess(data)))
    .then(({ data }) => setToken(data.token))
    .catch(error => dispatch(actions.registerError(error.message)));
};

export const login = credentials => dispatch => {
  dispatch(actions.loginRequest());

  axios
    .post(`/users/login`, credentials)
    .then(({ data }) => {
      dispatch(actions.loginSuccess(data));
      setToken(data.token);
    })
    .catch(error => dispatch(actions.loginError(error.message)));
};

export const logOut = () => dispatch => {
  dispatch(actions.logoutRequest());

  axios
    .post(`/users/logout`)
    .then(() => {
      dispatch(actions.logoutSuccess());
      setToken(null);
    })
    .catch(error => dispatch(actions.logoutError(error.message)));
};

export const getCurrentUser = () => (dispatch, getState) => {
  const {
    user: { token },
  } = getState();

  if (!token) {
    return;
  }
  setToken(token);

  dispatch(actions.getCurrentUserRequest());

  axios
    .get(`/users/current`)
    .then(({ data }) => dispatch(actions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(actions.getCurrentUserError(error.message)));
};
