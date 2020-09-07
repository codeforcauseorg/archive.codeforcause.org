import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Footer from '../common/Footer';
import CTA from './CTA';
import Courses from './Courses';
import Apply from './Apply';

const useStyles = makeStyles(() => ({
  root: {}
}));

function EventsView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Campus Leaders">
      <Hero />
      <Courses />
      <Apply />
      <CTA />
      <Footer />
    </Page>
  );
}

export default EventsView;
