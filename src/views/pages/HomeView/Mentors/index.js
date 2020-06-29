import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Grid,
  makeStyles,
  Typography,
  Box,
  Container
} from '@material-ui/core';
import MentorCard from './MentorCard';

const useStyles = makeStyles(() => ({
  root: {},
  extraMargin: {
    marginTop: '40px'
  }
}));

function Mentors({ mentors, className, ...rest }) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.extraMargin}>
      <Typography variant="h1" align="center" color="textPrimary">
        Our Team
      </Typography>
      <Box mt={4} className={classes.boxPadding}>
        <Grid
          className={clsx(classes.root, className)}
          container
          spacing={3}
          {...rest}
        >
          {mentors.map(mentor => (
            <Grid item key={mentor.id} lg={4} md={6} sm={6} xs={12}>
              <MentorCard mentor={mentor} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

Mentors.propTypes = {
  className: PropTypes.string,
  mentors: PropTypes.array.isRequired
};

export default Mentors;
