import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';

import TestimonialCard from './TestimonialCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: theme.spacing(10),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('xs')]: {
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
        <Grid container spacing={2} component="div">
          {students.map((student, i) => (
            <Grid item key={i} md={3} sm={6} xs={12}>
              <TestimonialCard student={student} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

Testimonials.propTypes = {
  students: PropTypes.array.isRequired
};

export default Testimonials;
