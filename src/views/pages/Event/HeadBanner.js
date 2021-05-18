import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  headBanner: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '150%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '450%'
    }
  }
}));

function HeadBanner({ banner }) {
  const classes = useStyles();

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      textAlign: "center"
    }}>
      <img alt="banner" className={classes.headBanner} src={banner.path} />
    </div>
  );
}

export default HeadBanner;
