/* eslint-disable linebreak-style */
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Page from 'src/components/Page';
import Footer from '../../common/Footer';
import Recommendations from '../../common/Recommendations';
import CTA from '../CTA';
import FAQ from '../FAQ';
import Features from '../Features';
import FinalAction from '../FinalAction';
import Major from '../Major';
// import Process from '../Process';
import Schedule from '../Schedule';
// import SpecialHeader from '../specialDis';
// import CourseFeatures from '../partials/CourseFeatures';

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden'
  }
}));

function CoursePage({ course }) {
  const batch = course.schedule[0];

  const classes = useStyles();

  return (
    <Page className={classes.root} title={course.title}>
      {/* <AutoPopup /> */}
      {/* <SpecialHeader event={course.events} /> */}
      <Major course={course} />
      {/* <CourseFeatures /> */}
      {/* <Process /> */}
      <Schedule course={course} />
      <Features />
      <Recommendations />
      <FinalAction course={course} batch={batch} />
      <FAQ course={course} />
      <CTA />
      <Footer />
    </Page>
  );
}

export default CoursePage;
