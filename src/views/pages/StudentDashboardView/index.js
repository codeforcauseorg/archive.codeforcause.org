import React from 'react';
import Page from 'src/components/Page';

import Hero from './Hero';
import MainTab from './TabsView';
import Recommendations from './RecommendedForYou';
import Footer from '../common/Footer';
import { Hidden, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  hr: {
    margin: '60px auto 10px',
    width: '80%',
    color: '#898989, 50%'
  }
}));

function StudentDashboardView() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="My Dashboard">
      <Hero />
      <MainTab />
      <Hidden mdDown>
        <hr className={classes.hr} />
      </Hidden>
      <Recommendations />
      <Footer />
    </Page>
  );
}

export default StudentDashboardView;
