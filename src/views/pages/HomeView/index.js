import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Events from './Events';
import CTA from './CTA';
import Footer from '../common/Footer';
import StandForSection from './StandForView';
import Team from './Team';
import Promoters from './Promoters';
import MentorExperience from './MentorExperience';
import WatchOurVideoView from './WatchVideos';
import { experience, /*students,*/ mentors } from './HomeViewData';

// import Testimonials from './Testimonials/index';

const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Code for Cause">
      <Hero />
      <Promoters />
      <Events id="events" />
      <MentorExperience experience={experience} />
      <StandForSection id="about" />
      {/* <Testimonials students={students} /> */}
      <Team id="team" mentors={mentors} />
      <WatchOurVideoView />
      <CTA id="actions" />
      <Footer />
    </Page>
  );
}

export default HomeView;
