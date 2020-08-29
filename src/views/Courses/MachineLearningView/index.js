import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Footer from '../../pages/common/Footer';

const useStyles = makeStyles(() => ({
  root: {}
}));

function CoursesView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Courses">
      <Hero />
      <Footer />
    </Page>
  );
}

export default CoursesView;
