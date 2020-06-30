import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Events from './Events';
import CTA from './CTA';
import Footer from './Footer';
import StandForSection from './StandForView';
import Team from './Team';
import Promoters from './Promoters';

const useStyles = makeStyles(() => ({
  root: {}
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
      id: '1',
      name: 'Anuj Garg',
      avatar: '/static/images/avatars/Anuj_garg.jpg',
      designation: 'Senior Mentor',
      description:
        'Google Summer of Code and Google Code-in Org Admin. Four years of experience of mentoring software developers. Famous for his unique way of teaching that imprints concepts. Love discussing aspects of Reinforcement Learning.'
    },
    {
      id: '2',
      name: 'Gaurav Beriwal',
      avatar: '/static/images/avatars/Gaurav_Beriwal.jpg',
      designation: 'Head of Management',
      description:
        'Gaurav has worked as a Co-founder and Founding Member of a tech startup and an internet-based service company, He has learned to bridge the gap across teams. He is Masters in Psychology and has been helping school kids as a Google Code-in mentor. Being a stage lover, he has represented in dozens of events and has been guiding youth alongside. Also, an analyst by passion.'
    },
    {
      id: '3',
      name: 'Kunal Kushwaha',
      avatar: '/static/images/avatars/kunal_kush.jpg',
      designation: 'Mentor',
      description:
        'Kunal is a super charged public speaker who loves to convey knowledge and is always up for a hot cup of Chai. He is a recognised mentor in Google Summer of Code, Google Code-In with JBoss Community. He is well versed in Java, Python, Web Development and Machine Learning. He loves to dwell in DevOps, Kubernetes, Cloud. He is Microsoft Student Partner and Python Mentor at AnitaB.org.'
    },
    {
      id: '4',
      name: 'Ganga Chaturvedi',
      avatar: '/static/images/avatars/kunal_kush.jpg',
      designation: 'Mentor',
      description:
        'Kunal is a super charged public speaker who loves to convey knowledge and is always up for a hot cup of Chai. He is a recognised mentor in Google Summer of Code, Google Code-In with JBoss Community. He is well versed in Java, Python, Web Development and Machine Learning. He loves to dwell in DevOps, Kubernetes, Cloud. He is Microsoft Student Partner and Python Mentor at AnitaB.org.'
    },
    {
      id: '5',
      name: 'Ekta Mishra',
      avatar: '/static/images/avatars/kunal_kush.jpg',
      designation: 'Mentor',
      description:
        'Kunal is a super charged public speaker who loves to convey knowledge and is always up for a hot cup of Chai. He is a recognised mentor in Google Summer of Code, Google Code-In with JBoss Community. He is well versed in Java, Python, Web Development and Machine Learning. He loves to dwell in DevOps, Kubernetes, Cloud. He is Microsoft Student Partner and Python Mentor at AnitaB.org.'
    },
    {
      id: '6',
      name: 'Bharat Bhardwaj',
      avatar: '/static/images/avatars/kunal_kush.jpg',
      designation: 'Mentor',
      description:
        'Kunal is a super charged public speaker who loves to convey knowledge and is always up for a hot cup of Chai. He is a recognised mentor in Google Summer of Code, Google Code-In with JBoss Community. He is well versed in Java, Python, Web Development and Machine Learning. He loves to dwell in DevOps, Kubernetes, Cloud. He is Microsoft Student Partner and Python Mentor at AnitaB.org.'
    }
  ];

  return (
    <Page className={classes.root} title="Code for Cause">
      <Hero />
      <Promoters />
      <Events />
      <StandForSection />
      <Team mentors={mentors} />
      <CTA />
      <Footer footerInfo={footerInfo} />
    </Page>
  );
}

export default HomeView;
