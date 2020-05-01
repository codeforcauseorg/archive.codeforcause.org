/* eslint-disable no-param-reassign */
import produce from 'immer';
import {
  GET_LABELS,
  GET_MAILS,
  GET_MAIL,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  OPEN_NEW_MESSAGE,
  CLOSE_NEW_MESSAGE
} from 'src/actions/mailActions';
import objFromArray from 'src/utils/objFromArray';

const initialState = {
  mails: {
    byId: {},
    allIds: []
  },
  labels: [],
  sidebarOpen: false,
  newMessageOpen: false
};

const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LABELS: {
      const { labels } = action.payload;

      return produce(state, (draft) => {
        draft.labels = labels;
      });
    }

    case GET_MAILS: {
      const { mails } = action.payload;

      return produce(state, (draft) => {
        draft.mails.byId = objFromArray(mails);
        draft.mails.allIds = Object.keys(draft.mails.byId);
      });
    }

    case GET_MAIL: {
      const { mail } = action.payload;

      return produce(state, (draft) => {
        draft.mails.byId[mail.id] = mail;

        if (!draft.mails.allIds.includes(mail.id)) {
          draft.mails.allIds.push(mail.id);
        }
      });
    }

    case OPEN_SIDEBAR: {
      return produce(state, (draft) => {
        draft.sidebarOpen = true;
      });
    }

    case CLOSE_SIDEBAR: {
      return produce(state, (draft) => {
        draft.sidebarOpen = false;
      });
    }

    case OPEN_NEW_MESSAGE: {
      return produce(state, (draft) => {
        draft.newMessageOpen = true;
      });
    }

    case CLOSE_NEW_MESSAGE: {
      return produce(state, (draft) => {
        draft.newMessageOpen = false;
      });
    }

    default: {
      return state;
    }
  }
};

export default mailReducer;
