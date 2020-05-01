import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import OverallReviews from './OverallReviews';
import ReviewCard from './ReviewCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  review: {
    marginTop: theme.spacing(2)
  }
}));

function Reviews({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [reviews, setReviews] = useState(null);

  const getReviews = useCallback(() => {
    if (isMountedRef.current) {
      axios
        .get('/api/social/users/1/reviews')
        .then((response) => setReviews(response.data.reviews));
    }
  }, [isMountedRef]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  if (!reviews) {
    return null;
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <OverallReviews ratings={reviews.map((review) => review.rating)} />
      {reviews.map((review) => (
        <ReviewCard
          className={classes.review}
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
}

Reviews.propTypes = {
  className: PropTypes.string
};

export default Reviews;
