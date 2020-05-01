import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import mock from 'src/utils/mock';
import _ from 'lodash';

const db = {
  contacts: [
    {
      id: '5e8891ab188cd2855e6029b7',
      avatar: '/static/images/avatars/avatar_1.png',
      isActive: true,
      lastActivity: moment()
        .toDate()
        .getTime(),
      name: 'Cooper Murray',
      username: 'cooper.murray'
    },
    {
      id: '5e887a62195cc5aef7e8ca5d',
      avatar: '/static/images/avatars/avatar_2.png',
      isActive: false,
      lastActivity: moment()
        .subtract(2, 'hours')
        .toDate()
        .getTime(),
      name: 'Ekaterina Tankova',
      username: 'ekaterina.tankova'
    },
    {
      id: '5e887ac47eed253091be10cb',
      avatar: '/static/images/avatars/avatar_3.png',
      isActive: false,
      lastActivity: moment()
        .subtract(15, 'minutes')
        .toDate()
        .getTime(),
      name: 'Cao Yu',
      username: 'cao.yu'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      avatar: '/static/images/avatars/avatar_4.png',
      isActive: true,
      lastActivity: moment()
        .toDate()
        .getTime(),
      name: 'Alex Richardson',
      username: 'alex.richardson'
    },
    {
      id: '5e887b7602bdbc4dbb234b27',
      avatar: '/static/images/avatars/avatar_5.png',
      isActive: true,
      lastActivity: moment()
        .toDate()
        .getTime(),
      name: 'Anje Keizer',
      username: 'anje.keizer'
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      avatar: '/static/images/avatars/avatar_7.png',
      isActive: false,
      lastActivity: moment()
        .subtract(2, 'days')
        .toDate()
        .getTime(),
      name: 'Adam Denisov',
      username: 'adam.denisov'
    },
    {
      id: '5e887a1fbefd7938eea9c981',
      avatar: '/static/images/avatars/avatar_8.png',
      isActive: false,
      lastActivity: moment()
        .subtract(6, 'hours')
        .toDate()
        .getTime(),
      name: 'Miller Edwards',
      username: 'miller.edwards'
    },
    {
      id: '5e887d0b3d090c1b8f162003',
      avatar: '/static/images/avatars/avatar_9.png',
      isActive: true,
      lastActivity: moment()
        .toDate()
        .getTime(),
      name: 'Emilee Simchenko',
      username: 'emilee.simchenko',
    },
    {
      id: '5e88792be2d4cfb4bf0971d9',
      avatar: '/static/images/avatars/avatar_10.png',
      isActive: true,
      lastActivity: moment()
        .toDate()
        .getTime(),
      name: 'Elliott Stone',
      username: 'elliott.stone'
    },
    {
      id: '5e8877da9a65442b11551975',
      avatar: '/static/images/avatars/avatar_11.png',
      isActive: true,
      lastActivity: moment()
        .toDate()
        .getTime(),
      name: 'Shen Zhi',
      username: 'shen.zhi'
    },
    {
      id: '5e8680e60cba5019c5ca6fda',
      avatar: '/static/images/avatars/avatar_12.png',
      isActive: true,
      lastActivity: moment()
        .toDate()
        .getTime(),
      name: 'Merrile Burgett',
      username: 'merrile.burgett'
    }
  ],
  threads: [
    {
      id: '5e867eb9de721aecaccf4f7b',
      key: 'adam.denisov',
      type: 'ONE_TO_ONE',
      messages: [
        {
          id: '5e867f0a5bc0ff2bfa07bfa6',
          body: 'Hey, nice projects! I really liked the one in react. What\'s your quote on kinda similar project?',
          contentType: 'text',
          createdAt: moment()
            .subtract(10, 'hours')
            .toDate()
            .getTime(),
          senderId: '5e86805e2bafd54f66cc95c3'
        },
        {
          id: '5e867f167d5f78109ae9f2a4',
          body: 'I would need to know more details, but my hourly rate stats at $35/hour. Thanks!',
          contentType: 'text',
          createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime(),
          senderId: '5e86809283e28b96d2d38537'
        },
        {
          id: '5e867f1c9ca72084693528f4',
          body: 'Well it\'s a really easy one, I\'m sure we can make it half of the price.',
          contentType: 'text',
          createdAt: moment()
            .subtract(5, 'minutes')
            .toDate()
            .getTime(),
          senderId: '5e86809283e28b96d2d38537'
        },
        {
          id: '5e867f22fd2e27a09849b4db',
          body: 'Then why don\'t you make it if it\'s that easy? Sorry I\'m not interetes, have fantastic day Adam!',
          contentType: 'text',
          createdAt: moment()
            .subtract(3, 'minutes')
            .toDate()
            .getTime(),
          senderId: '5e86805e2bafd54f66cc95c3'
        },
        {
          id: '5e867f28a34d45ac6eb5c41f',
          body: 'Last offer, $25 per hour',
          contentType: 'text',
          createdAt: moment()
            .subtract(1, 'minute')
            .toDate()
            .getTime(),
          senderId: '5e86805e2bafd54f66cc95c3'
        },
        {
          id: '5e867f2dba984a3f78b33526',
          body: '/static/images/projects/project_4.png',
          contentType: 'image',
          createdAt: moment()
            .subtract(1, 'minute')
            .toDate()
            .getTime(),
          senderId: '5e86805e2bafd54f66cc95c3'
        },
      ],
      participantIds: [
        '5e86805e2bafd54f66cc95c3',
        '5e86809283e28b96d2d38537'
      ],
      unreadCount: 2
    },
    {
      id: '5e867fa7082c3c5921403a26',
      key: 'merrile.burgett',
      type: 'ONE_TO_ONE',
      messages: [
        {
          id: '5e867fc180837d901bd9bca1',
          body: 'Hey, would you like to collaborate?',
          contentType: 'text',
          createdAt: moment()
            .subtract(6, 'minutes')
            .toDate()
            .getTime(),
          senderId: '5e8680e60cba5019c5ca6fda'
        },
        {
          id: '5e8d6fb695df7971237fc173',
          body: 'I don\'t think that\'s ideal',
          contentType: 'text',
          createdAt: moment()
            .subtract(5, 'minutes')
            .toDate()
            .getTime(),
          senderId: '5e86809283e28b96d2d38537'
        }
      ],
      participantIds: [
        '5e8680e60cba5019c5ca6fda',
        '5e86809283e28b96d2d38537'
      ],
      unreadCount: 0
    }
  ]
};

