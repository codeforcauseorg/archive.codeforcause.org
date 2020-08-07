import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import StandFor from './StandFor';

const useStyles = makeStyles(() => ({
  root: {}
}));

function HomeView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Campus Leaders">
      <Hero />
      <StandFor />
    </Page>
  );
}

export default HomeView;
