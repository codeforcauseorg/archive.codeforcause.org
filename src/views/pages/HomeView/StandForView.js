import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import WhatWeStandFor from './WhatWeStandFor';
import MainCards from './MainCards';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#350070'
  },
  extraPadding: {
    
  }
}));

const StandForSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      { ' ' }
      <WhatWeStandFor className={classes.extraPadding} />
      <MainCards className={classes.extraPadding} />
    </div>
  );
};

export default StandForSection;
