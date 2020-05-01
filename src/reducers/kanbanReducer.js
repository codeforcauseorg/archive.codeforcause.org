/* eslint-disable no-param-reassign */
import produce from 'immer';
import _ from 'lodash';
import {
  GET_BOARD,
  CREATE_LIST,
  UPDATE_LIST,
  CLEAR_LIST,
  DELETE_LIST,
  CREATE_CARD,
  UPDATE_CARD,
  MOVE_CARD,
  DELETE_CARD,
  ADD_COMMENT,
  ADD_CHECKLIST,
  UPDATE_CHECKLIST,
  DELETE_CHECKLIST,
  ADD_CHECK_ITEM,
  UPDATE_CHECK_ITEM,
  DELETE_CHECK_ITEM
} from 'src/actions/kanbanActions';
import objFromArray from 'src/utils/objFromArray';

const initialState = {
  isLoaded: false,
  lists: {
    byId: {},
    allIds: []
  },
  cards: {
    byId: {},
    allIds: []
  },
  members: {
    byId: {},
    allIds: []
  }
};

const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD: {
      const { board } = action.payload;

      return produce(state, (draft) => {
        draft.lists.byId = objFromArray(board.lists);
        draft.lists.allIds = Object.keys(draft.lists.byId);
        draft.cards.byId = objFromArray(board.cards);
        draft.cards.allIds = Object.keys(draft.cards.byId);
        draft.members.byId = objFromArray(board.members);
        draft.members.allIds = Object.keys(draft.members.byId);
        draft.isLoaded = true;
      });
    }

    case CREATE_LIST: {
      const { list } = action.payload;

      return produce(state, (draft) => {
        draft.lists.byId[list.id] = list;
        draft.lists.allIds.push(list.id);
      });
    }

    case UPDATE_LIST: {
      const { list } = action.payload;

      return produce(state, (draft) => {
        _.merge(draft.lists.byId[list.id], list);
      });
    }

    case CLEAR_LIST: {
      const { listId } = action.payload;

      return produce(state, (draft) => {
        const { cardIds } = draft.lists.byId[listId];

        draft.lists.byId[listId].cardIds = [];
        draft.cards.byId = _.omit(draft.cards.byId, cardIds);
        _.pull(draft.cards.allIds, ...cardIds);
      });
    }

    case DELETE_LIST: {
      const { listId } = action.payload;

      return produce(state, (draft) => {
        draft.lists.byId = _.omit(draft.lists.byId, listId);
        _.pull(draft.lists.allIds, listId);
      });
    }

    case CREATE_CARD: {
      const { card } = action.payload;

      return produce(state, (draft) => {
        draft.cards.byId[card.id] = card;
        draft.cards.allIds.push(card.id);
        draft.lists.byId[card.listId].cardIds.push(card.id);
      });
    }

    case UPDATE_CARD: {
      const { card } = action.payload;

      return produce(state, (draft) => {
        _.merge(draft.cards.byId[card.id], card);
      });
    }

    case MOVE_CARD: {
      const { cardId, position, listId } = action.payload;

      return produce(state, (draft) => {
        const { listId: sourceListId } = draft.cards.byId[cardId];

        // Remove card from source list
        _.pull(draft.lists.byId[sourceListId].cardIds, cardId);

        // If listId arg exists, it means that
        // we have to add the card to the new list
        if (listId) {
          draft.cards.byId[cardId].listId = listId;
          draft.lists.byId[listId].cardIds.splice(position, 0, cardId);
        } else {
          draft.lists.byId[sourceListId].cardIds.splice(position, 0, cardId);
        }
      });
    }

    case DELETE_CARD: {
      const { cardId } = action.payload;

      return produce(state, (draft) => {
        const { listId } = draft.cards.byId[cardId];

        draft.cards.byId = _.omit(draft.cards.byId, cardId);
        _.pull(draft.cards.allIds, cardId);
        _.pull(draft.lists.byId[listId].cardIds, cardId);
      });
    }

    case ADD_COMMENT: {
      const { comment } = action.payload;

      return produce(state, (draft) => {
        draft.cards.byId[comment.cardId].comments.push(comment);
      });
    }

    case ADD_CHECKLIST: {
      const { cardId, checklist } = action.payload;

      return produce(state, (draft) => {
        draft.cards.byId[cardId].checklists.push(checklist);
      });
    }

    case UPDATE_CHECKLIST: {
      const { cardId, checklist } = action.payload;

      return produce(state, (draft) => {
        const card = draft.cards.byId[cardId];

        card.checklists = _.map(card.checklists, (_checklist) => {
          if (_checklist.id === checklist.id) {
            return checklist;
          }

          return _checklist;
        });
      });
    }

    case DELETE_CHECKLIST: {
      const { cardId, checklistId } = action.payload;

      return produce(state, (draft) => {
        const card = draft.cards.byId[cardId];

        card.checklists = _.reject(card.checklists, { id: checklistId });
      });
    }

    case ADD_CHECK_ITEM: {
      const { cardId, checklistId, checkItem } = action.payload;

      return produce(state, (draft) => {
        const card = draft.cards.byId[cardId];

        _.assign(card, {
          checklists: _.map(card.checklists, (checklist) => {
            if (checklist.id === checklistId) {
              _.assign(checklist, {
                checkItems: [...checklist.checkItems, checkItem]
              });
            }

            return checklist;
          })
        });
      });
    }

    case UPDATE_CHECK_ITEM: {
      const {
        cardId,
        checklistId,
        checkItemId,
        checkItem
      } = action.payload;

      return produce(state, (draft) => {
        const card = draft.cards.byId[cardId];

        card.checklists = _.map(card.checklists, (checklist) => {
          if (checklist.id === checklistId) {
            _.assign(checklist, {
              checkItems: _.map(checklist.checkItems, (_checkItem) => {
                if (_checkItem.id === checkItemId) {
                  return checkItem;
                }

                return _checkItem;
              })
            });
          }

          return checklist;
        });
      });
    }

    case DELETE_CHECK_ITEM: {
      const { cardId, checklistId, checkItemId } = action.payload;

      return produce(state, (draft) => {
        const card = draft.cards.byId[cardId];

        card.checklists = _.map(card.checklists, (checklist) => {
          if (checklist.id === checklistId) {
            _.assign(checklist, {
              checkItems: _.reject(checklist.checkItems, { id: checkItemId })
            });
          }

          return checklist;
        });
      });
    }

    default: {
      return state;
    }
  }
};

export default kanbanReducer;
