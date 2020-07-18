import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';

import TestimonialCard from './TestimonialCard';

const useStyles = makeStyles(theme=>({
  root: {
    backgroundColor: 'white',
    padding: theme.spacing(10),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  }
}));
const Testimonials = ({ students }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ color: '#A60000' }}>
          Testimonials
        </Typography>
        <Typography
          style={{ marginTop: '10px' }}
          variant="h2"
          align="center"
          gutterBottom
          color="textPrimary"
        >
          What do our Mentees Say About Us
        </Typography>
        <Grid container component="dl" style={{ padding: '20px' }}>
          {students.map((student, i) => (
            <Grid item key={i} md={3} sm={3} xs={6}>
              <TestimonialCard student={student} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Testimonials;
