import axios from 'src/utils/axios';

export const GET_CONTACTS = '@chat/get-contacts';
export const GET_THREADS = '@chat/get-threads';
export const GET_THREAD = '@chat/get-thread';
export const MARK_THREAD_AS_SEEN = '@chat/mark-thread-as-seen';
export const ADD_MESSAGE = '@chat/add-message';
export const OPEN_SIDEBAR = '@chat/open-sidebar';
export const CLOSE_SIDEBAR = '@chat/close-sidebar';

export function getContacts() {
  const request = axios.get('/api/chat/contacts');

  return (dispatch) => {
    request.then((response) => dispatch({
      type: GET_CONTACTS,
      payload: response.data
    }));
  };
}

export function getThreads() {
  const request = axios.get('/api/chat/threads');

  return (dispatch) => {
    request.then((response) => dispatch({
      type: GET_THREADS,
      payload: response.data
    }));
  };
}

export function getThread(threadKey) {
  const request = axios.get('/api/chat/thread', {
    params: {
      threadKey
    }
  });

  return (dispatch) => {
    request.then((response) => {
      if (response.data.thread) {
        dispatch({
          type: GET_THREAD,
          payload: response.data
        });
      }
    });
  };
}

export function markThreadAsSeen(threadKey) {
  const request = axios.get('/api/chat/thread/mark-as-seen', {
    params: {
      threadKey
    }
  });

  return (dispatch) => {
    request.then(() => dispatch({
      type: MARK_THREAD_AS_SEEN,
      payload: {
        threadKey
      }
    }));
  };
}

export function addMessage({
  userId,
  threadKey,
  body,
  attachments
}) {
  const request = axios.post('/api/chat/messages/new', {
    userId,
    threadKey,
    body,
    attachments
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: ADD_MESSAGE,
      payload: {
        userId,
        ...response.data
      }
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
