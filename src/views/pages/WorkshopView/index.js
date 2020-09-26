import React from 'react';
import Hero from './Hero';
import Footer from '../common/Footer';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import AboutWorkShop from './AboutWorkshops';
import Form from './Form';
const useStyles = makeStyles(() => ({
  root: {}
}));

function WorkshopView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Courses">
      <Hero />
      <AboutWorkShop />
      <Form />
      <Footer />
    </Page>
  );
}

export default WorkshopView;