mock.onGet('/api/chat/contacts').reply(200, {
  contacts: db.contacts
});

mock.onGet('/api/chat/threads').reply(200, {
  threads: db.threads
});

mock.onGet('/api/chat/thread').reply((config) => {
  const { threadKey } = config.params;
  const thread = db.threads.find((_thread) => _thread.key === threadKey);

  if (!thread) {
    return [200, { thread: null }];
  }

  return [200, { thread }];
});

mock.onGet('/api/chat/thread/mark-as-seen').reply((config) => {
  const { threadKey } = config.params;
  const thread = db.threads.find((_thread) => _thread.key === threadKey);

  if (thread) {
    thread.unreadCount = 0;
  }

  return [200, true];
});

mock.onPost('/api/chat/messages/new').reply((request) => {
  const { userId, threadKey, body } = JSON.parse(request.data);
  const message = {
    id: uuidv4(),
    body,
    contentType: 'text',
    createdAt: moment()
      .toDate()
      .getTime(),
    senderId: userId
  };

  let thread = db.threads.find((_thread) => _thread.key === threadKey);
  const otherUser = db.contacts.find((contact) => contact.username === threadKey);

  if (!thread) {
    thread = {
      id: uuidv4(),
      key: threadKey,
      type: 'ONE_TO_ONE',
      messages: [message],
      participantIds: [
        otherUser.id,
        userId
      ],
      unreadCount: 0
    };

    _.assign(db, {
      threads: [...db.threads, thread]
    });
  } else {
    _.assign(thread, {
      messages: [...thread.messages, message]
    });
  }

  return [200, {
    threadKey,
    otherUserId: otherUser.id,
    message
  }];
});
