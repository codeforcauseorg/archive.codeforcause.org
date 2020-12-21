import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Redirect } from 'react-router';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '49vh'
  }
}));

export default function Success() {
  const classes = useStyles();

  const [wait, removeWait] = React.useState(true);

  setTimeout(
    function () {
      removeWait(false);
    }, 
  7000)

  if (wait) {
    return (
      <div className={classes.root}>
        <Typography align="center">Your last payment to codeforcause was successful. We will connect you within 24 hours for further details.</Typography>
        <Typography align="center">Connect with us is case of any doubt.</Typography>
        <Typography align="center">Redirecting to home page...</Typography>
      </div>
    );
  }

  return (
    <Redirect to="/" />
  )
}
