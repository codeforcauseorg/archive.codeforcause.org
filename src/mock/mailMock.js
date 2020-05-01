import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

function filterMails(mails, labels, systemLabel, customLabel) {
  if (customLabel) {
    const label = labels.find((_label) => _label.name === customLabel);

    if (!label) {
      return [];
    }

    return mails.filter((mail) => mail.labelIds.includes(label.id));
  }

  if (systemLabel === 'all') {
    return mails;
  }

  // "Starred" can be both folder and filter
  if (['starred', 'important'].includes(systemLabel)) {
    if (systemLabel === 'starred') {
      return mails.filter((mail) => mail.isStarred);
    }

    if (systemLabel === 'important') {
      return mails.filter((mail) => mail.isImportant);
    }
  }

  if (['inbox', 'sent', 'drafts', 'trash', 'spam', 'starred'].includes(systemLabel)) {
    return mails.filter((mail) => mail.folder === systemLabel);
  }

  return [];
}

const db = {
  labels: [
    {
      id: 'all',
      type: 'system_label',
      name: 'All Mail'
    },
    {
      id: 'inbox',
      type: 'system_label',
      name: 'Inbox',
      unreadCount: 1,
      totalCount: 0
    },
    {
      id: 'sent',
      type: 'system_label',
      name: 'Sent',
      unreadCount: 0,
      totalCount: 0
    },
    {
      id: 'drafts',
      type: 'system_label',
      name: 'Drafts',
      unreadCount: 0,
      totalCount: 0
    },
    {
      id: 'trash',
      type: 'system_label',
      name: 'Trash',
      unreadCount: 0,
      totalCount: 1
    },
    {
      id: 'spam',
      type: 'system_label',
      name: 'Spam',
      unreadCount: 1,
      totalCount: 1
    },
    {
      id: 'important',
      type: 'system_label',
      name: 'Important',
      unreadCount: 0,
      totalCount: 1
    },
    {
      id: 'starred',
      type: 'system_label',
      name: 'Starred',
      unreadCount: 1,
      totalCount: 1
    },
    {
      id: '5e892628d4bc60b4514d5d36',
      type: 'custom_label',
      name: 'Work',
      unreadCount: 1,
      totalCount: 1,
      color: colors.green[600]
    },
    {
      id: '5e8926820cf9ec6c834114ec',
      type: 'custom_label',
      name: 'Business',
      unreadCount: 0,
      totalCount: 2,
      color: colors.blue[600]
    },
    {
      id: '5e892696db60f561c43c6f81',
      type: 'custom_label',
      name: 'Personal',
      unreadCount: 0,
      totalCount: 1,
      color: colors.orange[600]
    }
  ],
  mails: [
    {
      id: '5e86bcc3e1b53b6365d71638',
      folder: 'Business',
      isUnread: true,
      isStarred: false,
      isImportant: true,
      labelIds: ['5e8926820cf9ec6c834114ec', '5e892696db60f561c43c6f81'],
      subject: 'Website redesign. Interested in collaboration',
      message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Ekaterina Tankova
      `,
      from: {
        name: 'Ekaterina Tankova',
        email: 'ekaterina.tankova@devias.io',
        avatar: '/static/images/avatars/avatar_2.png'
      },
      to: [
        {
          name: 'Katarina Smith',
          email: 'katarina.smith@devias.io',
          avatar: null
        }
      ],
      createdAt: moment()
        .toDate()
        .getTime()
    },
    {
      id: '5e86bcbd8406cd3055f2b6c8',
      folder: 'spam',
      isUnread: false,
      isStarred: true,
      isImportant: false,
      labelIds: [],
      subject: 'Amazing work',
      message: `
Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?
      `,
      from: {
        name: 'Adam Denisov',
        email: 'adam.denisov@devias.io',
        avatar: '/static/images/avatars/avatar_7.png'
      },
      to: [
        {
          name: 'Katarina Smith',
          email: 'katarina.smith@devias.io',
          avatar: null
        }
      ],
      createdAt: moment()
        .toDate()
        .getTime()
    },
    {
      id: '5e86bcb9fee1ec12453fa13b',
      folder: 'inbox',
      isUnread: false,
      isStarred: false,
      isImportant: false,
      subject: 'Flight reminder',
      labelIds: ['5e892628d4bc60b4514d5d36'],
      message: `
Dear Shen, Your flight is coming up soon. Please don’t forget to check in for your scheduled flight.
      `,
      from: {
        name: 'Miller Edwards',
        email: 'miller.edwards@devias.io',
        avatar: '/static/images/avatars/avatar_8.png'
      },
      to: [
        {
          name: 'Katarina Smith',
          email: 'katarina.smith@devias.io',
          avatar: null
        }
      ],
      createdAt: moment()
        .toDate()
        .getTime()
    },
    {
      id: '5e86bcb5575181a5e527e24f',
      folder: 'trash',
      isUnread: true,
      isStarred: false,
      isImportant: false,
      labelIds: ['5e8926820cf9ec6c834114ec'],
      subject: 'Posible candidates for the position',
      message: `
My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis
      `,
      from: {
        name: 'Cao Yu',
        email: 'cao.yu@devias.io',
        avatar: '/static/images/avatars/avatar_3.png'
      },
      to: [
        {
          name: 'Katarina Smith',
          email: 'katarina.smith@devias.io',
          avatar: null
        }
      ],
      createdAt: moment()
        .toDate()
        .getTime()
    }
  ]
};

mock.onGet('/api/mail/labels').reply(200, {
  labels: db.labels
});

mock.onGet('/api/mail/mails').reply((config) => {
  const { systemLabel, customLabel } = config.params;
  const mails = filterMails(
    db.mails,
    db.labels,
    systemLabel,
    customLabel
  );

  return [200, { mails }];
});

mock.onGet('/api/mail/mail').reply((config) => {
  const { mailId } = config.params;
  const mail = db.mails.find((_mail) => _mail.id === mailId);

  if (!mail) {
    return [404, { message: 'Mail not fount' }];
  }

  return [200, { mail }];
});
