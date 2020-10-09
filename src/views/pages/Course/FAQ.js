import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import { FAQuestions } from './partials/FAQuestions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 10, 10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10)
    },
    color: '#000000'
  }
}));

function FAQ({ course, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Grid container component="dl" style={{ padding: '20px 0px 20px' }}>
          <FAQuestions course={course} />
        </Grid>
      </Container>
    </div>
  );
}

FAQ.propTypes = {
  className: PropTypes.string
};

export default FAQ;
