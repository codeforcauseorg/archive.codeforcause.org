import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import ProcessSteppers from './ProcessSteppers';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    },
    color: '#000000'
  },
  centerPadding: {
    padding: 30,
    [theme.breakpoints.down('md')]: {
      padding: 15
    }
  }
}));

function Process({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          style={{ marginTop: '10px' }}
          variant="h2"
          align="center"
          gutterBottom
        >
          How to become Campus Leader
        </Typography>
        <Grid container component="dl" style={{ padding: '20px' }}>
          <ProcessSteppers />
        </Grid>
      </Container>
    </div>
  );
}

Process.propTypes = {
  className: PropTypes.string
};

export default Process;
