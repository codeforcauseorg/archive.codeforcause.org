import axios from 'src/utils/axios';

export const GET_LABELS = '@mail/get-labels';
export const GET_MAILS = '@mail/get-mails';
export const GET_MAIL = '@mail/get-mail';
export const OPEN_SIDEBAR = '@mail/open-sidebar';
export const CLOSE_SIDEBAR = '@mail/close-sidebar';
export const OPEN_NEW_MESSAGE = '@mail/open-new-message';
export const CLOSE_NEW_MESSAGE = '@mail/close-new-message';

export function getLabels() {
  const request = axios.get('/api/mail/labels');

  return (dispatch) => {
    request.then((response) => dispatch({
      type: GET_LABELS,
      payload: response.data
    }));
  };
}

export function getMails(params) {
  const request = axios.get('/api/mail/mails', {
    params
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: GET_MAILS,
      payload: response.data
    }));
  };
}

export function getMail(mailId) {
  const request = axios.get('/api/mail/mail', {
    params: {
      mailId
    }
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: GET_MAIL,
      payload: response.data
    }));
  };
}

export function openSidebar() {
  return {
    type: OPEN_SIDEBAR
  };
}

export function closeSidebar() {
  return {
    type: CLOSE_SIDEBAR
  };
}

export function openNewMessage() {
  return {
    type: OPEN_NEW_MESSAGE
  };
}

export function closeNewMessage() {
  return {
    type: CLOSE_NEW_MESSAGE
  };
}
