export const deepLearning = {
  courseid: '',
  enabled: true,
  difficulty: 'Intermediate',
  duration: '9 Live Lectures',
  level: 'Level 1',
  link: '/deep-learning-using-python',
  domain: 'Data Science',
  title: 'Deep Learning with Tensorflow',
  upcoming: 'June 21st',
  mentors: ['anuj', 'ganga'],
  default: 0,
  schedule: [
    {
      courseId: 'pyfs0121',
      dates: '21st June - 5th July',
      days: 'Mon, Wed, Fri, Sun',
      timing: '12:00 PM - 1:30 PM (IST)',
      link: '',
      priceCut: '₹ 5,880',
      price: '₹ 985',
      duration: '9 Live Lectures',
      active: true
    }
  ],
  projects: [
    {
      title: 'Facial Landmarking and Gesture',
      img: '/static/images/courses/projects/tf/landmark.jpeg'
    },
    {
      title: 'Hand Gesture based Cursor controller',
      img: '/static/images/courses/projects/tf/hand.jpeg'
    },
    {
      title: 'Play muslic like Alexa',
      img: '/static/images/courses/projects/tf/alexa.jpeg'
    }
  ],

  sections: [
    {
      title: 'Deep Learning with Tensorflow Bootcamp',
      classes: '',
      topics: [
        {
          title: 'Processing WebCam for Facing Landmarks',
          subtopics: [
            'Understanding Images and RGB layers',
            'Capturing frames with OpenCV',
            'Face detection and localisation walkthrough',
            'Finding and displaying landmarks'
          ]
        },
        {
          title: 'Introduction to Deep Neural Network.',
          subtopics: [
            'Understanding Perceptron Architecture',
            'Dense Layers and Neural Layers',
            'Tensorflow Playgroud Walkthrough',
            'Writing first Keras model for mnist data'
          ]
        },
        {
          title: 'Hand Written Digits Classification',
          subtopics: [
            'Convolutions and deep conv models',
            'How filter works in CNN',
            'Buiding and saving model in different formats',
            'Desktop app to predict digit from hand digits on app canvas'
          ]
        },
        {
          title: 'Virtual Trackpad with Hand Gesture.',
          subtopics: [
            'Managing I/O with python app',
            'Hand localisation with Deep Learning',
            'Hand Gesture with Deep Learning'
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
  tags: ['Keras', 'Tensorflow', 'Kivy', 'Apps', 'Image Processing'],
  overview: [
    'Deep learning is an artificial intelligence (AI) function that imitates the workings of the human brain in processing data and creating patterns for use in decision making.',
    'In this bootcamp we will target on understanding deep learning concepts as well as building practical applications on them. Eg. Camera App, Facial Landmarking, Gesture Controls etc'
  ],
  faqs: [
    {
      title: 'Do I need to know python for this bootcamp?',
      answer: 'You should have comfort with Pyhton'
    },
    {
      title: 'Do I need to know Machine Learning for this bootcamp?',
      answer:
        'Understanding of basic terminologiesis good to have but not must have.'
    },
    {
      title: 'Is there doubt resolution included?',
      answer:
        'We have an army of TA’s who are available in different time slots to resolve all your doubts.'
    },
    {
      title: 'Is this Bootcamp suitable for me?',
      answer:
        'Definitely! If you want to take headstart in Deep Learning, then this bootcamp is perfect for you!'
    }
  ],
  offer: {
    title: 'Swags Giveaway',
    subheading:
      'CFC Swags kit including Sipper, Key Chains and Stickers with this Bootcamp'
  }
};
