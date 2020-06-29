import React from 'react';
import { makeStyles } from '@material-ui/core';
import WhatWeStandFor from './WhatWeStandFor';
import MainCards from './MainCards';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#350070'
  }
}));

const StandForSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {' '}
      <WhatWeStandFor />
      <MainCards />
    </div>
  );
};

export default StandForSection;
