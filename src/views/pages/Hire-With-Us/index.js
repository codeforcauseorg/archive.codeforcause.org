import React from 'react';
import TopMain from './TopMain';
import Developer from '../HireWithUsView/Developer/Developer';
import HireAtEase from './HireAtEase';
import Major from '../HireWithUsView/Major/Major';
import Philosphy from '../HireWithUsView/Philosphy/Philosphy';
import Footer from '../common/Footer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden'
  }
}));

function HIRE_WITH_US() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopMain />

      <Developer />
      <HireAtEase />
      <Philosphy />
      <Major />
      <Footer />
    </div>
  );
}

export default HIRE_WITH_US;
