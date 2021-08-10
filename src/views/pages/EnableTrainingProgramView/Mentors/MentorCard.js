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

const useStyles = makeStyles(theme => ({
  root: {},
  media: {
    height: 125
  },
  content: {
    paddingTop: 0
  },
  avatar: {
    height: 144,
    width: 144
  },
  chip: {
    margin: theme.spacing(0.5)
  }
}));

function MentorCard({ mentor, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardMedia className={classes.media} image={mentor.cover} />
      <CardContent className={classes.content}>
        <Box mt={-9} mb={2} display="flex" justifyContent="center">
          <Avatar
            alt="Mentor"
            className={classes.avatar}
            component={RouterLink}
            src={mentor.avatar}
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
          {mentor.name}
        </Link>
        <Typography align="center" variant="body2" color="textSecondary">
          {mentor.designation}{' '}
        </Typography>
        <Box my={2}>
          <Divider />
        </Box>
        <Typography variant="body2" color="textPrimary">
          {mentor.skills.map(skill => (
            <Chip
              key={skill}
              className={classes.chip}
              label={skill}
              variant="outlined"
            />
          ))}
          {/* {`${mentor.profile}`} */}
        </Typography>
      </CardContent>
    </Card>
  );
}

MentorCard.propTypes = {
  className: PropTypes.string,
  mentor: PropTypes.object.isRequired
};

export default MentorCard;
