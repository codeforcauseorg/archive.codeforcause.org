import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
// import Hero from './Hero';
import Footer from '../common/Footer';
import CTA from './CTA';
import Courses from './Courses';
import Apply from '../common/Apply';
import Banner from '../../../components/Banner';
import Recommendations from '../common/Recommendations';

const useStyles = makeStyles(() => ({
  root: {}
}));

function CoursesView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Courses">
      <Banner />
      {/* <Hero /> */}
      <Courses />
      <Recommendations />
      <Apply />
      <CTA />
      <Footer />
    </Page>
  );
}

export default CoursesView;
