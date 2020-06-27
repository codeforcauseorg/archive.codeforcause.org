import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Events from './Events';
import CTA from './CTA';
import Footer from './Footer';
import Mentors from './Mentors';
import StandForSection from './StandForView';

const useStyles = makeStyles(() => ({
  root: {},
}));

function HomeView() {
  const classes = useStyles();

  const footerInfo = [
    {
      id: 1,
      heading: 'Code for Cause',
      column: [
        {
          title: 'Blogs',
          link: 'https://medium.com/code-for-cause'
        }
      ]
    },
    {
      id: 2,
      heading: 'Products',
      column: [
        {
          title: 'Events',
          link: '#'
        }
      ]
    },
    {
      id: 3,
      heading: 'Contact Us',
      column: [
        {
          title: 'team@codeforcause.org',
          link: '#'
        }
      ]
    }
  ];
  const mentors = [
    {
      id: '5e887a62195cc5aef7e8ca5d',
      name: 'Anuj Garg',
      avatar: '/static/images/avatars/Anuj_garg.jpg',
      cover: '/static/images/covers/cover_1.jpg',
      designation: 'Senior Mentor',
      skills: [
        'User Experience',
        'FrontEnd development',
        'HTML5',
        'VueJS',
        'ReactJS'
      ],
      profile:
        'Anuj is our beloved kung fu panda. He is a super energetic guy and radiates aspiration and motivation. He is Admin in Google Summer of Code and Google Code-in for multiple years. He has four years of experience of mentoring and training software developers and a will to utilise it to make a change in the world. He is famous for his unique way of teaching that imprints the concept to never be lost again.'
    },
    {
      id: '5e887ac47eed253091be10cb',
      name: 'Gaurav Beriwal',
      avatar: '/static/images/avatars/Gaurav_Beriwal.jpg',
      cover: '/static/images/covers/cover_1.jpg',
      designation: 'Head of Management',
      skills: [
        'User Experience',
        'FrontEnd development',
        'HTML5',
        'VueJS',
        'ReactJS'
      ],
      profile:
        'Gaurav has worked as a Co-founder and Founding Member of a tech startup and an internet-based service company, He has learned to bridge the gap across teams. He is Masters in Psychology and has been helping school kids as a Google Code-in mentor. Being a stage lover, he has represented in dozens of events and has been guiding youth alongside. Also, an analyst by passion.'
    },
    {
      id: '5e86809283e28b96d2d38537',
      name: 'Kunal Kushwaha',
      avatar: '/static/images/avatars/kunal_kush.jpg',
      cover: '/static/images/covers/cover_2.jpg',
      designation: 'Mentor',
      skills: [
        'User Experience',
        'FrontEnd development',
        'HTML5',
        'VueJS',
        'ReactJS'
      ],
      profile:
        'Kunal is a super charged public speaker who loves to convey knowledge and is always up for a hot cup of Chai. He is a recognised mentor in Google Summer of Code, Google Code-In with JBoss Community. He is well versed in Java, Python, Web Development and Machine Learning. He loves to dwell in DevOps, Kubernetes, Cloud. He is Microsoft Student Partner and Python Mentor at AnitaB.org.'
    }
  ];

  return (
    <Page className={classes.root} title="Code for Cause">
      <Hero />
      <Events />
      <StandForSection />
      <Mentors mentors={mentors} />

      <CTA />
      <Footer footerInfo={footerInfo} />
    </Page>
  );
}

export default HomeView;
