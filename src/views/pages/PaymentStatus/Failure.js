import { makeStyles, Typography, Link } from '@material-ui/core';
import React from 'react';
import CustomButton from '../../../components/Button/ButtonComponent'

const useStyles = makeStyles((theme) => ({
  root: {    
    marginTop: '35vh',
    textAlign: 'center',
    color: theme.palette.text
  },
  button: {
    marginTop: '40px'
  }
}));

export default function Success() {
  const classes = useStyles();

  if (true) {
    return (
      <div className={classes.root}>
        <Typography align="center">Your last payment to codeforcause was Failed. You can retry the payment on the course website.</Typography>
        <Typography align="center">Connect with us at {` `}
          <Link
            href="mailto:team@codeforcause.org"
          >team@codeforcause.org</Link>
          {` `}or{` `}
          <Link
            href="tel:+919810468685"
          >+91 98104 68685</Link>

          {` `} in case of any help.</Typography>
        <CustomButton className={classes.button} title="Go Back To Homepage" href="/" />
      </div>
    );
  }
}
