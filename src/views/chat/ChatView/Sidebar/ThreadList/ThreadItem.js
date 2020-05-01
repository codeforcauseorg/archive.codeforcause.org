import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Chip,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import { useSelector } from 'react-redux';

function contactSelector(state, thread, userId) {
  const { contacts } = state.chat;
  const contactId = thread.participantIds.filter((participantId) => participantId !== userId)[0];

  return contacts.byId[contactId];
}

const useStyles = makeStyles((theme) => ({
  active: {
    boxShadow: `inset 4px 0px 0px ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.action.active
  },
  avatar: {
    height: 40,
    width: 40
  },
  unreadIndicator: {
    marginTop: 2,
    padding: 2,
    height: 18,
    minWidth: 18
  }
}));

function ThreadItem({
  active,
  thread,
  className,
  ...rest
}) {
  const classes = useStyles();
  const { user } = useSelector((state) => state.account);
  const contact = useSelector((state) => contactSelector(state, thread, user.id));

  const lastMessage = thread.messages[thread.messages.length - 1];
  const lastMessageInfo = lastMessage ? `${lastMessage.senderId === user.id ? 'Me:' : ''} ${lastMessage.contentType === 'image' ? 'Sent a photo' : lastMessage.body}` : '';

  return (
    <ListItem
      button
      className={clsx(
        {
          [classes.active]: active
        },
        className
      )}
      component={RouterLink}
      to={`/app/chat/${thread.key}`}
      {...rest}
    >
      <ListItemAvatar>
        <Avatar
          alt="Person"
          className={classes.avatar}
          src={contact.avatar}
        />
      </ListItemAvatar>
      <ListItemText
        primary={contact.name}
        primaryTypographyProps={{
          noWrap: true,
          variant: 'h6',
          color: 'textPrimary'
        }}
        secondary={lastMessageInfo}
        secondaryTypographyProps={{
          noWrap: true,
          variant: 'body2',
          color: 'textSecondary'
        }}
      />
      <Box
        ml={2}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
      >
        {thread.unreadCount > 0 && (
          <Chip
            className={classes.unreadIndicator}
            color="secondary"
            size="small"
            label={thread.unreadCount}
          />
        )}
      </Box>
    </ListItem>
  );
}

ThreadItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  thread: PropTypes.object.isRequired
};

ThreadItem.defaultProps = {
  active: false,
  className: ''
};

export default ThreadItem;
