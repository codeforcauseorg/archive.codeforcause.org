import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import StandFor from './StandFor';
import CLBenefits from './CLBenefits';
import { benefits } from './CLViewData';
import Footer from '../common/Footer';
import Process from './Process';
import CTA from './CTA';
import Apply from './Apply';

const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Campus Leaders">
      <Hero />
      <StandFor />
      <CLBenefits benefits={benefits} />
      <Process />
      <Apply />
      <CTA />
      <Footer />
    </Page>
  );
}

export default HomeView;
