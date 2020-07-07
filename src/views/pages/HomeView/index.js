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
import MentorExperience from './MentorExperience';
import WatchOurVideoView from './WatchVideos';

const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  const experience = [
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
      title: 'Contributers'
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
      <MentorExperience experience={experience} />
      <StandForSection />
      <Team mentors={mentors} />
      <WatchOurVideoView />
      <CTA />
      <Footer />
    </Page>
  );
}

export default HomeView;
