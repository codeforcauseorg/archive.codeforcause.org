import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Events from './Events';
import CTA from './CTA';
import Footer from '../common/Footer';
import StandForSection from './AboutUs/AboutUsView/StandForView';
import Team from './AboutUs/OurTeam/Team';
import Promoters from './Promoters';
import MentorExperience from './MentorExperience';
import WatchOurVideoView from './WatchVideos';
import {
  experience,
  /*students,*/ mentors
} from '../../../data/HomeViewData/HomeViewData';

import Courses from './Courses';

import Recommendations from '../common/Recommendations';
import Promo from './Promo';

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden'
  }
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Code for Cause">
      <Hero />
      <Promoters />
      <Promo />
      <Events id="events" />
      <MentorExperience experience={experience} />
      <StandForSection id="about" />
      <Courses />
      <Recommendations />
      <Team id="team" mentors={mentors} />
      <WatchOurVideoView />
      <CTA id="actions" />
      <Footer />
    </Page>
  );
}

export default HomeView;
