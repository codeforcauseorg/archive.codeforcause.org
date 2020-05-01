import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/reports/top-referrals').reply(200, {
  referrals: [
    {
      color: colors.blueGrey['700'],
      name: 'GitHub',
      initials: 'GT',
      value: '53,032'
    },
    {
      color: colors.cyan['500'],
      name: 'Twitter',
      initials: 'TW',
      value: '39,551'
    },
    {
      color: colors.indigo[600],
      name: 'Hacker News',
      initials: 'HN',
      value: '23,150'
    },
    {
      color: colors.red['500'],
      name: 'Stack Overflow',
      initials: 'SO',
      value: '14,093'
    },
    {
      color: colors.orange['900'],
      name: 'Reddit.com',
      initials: 'RD',
      value: '7,251'
    },
    {
      color: colors.blueGrey['900'],
      name: 'Dev.to',
      initials: 'DE',
      value: '5,694'
    },
    {
      color: colors.blue['900'],
      name: 'Facebook',
      initials: 'FB',
      value: '3,643'
    },
    {
      color: colors.blueGrey['900'],
      name: 'Medium',
      initials: 'MD',
      value: '1,654'
    }
  ]
});

mock.onGet('/api/reports/profitable-products').reply(200, {
  products: [
    {
      id: uuidv4(),
      type: 'freelancer_basic',
      name: 'Freelancer Basic Subscription',
      image: '/static/images/products/product_freelancer.svg',
      subscriptions: '13,153',
      currency: '$',
      price: '5.00',
      progress: 93
    },
    {
      id: uuidv4(),
      type: 'freelancer_extra',
      name: 'Freelancer Extra Subscription',
      image: '/static/images/products/product_freelancer.svg',
      subscriptions: '10,300',
      currency: '$',
      price: '15.00',
      progress: 76
    },
    {
      id: uuidv4(),
      type: 'agency_basic',
      name: 'Agency Basic Subscription',
      image: '/static/images/products/product_agency.svg',
      subscriptions: '5,300',
      currency: '$',
      price: '25.00',
      progress: 60
    },
    {
      id: uuidv4(),
      type: 'enterprise_basic',
      name: 'Enterprise Basic Subscription',
      image: '/static/images/products/product_enterprise.svg',
      subscriptions: '1,203',
      currency: '$',
      price: '205.00',
      progress: 46
    },
    {
      id: uuidv4(),
      type: 'enterprise_extra',
      name: 'Enterprise Extra Subscription',
      image: '/static/images/products/product_enterprise.svg',
      subscriptions: '254',
      currency: '$',
      price: '500.00',
      progress: 41
    }
  ]
});

