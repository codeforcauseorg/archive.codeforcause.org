import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Footer from '../../common/Footer';
import Recommendations from '../../common/Recommendations';
import FAQ from '../FAQ';
import CTA from '../CTA';
import FinalAction from '../FinalAction';
import Schedule from '../Schedule';
import coursesContent from 'src/data/courses';
import Major from '../Major';
import Features from '../Features';
import Process from '../Process';

const foundation = coursesContent.foundation;
const course = foundation.algoPython;
const batch = course.schedule[0];

const useStyles = makeStyles(() => ({
  root: {}
}));

function CoursesView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title={course.title}>
      <Major course={course} />
      {/* <CourseRecommendations /> */}
      <Process />
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

export default CoursesView;
