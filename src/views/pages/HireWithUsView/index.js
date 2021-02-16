import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Hero from './Hero';
import Developer from './Developer/Developer';
import Footer from '../common/Footer';
import Philosphy from './Philosphy/Philosphy';
import Major from './Major/Major';
// import CTA from './CTA';
// import Apply from '../common/Apply';

const useStyles = makeStyles(() => ({
  root: {}
}));

function HireWithUsView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Hire With Us">
      <Hero />

      <Developer />
      <Philosphy />
      <Major />
      <Footer />
    </Page>
  );
}

export default HireWithUsView;
