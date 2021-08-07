import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Sponsors from './Sponsors';
import Footer from '../common/Footer';
import CourseDetails from './CourseDetails';
import AboutETP from './AboutETP';
import FAQ from './FAQ';
import Features from './Features';
import TimeLine from './TimeLine';

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden'
  }
}));

function EnableTrainingProgramView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Code for Cause">
      <Hero />
      <AboutETP />
      <CourseDetails/>
      <TimeLine/>
      <FAQ/>
      <Features/>
      <Sponsors id="actions" />
      <Footer />
    </Page>
  );
}

export default EnableTrainingProgramView;
