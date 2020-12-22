import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Footer from '../common/Footer';
import CTA from '../../../components/CTA/CTA';
import Events from './Events';
import Apply from '../common/Apply';

const useStyles = makeStyles(() => ({
  root: {}
}));

function EventsView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Events">
      <Hero />
      <Events />
      <Apply />
      <CTA />
      <Footer />
    </Page>
  );
}

export default EventsView;
