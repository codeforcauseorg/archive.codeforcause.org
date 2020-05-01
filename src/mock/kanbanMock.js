import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import mock from 'src/utils/mock';
import _ from 'lodash';

const board = {
  lists: [
    {
      id: '5e849c39325dc5ef58e5a5db',
      name: 'Incoming',
      cardIds: [
        '5e849c8708bd72683b454747',
        '5e849c90fabe1f1f4b3557f6',
        '5e849c977ef6265938bfd90b',
        '5e849c9e34ee93bc7255c599'
      ]
    },
    {
      id: '5e849c2b38d238c33e516755',
      name: 'In progress',
      cardIds: [
        '5e849ca7d063dc3830d4b49c',
        '5e849cb5d0c6e8894451fdfa'
      ]
    }
  ],
  cards: [
    {
      id: '5e849c8708bd72683b454747',
      attachments: [],
      checklists: [
        {
          id: '5e84a8175c48d3f5b1d01972',
          name: 'Update home page',
          checkItems: [
            {
              id: '5e85af37da584c5e4bd8a06c',
              name: 'An item',
              state: 'complete'
            }
          ]
        }
      ],
      comments: [
        {
          id: '15e849c5a35d4dff4f88ebff6',
          cardId: '5e849c8708bd72683b454747',
          createdAt: moment()
            .subtract(5, 'days')
            .toDate()
            .getTime(),
          memberId: '5e887ac47eed253091be10cb',
          message: 'This is a comment'
        }
      ],
      cover: '/static/images/projects/project_3.png',
      description: 'Duis condimentum lacus finibus felis pellentesque, ac auctor nibh fermentum. Duis sed dui ante. Phasellus id eros tincidunt, dictum lorem vitae, pellentesque sem. Aenean eu enim sit amet mauris rhoncus mollis. Sed enim turpis, porta a felis et, luctus faucibus nisi. Phasellus et metus fermentum, ultrices arcu aliquam, facilisis justo. Cras nunc nunc, elementum sed euismod ut, maximus eget nibh. Phasellus condimentum lorem neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce sagittis pharetra eleifend. Suspendisse potenti.',
      due: moment()
        .add(7, 'days')
        .toDate()
        .getTime(),
      isSubscribed: false,
      listId: '5e849c39325dc5ef58e5a5db',
      memberIds: ['5e86809283e28b96d2d38537'],
      name: 'Call with sales of HubSpot'
    },
    {
      id: '5e849c90fabe1f1f4b3557f6',
      attachments: [],
      checklists: [],
      comments: [],
      cover: null,
      description: 'We are looking for vue experience and of course node js strong knowledge',
      due: moment()
        .add(6, 'days')
        .toDate()
        .getTime(),
      isSubscribed: true,
      listId: '5e849c39325dc5ef58e5a5db',
      memberIds: ['5e887b209c28ac3dd97f6db5', '5e887a62195cc5aef7e8ca5d'],
      name: 'Interview for the Asis. Sales Manager'
    },
    {
      id: '5e849c977ef6265938bfd90b',
      attachments: [],
      checklists: [],
      comments: [],
      cover: null,
      description: 'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
      due: null,
      isSubscribed: false,
      listId: '5e849c39325dc5ef58e5a5db',
      memberIds: [],
      name: 'Change the height of the top bar because it looks too chunky',
    },
    {
      id: '5e849c9e34ee93bc7255c599',
      attachments: [],
      checklists: [],
      comments: [],
      cover: null,
      description: 'We nede to make it aggresive with pricing because it’s in their interest to acquire us',
      due: null,
      isSubscribed: false,
      listId: '5e849c39325dc5ef58e5a5db',
      memberIds: ['5e887ac47eed253091be10cb', '5e86809283e28b96d2d38537'],
      name: 'Integrate Stripe API'
    },
    {
      id: '5e849ca7d063dc3830d4b49c',
      attachments: [],
      checklists: [],
      comments: [],
      cover: null,
      description: 'We need to make it aggresive with pricing because it’s in their interest to acquire us',
      due: null,
      isSubscribed: true,
      listId: '5e849c2b38d238c33e516755',
      memberIds: ['5e887a62195cc5aef7e8ca5d'],
      name: 'Update the customer API for payments'
    },
    {
      id: '5e849cb5d0c6e8894451fdfa',
      attachments: [],
      checklists: [],
      comments: [],
      cover: null,
      description: 'We need to make it aggresive with pricing because it’s in their interest to acquire us',
      due: null,
      isSubscribed: true,
      listId: '5e849c2b38d238c33e516755',
      memberIds: [],
      name: 'Redesign the landing page'
    }
  ],
  members: [
    {
      id: '5e887a62195cc5aef7e8ca5d',
      name: 'Ekaterina Tankova',
      avatar: '/static/images/avatars/avatar_2.png'
    },
    {
      id: '5e887ac47eed253091be10cb',
      name: 'Cao Yu',
      avatar: '/static/images/avatars/avatar_3.png'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      name: 'Alex Richardson',
      avatar: '/static/images/avatars/avatar_4.png'
    },
    {
      id: '5e887b7602bdbc4dbb234b27',
      name: 'Anje Keizer',
      avatar: '/static/images/avatars/avatar_5.png'
    },
    {
      id: '5e86809283e28b96d2d38537',
      name: 'Katarina Smith',
      avatar: '/static/images/avatars/avatar_6.png'
    }
  ]
};

