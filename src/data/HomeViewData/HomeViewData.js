// event data------------------
export const events = [
  {
    img: 'https://img.youtube.com/vi/hkx_JFFwM1o/hqdefault.jpg',
    title: 'Web Development',
    link: 'https://codecau.se/algo3w',
    type: 'Webinar',
    description: 'DS and Algo with Java Bootcamp Induction',
    date_time: 'Aug 29, 7pm IST'
  },
  {
    img: 'https://img.youtube.com/vi/0ASPY4e9His/hqdefault.jpg',
    title: 'Machine Learning',
    link: 'https://www.youtube.com/watch?v=0ASPY4e9His',
    type: 'Webinar',
    description: 'Remote Work Best Practices by Joe Nash',
    date_time: 'Sept 16, 6:30pm IST'
  },
  {
    img: 'https://img.youtube.com/vi/4sOn2HmVBlM/hqdefault.jpg',
    title: 'Machine Learning Web',
    link: 'https://www.youtube.com/watch?v=4sOn2HmVBlM',
    type: 'Webinar',
    description: 'Empowering the Hacker Community - QnA with Mike Swift',
    date_time: 'Sept 7, 5:30pm IST'
  }
];

// Bootcamps data
export const bootcamps = [
  
  {
    domain: 'React',
    link: '/github-ui-clone-with-react',
    type: 'Bootcamp',
    title: '30 Days React Bootcamp GitHub UI Clone',
    timeBelow: '1st Jan - 30th Jan',
    image: '/static/temp/github.jpeg',
    target: '_self'
  },{
    domain: 'React',
    link: '/zomato-clone-with-react-js',
    type: 'Bootcamp',
    title: 'Learn to make a Zomato Clone in our week long React Bootcamp',
    timeBelow: '31st May',
    image: '/static/temp/rn.jpeg',
    target: '_self'
  },

  {
    domain: 'DS & Algorithms',
    link:
      'https://www.youtube.com/watch?v=hkx_JFFwM1o&list=PLyzHIYrZBplpsh_PQimtVosH72wSVOpy2',
    type: 'YT',
    title: 'Data Structures and Algorithms with Java',
    timeBelow: 'Aug 25',
    image: '/static/events/hqdefault2.jpg'
  }
];

// mentors data----------------

export const mentors = [
  {
    name: 'Anuj Garg',
    avatar: '/static/images/members/anuj.png',
    linkedin: 'https://www.linkedin.com/in/keenwarrior/'
  },
  {
    name: 'Ganga Chaturvedi',
    avatar: '/static/images/members/ganga.png',
    linkedin: 'https://www.linkedin.com/in/gangachatrvedi/'
  },
  {
    name: 'Amit Kumar',
    avatar: '/static/images/members/amit.png',
    linkedin: 'https://www.linkedin.com/in/amikudev/'
  },
  {
    name: 'Nityanand Rai',
    avatar: '/static/images/members/nityanand.png',
    linkedin: 'https://www.linkedin.com/in/nityanand-rai-905854184/'
  },
  {
    name: 'Vasudev Singhal',
    avatar: '/static/images/members/vasu.jpeg',
    linkedin: 'https://www.linkedin.com/in/vasudevsinghal'
  },
  {
    name: 'Bharat Kumar',
    avatar: '/static/images/members/bharat.png',
    linkedin: 'https://www.linkedin.com/in/bharatbbhardwaj/'
  }
];

// experience data ---------------------

export const experience = [
  {
    id: '1',
    img: '/static/images/experience/students.svg',
    count: '5000+',
    title: 'Students'
  },
  {
    id: '2',
    img: '/static/images/experience/teaching_hours.svg',
    count: '3200+',
    title: ' Teaching Hours'
  },
  {
    id: '3',
    img: '/static/images/experience/projects.svg',
    count: '1000+',
    title: 'Projects'
  },
  {
    id: '4',
    img: '/static/images/experience/contributors.svg',
    count: '100+',
    title: 'Contributors'
  }
];

// Open source section data-----------------
export const openKnowledgeContent = {
  title: 'Open Knowledge',
  about: `Our structure is based on generating knowledge flow that is not limited by bottlenecks. We inspire
    our mentees to pass on guidance and support, expanding our mentor base with each student we
    teach.`,
  points: [
    {
      id: '1',
      img: '/static/images/icons/ok1.svg',
      contentTitle: 'Live Classes',
      content:
        'We host live classes and workshops regularly with a focus on hands-on learning, a crucial skill in gaining real-world software development experience.'
    },
    {
      id: '2',
      img: '/static/images/icons/ok2.svg',
      contentTitle: 'Doubt Resolution',
      content:
        '​ Get connected to a large network of developers and open-source enthusiasts to get all your doubts resolved - be it technical, career-oriented, or related to soft skills.'
    },
    {
      id: '3',
      img: '/static/images/icons/ok3.svg',
      contentTitle: 'Career Guidance',
      content:
        'Learn from the experiences of the community members acting as career guidance to help choose the path best suited to you.'
    }
  ]
};

export const openSourceContent = {
  title: 'Open Source',
  about: `Our motivation is to funnel learning through OSS development that can solve real-world problems.
    With this, you can enhance your ideation, development, and soft skills such as communication,
    teamwork, and leadership.`,
  points: [
    {
      id: '1',
      img: '/static/images/icons/os1.svg',
      contentTitle: 'Develop Products',
      content:
        ' Practical development experience is crucial in becoming a pragmatic programmer. Join us and develop products to enhance your skillset for the real world.'
    },
    {
      id: '2',
      img: '/static/images/icons/os2.svg',
      contentTitle: 'Collaborative Coding',
      content:
        '​ When talking about graphs, the edges matter as much as the nodes. We follow Collaborative Working that helps you generate showcase-worthy work.'
    },
    {
      id: '3',
      img: '/static/images/icons/os3.svg',
      contentTitle: 'Networking Events',
      content:
        '​ As we already know that software development professionals flourish by networking, we help you in connecting to people who matter via our online/offline events.'
    }
  ]
};

export const whatWeStandForDescription =
  ' We aim to provide a real world practical learning experience and ' +
  'keep students informed about the latest trends in technology, ' +
  'open-source and opportunities, so that they can keep up with the ' +
  'fast-paced digital world by following a pi-shaped learning pattern.';

export const students = [
  {
    id: 1,
    msg: 'Thank you for the great ML webinars this is just a small gesture :)',
    img: '/static/images.icons/os3.svg',
    name: 'Sarthak',
    subName: 'Dell'
  },
  {
    id: 2,
    msg: 'CFC Testimonial msg 2',
    img: '/static/images.icons/os3.svg',
    name: 'Name2',
    subName: 'Dell'
  },
  {
    id: 3,
    msg: 'CFC Testimonial msg 3',
    img: '/static/images.icons/os3.svg',
    name: 'Name3',
    subName: 'Dell'
  },
  {
    id: 4,
    msg: 'CFC Testimonial msg 4',
    img: '/static/images.icons/os3.svg',
    name: 'Name4',
    subName: 'Dell'
  }
];
