import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../common/Footer';
import Recommendations from '../../common/Recommendations';
import FAQ from '../FAQ';
import CTA from '../CTA';
import FinalAction from '../FinalAction';
import Schedule from '../Schedule';
import Major from '../Major';
import Features from '../Features';
import Process from '../Process';
import Header from '../Header';
// import CourseFeatures from '../partials/CourseFeatures';

const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden'
  }
}));

function SpecialCoursePage({ course }) {
  const batch = course.schedule[0];

  const classes = useStyles();

  return (
    <Page className={classes.root} title={course.title}>
      <Header course={course} />
      <Major course={course} />
      {/* <CourseFeatures /> */}
      {course.active ? <Process course={course} /> : undefined}
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

export default SpecialCoursePage;
