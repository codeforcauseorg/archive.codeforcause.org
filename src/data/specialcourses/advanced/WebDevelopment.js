export const webDevelopment = {
  courseid: '',
  difficulty: 'Foundation',
  duration: '40 Live Lectures',
  level: 'Level 1',
  link: '/special-practical-webdev-with-js',
  domain: 'Web Development Ground Up',
  title: 'Practical Full Stack Web Development with JS',
  upcoming: 'April 1st',
  mentors: ['anuj', 'ganga'],
  schedule: [
    {
      courseId: 'jsfs0121',
      dates: '1st April - 15th June',
      days: 'Mon, Tue, Thr, Fri',
      timing: '6:00 PM - 07:00 PM (IST)',
      link: '',
      priceCut: '₹ 12,000',
      price: '₹ 1200',
      priceId: 'https://rzp.io/l/webdevcfc',
      duration: '40 Live Lectures',
      active: false
    }
  ],
  projects: [
    {
      title: 'Vendor App with Payment Gateway',
      img: '/static/images/courses/projects/payment.jpg'
    },
    {
      title: 'GitHub CLI Replica',
      img: '/static/images/courses/projects/githubcli.png'
    },
    {
      title: 'Protfolio Website to Standout',
      img: '/static/images/courses/projects/portfolio.png'
    },
    {
      title: 'Pastebin snippet Pusher',
      img: '/static/images/courses/projects/apicall.jpg'
    },
    {
      title: 'Chat App with WebSockets',
      img: '/static/images/courses/projects/chat.jpg'
    }
  ],

  sections: [
    {
      title: 'Learning JavaScript - Language of Internet',
      classes: 'Classes 01-10',
      topics: [
        {
          title: 'Introduction to JavaScript',
          subtopics: [
            'Setting up node Environment',
            'Variables and Data Types',
            'Conditions and expression Statements',
            'Various type of looping in JS',
            'Star Pattern Questions'
          ]
        },
        {
          title: 'Usage of Functions',
          subtopics: [
            'Function call and execution',
            'Function call chaining and expressions',
            'Anonymous Functions and lambdas'
          ]
        },
        {
          title: 'Arrays and Strings',
          subtopics: [
            'JS Arrays and how cool they are',
            'Searching Algoriths (Linear and Binary)',
            'Sorting Algoriths (Bubble, Selection, Insertion)',
            'String methods and processing and manipulation'
          ]
        },
        {
          title: 'Lambdas, map and filter',
          subtopics: [
            'Lambda as trendy anonymous function',
            'Convering and procession with map',
            'Filter from iterables'
          ]
        }
      ]
    },
    {
      title: 'Introduction to Web Dev Elements',
      classes: 'Classes 11-20',
      topics: [
        {
          title: 'Building application with npm',
          subtopics: [
            'Getting hands on with npm package management',
            'Setting and installing project dependencies',
            'Combining past JS concepts with npm',
            'Understanding components of API call',
            'Mini-project - GitHub API calls with Axios'
          ]
        },
        {
          title: 'Setting up pace with HTML',
          subtopics: [
            'HTML document architecture',
            'Container and Blocks elements',
            'Giving page life with JS actions',
            'Manipulating elements with JS',
            'Creating simple forms (Basic Look)',
            'Responsive website design Using bootstrap',
            'FlexBoxes for best practices of alignments'
          ]
        },
        {
          title: 'CSS and Bootstap Fundamentals',
          subtopics: [
            'Styling and CSS Selectors',
            'Understanding a figma design',
            'Creating forms validations',
            'Responsive website design Using bootstrap'
          ]
        },
        {
          title: 'Alignment is everything',
          subtopics: [
            'Mobile first web applications',
            'Layouts and when to use what',
            'FlexBoxes for best practices of alignments'
          ]
        }
      ]
    },
    {
      title: 'Building Full Stack Capability',
      classes: 'Classes 21-30',
      topics: [
        {
          title: 'Setting up React Project',
          classes: 'Classes 15-18',
          subtopics: [
            'Setting up React in your project',
            'File Architecture of React project',
            'Building funtional components',
            'React Routers for Single Page App',
            'Exploring Material UI Website',
            'Mini Project - Portfolio Website'
          ]
        },
        {
          title: 'Web Server with ExpressJS',
          classes: 'Classes 15-18',
          subtopics: [
            'Hello World with ExpressJS Framework',
            'Creating Middlewares for Security etc',
            'Creating RESTful APIs with Express',
            'Various HTTP requests and Form Submissions',
            'Socket.IO for realtime communication'
          ]
        },
        {
          title: 'Diving Deep with React',
          classes: 'Classes 19-22',
          subtopics: [
            'React Props for child communication',
            'State management with hooks',
            'Using hooks for functional React experience',
            'Handling Project Theme',
            'Typography with React MUI'
          ]
        },
        {
          title: 'Steppers and Animations in React',
          classes: 'Classes 19-22',
          subtopics: [
            'Horizontal and Vertical Steppers with React MUI',
            'Animations  with React Spring',
            'Transitions with React Spring'
          ]
        }
      ]
    },
    {
      title: 'Databases and Deployment',
      classes: 'Classes 31-40',
      topics: [
        {
          title: 'Relational and Not Relational Databases',
          classes: 'Classes 23-25',
          subtopics: [
            'Walk trhough with SQL Queries',
            'H2 and MySQL Databases and connecting with ORM',
            'Handling documents with MongoDB',
            'Setting up geolocation indexing for Uber like search'
          ]
        },
        {
          title: 'Cloud Authentication, Hosting and Functions',
          classes: 'Classes 26-28',
          subtopics: [
            'Setting up auth with passport',
            'Social auth with Google, Facebook and GitHub',
            'Cloud Functions for scaled Arch',
            'Firestore and other firebase products'
          ]
        },
        {
          title: 'Project discussion and best practices',
          classes: 'Classes 29-30',
          subtopics: [
            'Spinning up project ideas and how to explore',
            'Pitching session and walkthough presentation',
            'Best Practices to follow for web projects'
          ]
        }
      ]
    }
  ],
  slides: [
    {
      heading: '',
      subheading: '',
      image: '/static/swipes/web.png'
    }
  ],
  tags: [
    'Bootstrap',
    'Express',
    'Mongodb',
    'React',
    'Redux',
    'Server',
    'Firebase',
    'Web Services',
    'Rest API',
    'Databases',
    'SQL',
    'Model Creation',
    'Authentication',
    'Cloud Functions',
    'UI Interpretation'
  ],
  overview: [
    'Do you realize that the only functionality of a web application that the user directly interacts with is through the web page? Implement it poorly and, to the user, the server-side becomes irrelevant! Today’s user expects a lot out of the web page: it has to load fast, expose the desired service, and be comfortable to view on all devices: from a desktop computers to tablets and mobile phones.',
    'In this course, we will learn the basic tools that every web page coder needs to know. We will start from the ground up by learning how to implement modern web pages with HTML and CSS. We will then advance to learning how to code our pages such that its components rearrange and resize themselves automatically based on the size of the user’s screen.'
  ],
  faqs: [
    {
      title: 'Will this help me with my career path?',
      answer:
        'Yes. If you learn well, all that the course intends to teach, you’ll be able to impress quite a few interviewers across quite a few fine companies.'
    },
    {
      title: 'How your doubts will get resolved?',
      answer:
        'We have an army of TA’s who are available in different time slots to resolve all your doubts. You can also interact with faculty through Slack.'
    },
    {
      title: 'Is this course suitable for me?',
      answer:
        'Definitely! If you want to shift to software developer career path, then this course is perfect for you!'
    }
  ]
};
