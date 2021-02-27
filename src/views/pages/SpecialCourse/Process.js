import { Container, makeStyles, Typography, Grid } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import ProcessSteppers from './ProcessSteppers';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(20, 10, 17),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(14, 0, 10)
    },
    color: '#000000'
  }
}));

function Process({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          style={{ color: '#ffffff' }}
          variant="h1"
          align="center"
          gutterBottom
        >
          Offering 90% Scholarship On this Batch
        </Typography>

        <Typography
          style={{ marginTop: '32px', color: '#ffffff' }}
          variant="h4"
          align="center"
          gutterBottom
        >
          Application Process To Get Shortlisted
        </Typography>
        <Grid container component="dl" style={{ padding: '20px 0px 20px' }}>
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
