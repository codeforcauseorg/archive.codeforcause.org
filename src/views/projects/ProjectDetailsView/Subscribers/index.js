import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, makeStyles } from '@material-ui/core';
import SubscriberCard from './SubscriberCard';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Subscribers({ subscribers, className, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      {subscribers.map((subscriber) => (
        <Grid
          item
          key={subscriber.id}
          lg={4}
          xs={12}
        >
          <SubscriberCard subscriber={subscriber} />
        </Grid>
      ))}
    </Grid>
  );
}

Subscribers.propTypes = {
  className: PropTypes.string,
  subscribers: PropTypes.array.isRequired
};

export default Subscribers;
