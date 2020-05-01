import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import clsx from 'clsx';
import { Typography, makeStyles } from '@material-ui/core';
import Activity from './Activity';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    marginBottom: theme.spacing(3)
  },
  group: {
    '& + &': {
      marginTop: theme.spacing(4)
    }
  },
  activity: {
    position: 'relative',
    '& + &': {
      marginTop: theme.spacing(3),
      '&:before': {
        position: 'absolute',
        content: '" "',
        height: 20,
        width: 1,
        top: -20,
        left: 20,
        backgroundColor: theme.palette.divider
      }
    }
  }
}));

function Activities({ activities, className, ...rest }) {
  const classes = useStyles();
  const todayItems = [];
  const lastWeekItems = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const activity of activities) {
    if (moment(activity.createdAt).isSame(moment(), 'day')) {
      todayItems.push(activity);
    } else {
      lastWeekItems.push(activity);
    }
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Typography
        className={classes.title}
        variant="h3"
        color="textPrimary"
      >
        Today
      </Typography>
      <div className={classes.group}>
        {todayItems.map((activity) => (
          <Activity
            activity={activity}
            className={classes.activity}
            key={activity.id}
          />
        ))}
      </div>
      <div className={classes.group}>
        <Typography
          className={classes.title}
          variant="h3"
          color="textPrimary"
        >
          Last week
        </Typography>
        {lastWeekItems.map((activity) => (
          <Activity
            activity={activity}
            className={classes.activity}
            key={activity.id}
          />
        ))}
      </div>
    </div>
  );
}

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default Activities;
