import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 125
  },
  content: {
    paddingTop: 0
  },
  avatar: {
    height: 64,
    width: 64
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

function SubscriberCard({ subscriber, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardMedia
        className={classes.media}
        image={subscriber.cover}
      />
      <CardContent className={classes.content}>
        <Box
          mt={-4}
          mb={2}
          display="flex"
          justifyContent="center"
        >
          <Avatar
            alt="Subscriber"
            className={classes.avatar}
            component={RouterLink}
            src={subscriber.avatar}
            to="#"
          />
        </Box>
        <Link
          align="center"
          color="textPrimary"
          component={RouterLink}
          display="block"
          to="#"
          underline="none"
          variant="h6"
        >
          {subscriber.name}
        </Link>
        <Typography
          align="center"
          variant="body2"
          color="textSecondary"
        >
          {subscriber.commonContacts}
          {' '}
          contacts in common
        </Typography>
        <Box my={2}>
          <Divider />
        </Box>
        {subscriber.labels.map((label) => (
          <Chip
            key={label}
            className={classes.chip}
            label={label}
            variant="outlined"
          />
        ))}
      </CardContent>
    </Card>
  );
}

SubscriberCard.propTypes = {
  className: PropTypes.string,
  subscriber: PropTypes.object.isRequired
};

export default SubscriberCard;
