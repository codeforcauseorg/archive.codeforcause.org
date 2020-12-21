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
  5000)

  if (wait) {
    return (
      <div className={classes.root}>
        <Typography align="center">Your last payment to codeforcause was successful. Redirecting to home page...</Typography>
      </div>
    );
  }

  return (
    <Redirect to="/" />
  )
}
