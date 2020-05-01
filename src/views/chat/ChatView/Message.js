import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { Lightbox } from 'react-modal-image';
import {
  Avatar,
  Box,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';

function senderSelector(state, senderId) {
  const { user } = state.account;
  const { contacts } = state.chat;

  if (senderId !== user.id) {
    const contact = contacts.byId[senderId];

    return {
      avatar: contact.avatar,
      name: contact.name,
      type: 'contact'
    };
  }

  return {
    avatar: user.avatar,
    name: 'Me',
    type: 'user'
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    display: 'flex'
  },
  avatar: {
    height: 32,
    width: 32
  },
  image: {
    cursor: 'pointer',
    height: 'auto',
    maxWidth: '100%',
    width: 380
  }
}));

function Message({
  className,
  message,
  ...rest
}) {
  const classes = useStyles();
  const [openedFile, setOpenedFile] = useState(null);
  const sender = useSelector((state) => senderSelector(state, message.senderId));

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        maxWidth={500}
        ml={sender.type === 'user' ? 'auto' : 0}
      >
        <Avatar
          className={classes.avatar}
          src={sender.avatar}
        />
        <Box ml={2}>
          <Box
            bgcolor={sender.type === 'user' ? 'secondary.main' : 'background.default'}
            color={sender.type === 'user' ? 'secondary.contrastText' : 'text.primary'}
            py={1}
            px={2}
            borderRadius="borderRadius"
            boxShadow={1}
          >
            <Link
              color="inherit"
              component={RouterLink}
              to="#"
              variant="h6"
            >
              {sender.name}
            </Link>
            <Box mt={1}>
              {message.contentType === 'image' ? (
                <Box
                  mt={2}
                  onClick={() => setOpenedFile(message.body)}
                >
                  <img
                    alt="Attachment"
                    className={classes.image}
                    src={message.body}
                  />
                </Box>
              ) : (
                <Typography
                  color="inherit"
                  variant="body1"
                >
                  {message.body}
                </Typography>
              )}
            </Box>
          </Box>
          <Box
            mt={1}
            display="flex"
            justifyContent="flex-end"
          >
            <Typography
              noWrap
              color="textSecondary"
              variant="caption"
            >
              {moment(message.createdAt).fromNow()}
            </Typography>
          </Box>
        </Box>
      </Box>
      {openedFile && (
        <Lightbox
          large={openedFile}
          onClose={() => setOpenedFile(null)}
        />
      )}
    </div>
  );
}

Message.propTypes = {
  className: PropTypes.string,
  message: PropTypes.object.isRequired
};

export default Message;
