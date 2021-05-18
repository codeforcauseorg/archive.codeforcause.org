/* eslint-disable linebreak-style */
import { makeStyles } from '@material-ui/core';
import React from 'react';
import Page from 'src/components/Page';
import Footer from '../../common/Footer';
import Recommendations from '../../common/Recommendations';
import FAQ from '../FAQ';
import FinalAction from '../FinalAction';
import Major from '../Major';
import Schedule from '../Schedule';
import HeadBanner from '../HeadBanner';
const useStyles = makeStyles(() => ({
  root: {
    overflowX: 'hidden'
  }
}));

function CoursePage({ course }) {
  const batch = course.schedule[course.default];

  const classes = useStyles();

  return (
    <Page className={classes.root} title={course.title}>
      <HeadBanner banner={course.banner}/>
      <Major course={course} />
      <Schedule course={course} />
      <Recommendations />
      <FinalAction course={course} batch={batch} />
      <FAQ course={course} />
      <Footer />
    </Page>
  );
}

export default CoursePage;
