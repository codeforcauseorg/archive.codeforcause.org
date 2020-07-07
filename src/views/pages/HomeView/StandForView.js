import React from 'react';
import { makeStyles } from '@material-ui/core';
import WhatWeStandFor from './WhatWeStandFor';
import MainCards from './MainCards';

const background = 'linear-gradient(180deg, #180254 0%, #0D012F 100%)';

const useStyles = makeStyles(theme => ({
  root: {
    background,
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15,
      paddingRight: 17
    }
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
