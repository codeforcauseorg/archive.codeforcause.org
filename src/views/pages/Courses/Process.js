import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import ProcessSteppers from './ProcessSteppers';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 10, 10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 0, 10),
    },
    color: '#000000'
  },
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
          Application Process for Selection
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
