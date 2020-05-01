import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/social/profile').reply(200, {
  user: {
    id: '5e86809283e28b96d2d38537',
    name: 'Katarina Smith',
    email: 'katarina.smith@devias.io',
    bio: 'Sales Manager',
    avatar: '/static/images/avatars/avatar_6.png',
    cover: '/static/images/covers/cover_1.jpg',
    connectedStatus: 'not_connected',
    profileProgress: 50,
    quote: 'Everyone thinks of changing the world, but no one thinks of changing himself.',
    currentJob: {
      title: 'Product Designer',
      company: 'Devias IO'
    },
    previousJob: {
      title: 'UX Designer at',
      company: 'Focus Aesthetic Dyanmics'
    },
    currentCity: 'Bucharest',
    originCity: 'Rm. Valcea'
  }
});

mock.onGet('/api/social/feed').reply(200, {
  posts: [
    {
      id: '5e887fa38598b6fe61667757',
      author: {
        id: '5e88792be2d4cfb4bf0971d9',
        name: 'Elliott Stone',
        avatar: '/static/images/avatars/avatar_10.png'
      },
      message: 'Hey guys! What\'s your favorite framework?',
      liked: true,
      likes: 1,
      comments: [
        {
          id: '5e887fb6c648772b52f860a8',
          author: {
            id: '5e8680e60cba5019c5ca6fda',
            name: 'Merrile Burgett',
            avatar: '/static/images/avatars/avatar_12.png'
          },
          message: 'I\'ve been using Angular for the past 3 years',
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime()
        }
      ],
      createdAt: moment()
        .subtract(16, 'minutes')
        .toDate()
        .getTime()
    },
    {
      id: '5e887faca2b7a1ddce01221a',
      author: {
        id: '5e86809283e28b96d2d38537',
        name: 'Katarina Zhi',
        avatar: '/static/images/avatars/avatar_6.png'
      },
      message: 'Just made this home screen for a project, what-cha thinkin?',
      media: '/static/images/posts/post_1.png',
      liked: true,
      likes: 24,
      comments: [
        {
          id: '5e887fc17162ba254da30771',
          author: {
            id: '5e887b7602bdbc4dbb234b27',
            name: 'Anje Keizer',
            avatar: '/static/images/avatars/avatar_5.png'
          },
          message: 'Could use some more statistics, but that’s me haha',
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime()
        },
        {
          id: '5e887fc759bebe8d5d54a2e5',
          author: {
            id: '5e887a1fbefd7938eea9c981',
            name: 'Miller Edwards',
            avatar: '/static/images/avatars/avatar_8.png'
          },
          message: 'Hmm, honestly this looks nice but I would change the shadow though',
          createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime()
        }
      ],
      createdAt: moment()
        .subtract(4, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e887faf03e78a5359765636',
      author: {
        id: '5e86809283e28b96d2d38537',
        name: 'Katarina Smith',
        avatar: '/static/images/avatars/avatar_6.png'
      },
      message: 'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
      liked: false,
      likes: 65,
      comments: [
        {
          id: '5e887fde4992eca63b9e9ef5',
          author: {
            id: '5e8877da9a65442b11551975',
            name: 'Shen Zhi',
            avatar: '/static/images/avatars/avatar_11.png'
          },
          message: 'That’s actually deep. Thanks for the design, would you consider making an interaction?',
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime()
        },
        {
          id: '5e887feb11b7add1ebfcca78',
          author: {
            id: '5e887b209c28ac3dd97f6db5',
            name: 'Alex Richardson',
            avatar: '/static/images/avatars/avatar_4.png'
          },
          message: 'Oh... so sentimental',
          createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime()
        }
      ],
      createdAt: moment()
        .subtract(7, 'hours')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/social/users/1/posts').reply(200, {
  posts: [
    {
      id: '5e887faca2b7a1ddce01221a',
      author: {
        id: '5e86809283e28b96d2d38537',
        name: 'Katarina Smith',
        avatar: '/static/images/avatars/avatar_6.png'
      },
      message: 'Just made this home screen for a project, what-cha thinkin?',
      media: '/static/images/posts/post_1.png',
      liked: true,
      likes: 24,
      comments: [
        {
          id: '5e887fc17162ba254da30771',
          author: {
            id: '5e887b7602bdbc4dbb234b27',
            name: 'Anje Keizer',
            avatar: '/static/images/avatars/avatar_5.png'
          },
          message: 'Could use some more statistics, but that’s me haha',
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime()
        },
        {
          id: '5e887fc759bebe8d5d54a2e5',
          author: {
            id: '5e887a1fbefd7938eea9c981',
            name: 'Miller Edwards',
            avatar: '/static/images/avatars/avatar_8.png'
          },
          message: 'Hmm, honestly this looks nice but I would change the shadow though',
          createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime()
        }
      ],
      createdAt: moment()
        .subtract(4, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e887faf03e78a5359765636',
      author: {
        id: '5e86809283e28b96d2d38537',
        name: 'Katarina Smith',
        avatar: '/static/images/avatars/avatar_6.png'
      },
      message: 'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.',
      liked: false,
      likes: 65,
      comments: [
        {
          id: '5e887fde4992eca63b9e9ef5',
          author: {
            id: '5e8877da9a65442b11551975',
            name: 'Shen Zhi',
            avatar: '/static/images/avatars/avatar_11.png'
          },
          message: 'That’s actually deep. Thanks for the design, would you consider making an interaction?',
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime()
        },
        {
          id: '5e887feb11b7add1ebfcca78',
          author: {
            id: '5e887b209c28ac3dd97f6db5',
            name: 'Alex Richardson',
            avatar: '/static/images/avatars/avatar_4.png'
          },
          message: 'Oh... so sentimental',
          createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime()
        }
      ],
      createdAt: moment()
        .subtract(7, 'hours')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/social/users/1/projects').reply(200, {
  projects: [
    {
      id: '5e88832046990a87d32e6caf',
      media: '/static/images/projects/project_2.png',
      title: 'Mella Full Screen Slider',
      author: {
        id: '5e887b7602bdbc4dbb234b27',
        name: 'Anje Keizer',
        avatar: '/static/images/avatars/avatar_5.png'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'Angular JS',
      liked: true,
      likes: 57,
      rating: 3,
      subscribers: 5,
      updatedAt: moment()
        .subtract(24, 'minutes')
        .toDate()
        .getTime()
    },
    {
      id: '5e88832b7e1ddc356c94dcc2',
      media: '/static/images/projects/project_1.png',
      title: 'Dashboard Design',
      author: {
        id: '5e86809283e28b96d2d38537',
        name: 'Katarina Smith',
        avatar: '/static/images/avatars/avatar_6.png'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'React JS',
      liked: false,
      likes: 91,
      rating: 4.3,
      subscribers: 10,
      updatedAt: moment()
        .subtract(1, 'hour')
        .toDate()
        .getTime()
    },
    {
      id: '5e888331f4107aa4013caada',
      media: '',
      title: 'Ten80 Web Design',
      author: {
        id: '5e86805e2bafd54f66cc95c3',
        name: 'Adam Denisov',
        avatar: '/static/images/avatars/avatar_7.png'
      },
      type: 'Full-Time',
      location: 'Europe',
      technology: 'Vue JS',
      liked: true,
      likes: 6,
      rating: 5,
      subscribers: 4,
      updatedAt: moment()
        .subtract(16, 'hour')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/social/users/1/reviews').reply(200, {
  reviews: [
    {
      id: '5e887f7404ed12e9afb71841',
      rating: 4,
      message: 'Shen was really great during the all time session we created the project',
      reviewer: {
        id: '5e887a62195cc5aef7e8ca5d',
        name: 'Ekaterina Tankova',
        avatar: '/static/images/avatars/avatar_2.png'
      },
      project: {
        title: 'Mella Full Screen Slider',
        price: '5,240.00'
      },
      pricePerHour: '43.00',
      hours: 31,
      currency: '$',
      createdAt: moment()
        .subtract(4, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e887f7b91b9b5330c49a318',
      rating: 5,
      reviewer: {
        id: '5e887ac47eed253091be10cb',
        name: 'Cao Yu',
        avatar: '/static/images/avatars/avatar_3.png'
      },
      project: {
        title: 'Dashboard Design',
        price: '3,680.00'
      },
      pricePerHour: '38.00',
      hours: 76,
      currency: '$',
      message: 'Being the savage\'s bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale\'s back. You have seen Italian organ-boys holding a dancing-ape by a long cord. Just so, from the ship\'s steep side, did I hold Queequeg down there in the sea, by what is technically called in the fishery a monkey-rope, attached to a strong strip of canvas belted round his waist.',
      createdAt: moment()
        .subtract(8, 'days')
        .toDate()
        .getTime()
    }
  ]
});

mock.onGet('/api/social/users/1/connections').reply(200, {
  connections: [
    {
      id: '5e887a62195cc5aef7e8ca5d',
      name: 'Ekaterina Tankova',
      avatar: '/static/images/avatars/avatar_2.png',
      common: 12,
      status: 'connected'
    },
    {
      id: '5e887ac47eed253091be10cb',
      name: 'Cao Yu',
      avatar: '/static/images/avatars/avatar_3.png',
      common: 10,
      status: 'rejected'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      name: 'Alex Richardson',
      avatar: '/static/images/avatars/avatar_4.png',
      common: 8,
      status: 'pending'
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      name: 'Adam Denisov',
      avatar: '/static/images/avatars/avatar_7.png',
      common: 5,
      status: 'not_connected'
    },
    {
      id: '5e887a1fbefd7938eea9c981',
      name: 'Miller Edwards',
      avatar: '/static/images/avatars/avatar_8.png',
      common: 1,
      status: 'connected'
    }
  ]
});