mock.onGet('/api/kanban/board').reply(200, {
  board
});

mock.onPost('/api/kanban/board/lists/new').reply((request) => {
  const { name } = JSON.parse(request.data);
  const list = {
    id: uuidv4(),
    name,
    cardIds: []
  };

  _.assign(board, {
    lists: [...board.lists, list]
  });

  return [200, { list }];
});

mock.onPost('/api/kanban/board/list/update').reply((request) => {
  const { listId, update } = JSON.parse(request.data);
  const list = board.lists.find((_list) => _list.id === listId);

  _.assign(list, update);

  return [200, { list }];
});

mock.onPost('/api/kanban/board/lists/clear').reply((request) => {
  const { listId } = JSON.parse(request.data);

  _.assign(board, {
    lists: _.map(board.lists, (list) => {
      if (list.id === listId) {
        _.assign(list, {
          cardIds: []
        });
      }

      return list;
    }),
    cards: board.cards.filter((card) => card.listId !== listId)
  });

  return [200, { listId }];
});

mock.onPost('/api/kanban/board/lists/remove').reply((request) => {
  const { listId } = JSON.parse(request.data);

  _.assign(board, {
    lists: _.reject(board.lists, { id: listId }),
    cards: board.cards.filter((card) => card.listId !== listId)
  });

  return [200, { listId }];
});

mock.onPost('/api/kanban/board/cards/new').reply((request) => {
  const { listId, name } = JSON.parse(request.data);
  const card = {
    id: uuidv4(),
    attachments: [],
    checklists: [],
    comments: [],
    cover: null,
    description: null,
    due: null,
    isSubscribed: false,
    listId,
    memberIds: [],
    name
  };

  _.assign(board, {
    cards: [...board.cards, card],
    lists: _.map(board.lists, (list) => {
      if (list.id === listId) {
        _.assign(list, {
          cardIds: [...list.cardIds, card.id]
        });
      }

      return list;
    })
  });

  return [200, { card }];
});

mock.onPost('/api/kanban/board/cards/update').reply((request) => {
  const { cardId, update } = JSON.parse(request.data);
  const card = board.cards.find((_card) => _card.id === cardId);

  _.assign(card, update);

  return [200, { card }];
});

mock.onPost('/api/kanban/board/cards/move').reply((request) => {
  const { cardId, position, listId } = JSON.parse(request.data);
  const card = board.cards.find((_card) => _card.id === cardId);
  const sourceList = board.lists.find((list) => list.id === card.listId);

  _.pull(sourceList.cardIds, cardId);

  if (listId) {
    const destinationList = board.lists.find((list) => list.id === card.listId);

    sourceList.cardIds.splice(destinationList, 0, card.id);
    card.listId = destinationList.id;
  } else {
    sourceList.cardIds.splice(position, 0, card.id);
  }

  return [200, true];
});

mock.onPost('/api/kanban/board/cards/remove').reply((request) => {
  const { cardId } = JSON.parse(request.data);

  _.assign(board, {
    cards: _.reject(board.cards, { id: cardId }),
    lists: _.map(board.lists, (list) => {
      _.assign(list, {
        cardIds: list.cardIds.filter((_cardId) => _cardId !== cardId)
      });

      return list;
    })
  });

  return [200, { cardId }];
});

