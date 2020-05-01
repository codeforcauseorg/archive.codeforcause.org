import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {},
  rating: {
    marginLeft: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold
  }
}));

function OverallReviews({ ratings, className, ...rest }) {
  const classes = useStyles();
  let rating = 0;

  if (ratings.length > 0) {
    rating = ratings.reduce((prev, current) => prev + current, 0) / ratings.length;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          alignItems="center"
          container
          spacing={3}
        >
          <Grid item>
            <Typography
              variant="h5"
              color="textPrimary"
            >
              Overall Reviews
            </Typography>
          </Grid>
          <Grid item>
            <Box
              display="flex"
              alignItems="center"
            >
              <Rating value={rating} />
              <Typography
                className={classes.rating}
                variant="h6"
                color="textPrimary"
              >
                {rating}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography
              className={classes.total}
              color="textSecondary"
              variant="body2"
            >
              {ratings.length}
              {' '}
              reviews in total
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

OverallReviews.propTypes = {
  className: PropTypes.string,
  ratings: PropTypes.array.isRequired
};

export default OverallReviews;
