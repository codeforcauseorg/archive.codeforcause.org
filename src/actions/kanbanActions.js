import axios from 'src/utils/axios';

export const GET_BOARD = '@kanban/get-board';
export const CREATE_LIST = '@kanban/create-list';
export const UPDATE_LIST = '@kanban/update-list';
export const CLEAR_LIST = '@kanban/clear-list';
export const DELETE_LIST = '@kanban/delete-list';
export const CREATE_CARD = '@kanban/create-card';
export const UPDATE_CARD = '@kanban/update-card';
export const MOVE_CARD = '@kanban/move-card';
export const DELETE_CARD = '@kanban/delete-card';
export const ADD_COMMENT = '@kanban/add-comment';
export const ADD_CHECKLIST = '@kanban/add-checklist';
export const UPDATE_CHECKLIST = '@kanban/update-checklist';
export const DELETE_CHECKLIST = '@kanban/delete-checklist';
export const ADD_CHECK_ITEM = '@kanban/add-check-item';
export const UPDATE_CHECK_ITEM = '@kanban/update-check-item';
export const DELETE_CHECK_ITEM = '@kanban/delete-check-item';

export function getBoard() {
  const request = axios.get('/api/kanban/board');

  return (dispatch) => {
    request.then((response) => dispatch({
      type: GET_BOARD,
      payload: response.data
    }));
  };
}

export function createList(name) {
  const request = axios.post('/api/kanban/board/lists/new', {
    name
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: CREATE_LIST,
      payload: response.data
    }));
  };
}

export function updateList(listId, update) {
  const request = axios.post('/api/kanban/board/list/update', {
    listId,
    update
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: UPDATE_LIST,
      payload: response.data
    }));
  };
}

export function clearList(listId) {
  const request = axios.post('/api/kanban/board/lists/clear', {
    listId
  });

  return (dispatch) => {
    request.then(() => dispatch({
      type: CLEAR_LIST,
      payload: {
        listId
      }
    }));
  };
}

export function deleteList(listId) {
  const request = axios.post('/api/kanban/board/lists/remove', {
    listId
  });

  return (dispatch) => {
    request.then(() => dispatch({
      type: DELETE_LIST,
      payload: {
        listId
      }
    }));
  };
}

export function createCard(listId, name) {
  const request = axios.post('/api/kanban/board/cards/new', {
    listId,
    name
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: CREATE_CARD,
      payload: response.data
    }));
  };
}

export function updateCard(cardId, update) {
  const request = axios.post('/api/kanban/board/cards/update', {
    cardId,
    update
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: UPDATE_CARD,
      payload: response.data
    }));
  };
}

export function moveCard(cardId, position, listId) {
  const request = axios.post('/api/kanban/board/cards/move', {
    cardId,
    position,
    listId
  });

  return (dispatch) => {
    request.then(() => dispatch({
      type: MOVE_CARD,
      payload: {
        cardId,
        position,
        listId
      }
    }));
  };
}

export function deleteCard(cardId) {
  const request = axios.post('/api/kanban/board/cards/remove', {
    cardId
  });

  return (dispatch) => {
    request.then(() => dispatch({
      type: DELETE_CARD,
      payload: {
        cardId
      }
    }));
  };
}

export function addComment(userId, cardId, message) {
  const request = axios.post('/api/kanban/board/cards/comments', {
    userId,
    cardId,
    message
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: ADD_COMMENT,
      payload: response.data
    }));
  };
}

export function addChecklist(cardId, name) {
  const request = axios.post('/api/kanban/board/checklists/new', {
    cardId,
    name
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: ADD_CHECKLIST,
      payload: {
        cardId,
        ...response.data
      }
    }));
  };
}

export function updateChecklist(cardId, checklistId, update) {
  const request = axios.post('/api/kanban/board/checklists/update', {
    cardId,
    checklistId,
    update
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: UPDATE_CHECKLIST,
      payload: {
        cardId,
        checklistId,
        ...response.data
      }
    }));
  };
}

export function deleteChecklist(cardId, checklistId) {
  const request = axios.post('/api/kanban/board/checklists/remove', {
    cardId,
    checklistId
  });

  return (dispatch) => {
    request.then(() => dispatch({
      type: DELETE_CHECKLIST,
      payload: {
        cardId,
        checklistId
      }
    }));
  };
}

export function addCheckItem(cardId, checklistId, name) {
  const request = axios.post('/api/kanban/board/checkitems/new', {
    cardId,
    checklistId,
    name
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: ADD_CHECK_ITEM,
      payload: {
        cardId,
        checklistId,
        ...response.data
      }
    }));
  };
}

export function updateCheckItem(cardId, checklistId, checkItemId, update) {
  const request = axios.post('/api/kanban/board/checkitems/update', {
    cardId,
    checklistId,
    checkItemId,
    update
  });

  return (dispatch) => {
    request.then((response) => dispatch({
      type: UPDATE_CHECK_ITEM,
      payload: {
        cardId,
        checklistId,
        checkItemId,
        ...response.data
      }
    }));
  };
}

export function deleteCheckItem(cardId, checklistId, checkItemId) {
  const request = axios.post('/api/kanban/board/checkitems/remove', {
    cardId,
    checklistId,
    checkItemId
  });

  return (dispatch) => {
    request.then(() => dispatch({
      type: DELETE_CHECK_ITEM,
      payload: {
        cardId,
        checklistId,
        checkItemId
      }
    }));
  };
}
