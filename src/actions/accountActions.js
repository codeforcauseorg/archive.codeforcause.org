import axios from 'src/utils/axios';
import authService from 'src/services/authService';

export const LOGIN_REQUEST = '@account/login-request';
export const DISMISS_LOGIN = '@account/dismiss-login';
export const LOGIN_SUCCESS = '@account/login-success';
export const LOGIN_FAILURE = '@account/login-failure';
export const SILENT_LOGIN = '@account/silent-login';
export const LOGOUT = '@account/logout';
export const REGISTER = '@account/register';
export const UPDATE_PROFILE = '@account/update-profile';

export function login() {
  return async dispatch => {
    dispatch({ type: LOGIN_REQUEST });
  };
}

export function dismissLogin() {
  return async dispatch => {
    dispatch({ type: DISMISS_LOGIN });
  };
}

export function setUserData(user) {
  return dispatch =>
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user
      }
    });
}

export function logout() {
  return async dispatch => {
    authService.logout();
    dispatch({
      type: LOGOUT
    });
  };
}

export function register() {
  return true;
}

export function updateProfile(update) {
  const request = axios.post('/api/account/profile', { update });

  return dispatch => {
    request.then(response =>
      dispatch({
        type: UPDATE_PROFILE,
        payload: response.data
      })
    );
  };
}
