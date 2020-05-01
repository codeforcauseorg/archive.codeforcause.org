import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Grid,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import getInitials from 'src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  rating: {
    marginLeft: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold
  }
}));

function ReviewCard({ review, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        avatar={(
          <Avatar
            alt="Reviewer"
            className={classes.avatar}
            src={review.reviewer.avatar}
          >
            {getInitials(review.reviewer.name)}
          </Avatar>
        )}
        disableTypography
        subheader={(
          <Box
            flexWrap="wrap"
            display="flex"
            alignItems="center"
          >
            <Box
              display="flex"
              alignItems="center"
              mr={1}
            >
              <Rating value={review.rating} />
              <Typography
                className={classes.rating}
                variant="h6"
              >
                {review.rating}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              | Reviewd by
              {' '}
              <Link
                color="textPrimary"
                component={RouterLink}
                to="#"
                variant="h6"
              >
                {review.reviewer.name}
              </Link>
              {' '}
              |
              {' '}
              {moment(review.createdAt).fromNow()}
            </Typography>
          </Box>
        )}
        title={(
          <Link
            color="textPrimary"
            component={RouterLink}
            to="#"
            variant="h5"
          >
            {review.project.title}
          </Link>
        )}
      />
      <Box
        pb={2}
        px={3}
      >
        <Typography
          variant="body2"
          color="textSecondary"
        >
          {review.message}
        </Typography>
      </Box>
      <Divider />
      <Box
        py={2}
        px={3}
      >
        <Grid
          alignItems="center"
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              variant="h5"
              color="textPrimary"
            >
              {review.currency}
              {review.project.price}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              Project price
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              color="textPrimary"
            >
              {review.currency}
              {review.pricePerHour}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              Per project
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              color="textPrimary"
            >
              {review.hours}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              Hours
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

ReviewCard.propTypes = {
  className: PropTypes.string,
  review: PropTypes.object.isRequired
};

export default ReviewCard;
