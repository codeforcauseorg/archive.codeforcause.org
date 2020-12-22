import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Footer from '../common/Footer';
import CTA from '../../../components/CTA/CTA';
import Courses from './Courses';
import Apply from '../common/Apply';

const useStyles = makeStyles(() => ({
  root: {}
}));

function CoursesView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Courses">
      <Hero />
      <Courses />
      <Apply />
      <CTA />
      <Footer />
    </Page>
  );
}

export default CoursesView;
