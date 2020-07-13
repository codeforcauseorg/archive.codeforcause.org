import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import ExperienceCard from './ExperienceCard';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F2F7FF',
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

function MentorExperience({ experience, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" style={{ color: '#A60000' }}>
          Experienced Mentors
        </Typography>
        <Typography
          style={{ marginTop: '10px' }}
          variant="h2"
          align="center"
          gutterBottom
          color="textPrimary"
        >
          Learn from the Best!
        </Typography>
        <Grid container component="dl" style={{ padding: '20px' }}>
          {experience.map((exp, i) => (
            <Grid
              item
              key={i}
              md={3}
              sm={3}
              xs={6}
              className={classes.centerPadding}
            >
              <ExperienceCard exp={exp} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

MentorExperience.propTypes = {
  className: PropTypes.string
};

export default MentorExperience;
