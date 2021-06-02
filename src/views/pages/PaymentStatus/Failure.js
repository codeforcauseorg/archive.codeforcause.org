import { makeStyles, Typography, Link } from '@material-ui/core';
import React from 'react';
import CustomButton from '../../../components/Button/ButtonComponent';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    marginTop: '30vh',
    textAlign: 'center',
    color: '#000',
    padding: theme.spacing(5)
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
        <Typography align="center">
          Your last payment to codeforcause was Failed. You can retry the
          payment from the course website.
        </Typography>
        <Typography align="center">
          Connect with us at {` `}
          <Link href="mailto:team@codeforcause.org">team@codeforcause.org</Link>
          {` `}or{` `}
          <Link href="tel:+918882434509">+91 88824 34509</Link>
          {` `} in case of any help.
        </Typography>
        <CustomButton
          className={classes.button}
          title="Go Back To Homepage"
          href="/"
        />
      </div>
    );
  }
}