mock.onPost('/api/kanban/board/cards/comments').reply((request) => {
  const { userId, cardId, message } = JSON.parse(request.data);
  const comment = {
    id: uuidv4(),
    cardId,
    createdAt: moment()
      .toDate()
      .getTime(),
    memberId: userId,
    message
  };

  _.assign(board, {
    cards: _.map(board.cards, (card) => {
      _.assign(card, {
        comments: [...card.comments, comment]
      });

      return card;
    })
  });

  return [200, { comment }];
});

mock.onPost('/api/kanban/board/checklists/new').reply((request) => {
  const { cardId, name } = JSON.parse(request.data);
  const checklist = {
    id: uuidv4(),
    name,
    checkItems: []
  };

  _.assign(board, {
    cards: _.map(board.cards, (card) => {
      if (card.id === cardId) {
        _.assign(card, {
          checklists: [...card.checklists, checklist]
        });
      }

      return card;
    })
  });

  return [200, { checklist }];
});

mock.onPost('/api/kanban/board/checklists/update').reply((request) => {
  const { cardId, checklistId, update } = JSON.parse(request.data);
  let checklist = null;

  _.assign(board, {
    cards: _.map(board.cards, (card) => {
      if (card.id === cardId) {
        _.map(card.checklists, (_checklist) => {
          if (_checklist.id === checklistId) {
            _.assign(_checklist, { ...update });
            checklist = _checklist;
          }

          return _checklist;
        });
      }

      return card;
    })
  });

  return [200, { checklist }];
});

mock.onPost('/api/kanban/board/checklists/remove').reply((request) => {
  const { cardId, checklistId } = JSON.parse(request.data);

  _.assign(board, {
    cards: _.map(board.cards, (card) => {
      if (card.id === cardId) {
        _.assign(card, {
          checklists: _.reject(card.checklists, { id: checklistId }),
        });
      }

      return card;
    })
  });

  return [200, true];
});

mock.onPost('/api/kanban/board/checkitems/new').reply((request) => {
  const { cardId, checklistId, name } = JSON.parse(request.data);
  const checkItem = {
    id: uuidv4(),
    checklistId,
    name,
    status: 'incomplete'
  };

  _.assign(board, {
    cards: _.map(board.cards, (card) => {
      if (card.id === cardId) {
        _.assign(card, {
          checklists: card.checklists.map((checklist) => {
            if (checklist.id === checklistId) {
              _.assign(checklist, {
                checkItems: [...checklist.checkItems, checkItem]
              });
            }

            return checklist;
          })
        });
      }

      return card;
    })
  });

  return [200, { checkItem }];
});

mock.onPost('/api/kanban/board/checkitems/update').reply((request) => {
  const {
    cardId,
    checklistId,
    checkItemId,
    update
  } = JSON.parse(request.data);
  let checkItem = null;

  _.assign(board, {
    cards: _.map(board.cards, (card) => {
      if (card.id === cardId) {
        _.assign(card, {
          checklists: _.map(card.checklists, (checklist) => {
            if (checklist.id === checklistId) {
              _.assign(checklist, {
                checkItems: _.map(checklist.checkItems, (_checkItem) => {
                  if (_checkItem.id === checkItemId) {
                    _.assign(_checkItem, { ...update });
                    checkItem = _checkItem;
                  }

                  return _checkItem;
                })
              });
            }

            return checklist;
          })
        });
      }

      return card;
    })
  });

  return [200, { checkItem }];
});

mock.onPost('/api/kanban/board/checkitems/remove').reply((request) => {
  const { cardId, checklistId, checkItemId } = JSON.parse(request.data);

  _.assign(board, {
    cards: _.map(board.cards, (card) => {
      if (card.id === cardId) {
        _.assign(card, {
          checklists: _.map(card.checklists, (checklist) => {
            if (checklist.id === checklistId) {
              _.assign(checklist, {
                checkItems: _.reject(checklist.checkItems, { id: checkItemId })
              });
            }

            return checklist;
          })
        });
      }

      return card;
    })
  });

  return [200, true];
});
