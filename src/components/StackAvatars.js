import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Tooltip,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingLeft: 20
  },
  avatar: {
    border: `3px solid ${theme.palette.background.default}`,
    marginLeft: -20,
    '&:hover': {
      zIndex: 2
    }
  },
  more: {
    backgroundColor: colors.red[600],
    color: colors.common.white
  }
}));

function StackAvatars({
  avatars,
  limit,
  className,
  ...rest
}) {
  const classes = useStyles();
  let lastIndex = 0;

  const avatarNodes = avatars.slice(0, limit).map((item) => (
    <Tooltip
      key={++lastIndex}
      title="View"
    >
      <Avatar
        className={classes.avatar}
        src={item}
      />
    </Tooltip>
  ));

  if (avatars.length > limit) {
    avatarNodes.push(
      <Avatar
        key={++lastIndex}
        className={clsx(classes.avatar, classes.more)}
      >
        <Typography
          color="inherit"
          variant="subtitle2"
        >
          +
          {avatars.length - limit}
        </Typography>
      </Avatar>
    );
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {avatarNodes}
    </div>
  );
}

StackAvatars.propTypes = {
  avatars: PropTypes.array,
  className: PropTypes.string,
  limit: PropTypes.number
};

StackAvatars.defaultProps = {
  avatars: [],
  limit: 3
};

export default memo(StackAvatars);
