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
      linkedin: 'https://www.linkedin.com/in/keenwarrior/'
    },
    {
      id: '2',
      name: 'Gaurav Beriwal',
      avatar: '/static/images/avatars/Gaurav_Beriwal.jpg',
      linkedin: 'https://www.linkedin.com/in/gauravberiwal/'
    },
    {
      id: '3',
      name: 'Kunal Kushwaha',
      avatar: '/static/images/avatars/kunal_kush.jpg',
      linkedin: 'https://www.linkedin.com/in/kunal-kushwaha/'
    },
    {
      id: '4',
      name: 'Ganga Chaturvedi',
      avatar: '/static/images/avatars/kunal_kush.jpg',
      linkedin: 'https://www.linkedin.com/in/gangachatrvedi/'
    },
    {
      id: '5',
      name: 'Ekta Mishra',
      avatar: '/static/images/avatars/kunal_kush.jpg',
      linkedin: 'https://www.linkedin.com/in/darecoder/'
    },
    {
      id: '6',
      name: 'Bharat Bhardwaj',
      avatar: '/static/images/avatars/kunal_kush.jpg',
      linkedin: 'https://www.linkedin.com/in/bharatbbhardwaj/'
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