mock.onGet('/api/reports/customer-activity').reply(200, {
  activities: [
    {
      id: '5e89140bcc768199d1e0dc49',
      type: 'register',
      description: 'Created account',
      customer: {
        id: '5e887a62195cc5aef7e8ca5d',
        name: 'Ekaterina Tankova',
        avatar: '/static/images/avatars/avatar_2.png'
      },
      createdAt: moment()
        .subtract(23, 'minutes')
        .toDate()
        .getTime()
    },
    {
      id: '5e891411b0290b175166cd32',
      type: 'payment',
      description: 'Subscription Purchase',
      customer: {
        id: '5e887ac47eed253091be10cb',
        name: 'Cao Yu',
        avatar: '/static/images/avatars/avatar_3.png'
      },
      createdAt: moment()
        .subtract(56, 'minutes')
        .toDate()
        .getTime()
    },
    {
      id: '5e89141633dc5e52c923ef27',
      type: 'ticket_create',
      description: 'Submitted a ticket',
      customer: {
        id: '5e887b209c28ac3dd97f6db5',
        name: 'Alex Richardson',
        avatar: '/static/images/avatars/avatar_4.png'
      },
      createdAt: moment()
        .subtract(2, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e89141bd975c7f33aee9f4b',
      type: 'payment',
      description: 'Subscription Purchase',
      customer: {
        id: '5e887b7602bdbc4dbb234b27',
        name: 'Anje Keizer',
        avatar: '/static/images/avatars/avatar_5.png'
      },
      createdAt: moment()
        .subtract(5, 'minutes')
        .toDate()
        .getTime()
    },
    {
      id: '5e891421d7945778863cf9ca',
      type: 'payment',
      description: 'Subscription Purchase',
      customer: {
        id: '5e86809283e28b96d2d38537',
        name: 'Katarina Smith',
        avatar: '/static/images/avatars/avatar_6.png'
      },
      createdAt: moment()
        .subtract(5, 'minutes')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/reports/earnings').reply(200, {
  earnings: {
    datasets: [
      {
        data: [56, 24, 20],
        backgroundColor: ['#3d72eb', '#4b9e86', '#b658f5']
      }
    ],
    labels: ['Subscriptions', 'Affiliate', 'Sales'],
  }
});

mock.onGet('/api/reports/latest-orders').reply(200, {
  orders: [
    {
      id: uuidv4(),
      ref: 'DEV1042',
      items: 7,
      value: '524.00',
      currency: '$',
      customer: {
        name: 'Ekaterina Tankova',
        email: 'ekaterina@devias.io'
      },
      status: 'pending',
      createdAt: moment()
        .subtract(7, 'minutes')
        .subtract(10, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      ref: 'DEV1041',
      items: 8,
      value: '693.00',
      currency: '$',
      customer: {
        name: 'Cao Yu',
        email: 'cao.yu@devias.io'
      },
      status: 'complete',
      createdAt: moment()
        .subtract(2, 'hours')
        .subtract(12, 'minutes')
        .subtract(50, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      ref: 'DEV1040',
      items: 4,
      value: '215.00',
      currency: '$',
      customer: {
        name: 'Alex Richardson',
        email: 'alex.richardson@devias.io'
      },
      status: 'rejected',
      createdAt: moment()
        .subtract(5, 'hours')
        .subtract(39, 'minutes')
        .subtract(12, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      ref: 'DEV1039',
      items: 1,
      value: '25.00',
      currency: '$',
      customer: {
        name: 'Anje Keizer',
        email: 'anje.keiser@devias.io'
      },
      status: 'pending',
      createdAt: moment()
        .subtract(5, 'hours')
        .subtract(46, 'minutes')
        .subtract(21, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      ref: 'DEV1038',
      items: 5,
      value: '535.00',
      currency: '$',
      customer: {
        name: 'Clarke Gillebert',
        email: 'clarke.gillebert@devias.io'
      },
      status: 'complete',
      createdAt: moment()
        .subtract(8, 'hours')
        .subtract(19, 'minutes')
        .subtract(54, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      ref: 'DEV1037',
      items: 2,
      value: '56.00',
      currency: '$',
      customer: {
        name: 'Merrile Burgett',
        email: 'merrile.burgett@devias.io'
      },
      status: 'complete',
      createdAt: moment()
        .subtract(1, 'days')
        .subtract(45, 'minutes')
        .subtract(12, 'seconds')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/reports/latest-projects').reply(200, {
  projects: [
    {
      id: uuidv4(),
      title: 'Mella Full Screen Slider',
      price: '12,500',
      currency: '$',
      author: {
        id: '5e887b7602bdbc4dbb234b27',
        name: 'Anje Keizer',
        avatar: '/static/images/avatars/avatar_5.png'
      },
      technologies: ['angular'],
      createdAt: moment()
        .subtract(2, 'hours')
        .subtract(34, 'minutes')
        .subtract(10, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      title: 'Dashboard Design',
      price: '15,750',
      currency: '$',
      author: {
        id: '5e887d0b3d090c1b8f162003',
        name: 'Emilee Simchenko',
        avatar: '/static/images/avatars/avatar_9.png'
      },
      technologies: ['sketch', 'html-css'],
      createdAt: moment()
        .subtract(10, 'hours')
        .subtract(56, 'minutes')
        .subtract(25, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      title: 'Ten80 Web Design',
      price: '15,750',
      currency: '$',
      author: {
        id: '5e88792be2d4cfb4bf0971d9',
        name: 'Elliott Stone',
        avatar: '/static/images/avatars/avatar_10.png'
      },
      technologies: ['react-js'],
      createdAt: moment()
        .subtract(1, 'days')
        .subtract(30, 'minutes')
        .subtract(50, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      title: 'Neura e-commerce UI Kit',
      price: '12,500',
      currency: '$',
      author: {
        id: '5e8877da9a65442b11551975',
        name: 'Shen Zhi',
        avatar: '/static/images/avatars/avatar_11.png'
      },
      technologies: ['vue-js'],
      createdAt: moment()
        .subtract(1, 'days')
        .subtract(4, 'minutes')
        .subtract(30, 'seconds')
        .toDate()
        .getTime()
    },
    {
      id: uuidv4(),
      title: 'Administrator Dashboard',
      price: '15,750',
      currency: '$',
      author: {
        id: '5e887ac47eed253091be10cb',
        name: 'Cao Yu',
        avatar: '/static/images/avatars/avatar_3.png'
      },
      technologies: ['angular', 'figma'],
      createdAt: moment()
        .subtract(1, 'days')
        .subtract(11, 'minutes')
        .subtract(6, 'seconds')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/reports/tasks').reply(200, {
  tasks: [
    {
      id: uuidv4(),
      title: 'Update the API for the project',
      deadline: moment()
        .add(1, 'days')
        .add(1, 'hour')
        .toDate()
        .getTime(),
      members: [
        '/static/images/avatars/avatar_2.png',
        '/static/images/avatars/avatar_3.png',
      ]
    },
    {
      id: uuidv4(),
      title: 'Redesign the landing page',
      deadline: moment()
        .add(2, 'day')
        .add(1, 'hour')
        .toDate()
        .getTime(),
      members: [
        '/static/images/avatars/avatar_8.png',
        '/static/images/avatars/avatar_10.png',
        '/static/images/avatars/avatar_12.png'
      ]
    },
    {
      id: uuidv4(),
      title: 'Solve the bug for the showState',
      deadline: moment()
        .toDate()
        .getTime(),
      members: ['/static/images/avatars/avatar_7.png']
    },
    {
      id: uuidv4(),
      title: 'Release v1.0 Beta',
      deadline: null,
      members: [
        '/static/images/avatars/avatar_2.png',
        '/static/images/avatars/avatar_10.png']
    },
    {
      id: uuidv4(),
      title: 'GDPR Compliance',
      deadline: null,
      members: [
        '/static/images/avatars/avatar_5.png',
        '/static/images/avatars/avatar_2.png',
        '/static/images/avatars/avatar_6.png'
      ]
    },
    {
      id: uuidv4(),
      title: 'Redesign Landing Page',
      deadline: null,
      members: ['/static/images/avatars/avatar_8.png']
    }
  ]
});
