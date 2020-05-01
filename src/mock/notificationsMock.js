import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/notifications').reply(200, {
  notifications: [
    {
      id: '5e8883f1b51cc1956a5a1ec0',
      title: 'Your order is placed',
      description: 'Dummy text',
      type: 'order_placed',
      createdAt: moment()
        .subtract(2, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e8883f7ed1486d665d8be1e',
      title: 'New message received',
      description: 'You have 32 unread messages',
      type: 'new_message',
      createdAt: moment()
        .subtract(1, 'day')
        .toDate()
        .getTime()
    },
    {
      id: '5e8883fca0e8612044248ecf',
      title: 'Your item is shipped',
      description: 'Dummy text',
      type: 'item_shipped',
      createdAt: moment()
        .subtract(3, 'days')
        .toDate()
        .getTime()
    },
    {
      id: '5e88840187f6b09b431bae68',
      title: 'New message received',
      description: 'You have 32 unread messages',
      type: 'new_message',
      createdAt: moment()
        .subtract(7, 'days')
        .toDate()
        .getTime()
    }
  ]
});
