import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import Markdown from 'react-markdown/with-html';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Link,
  Tooltip,
  Typography,
  makeStyles,
  Hidden
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';
import ReplyAllIcon from '@material-ui/icons/ReplyAllOutlined';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import getInitials from 'src/utils/getInitials';
import { getMail } from 'src/actions/mailActions';
import Toolbar from './Toolbar';
import MailReply from './MailReply';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    overflowY: 'auto'
  },
  avatar: {
    height: 56,
    width: 56
  },
  date: {
    whiteSpace: 'nowrap'
  },
  message: {
    color: theme.palette.text.secondary,
    '& > p': {
      ...theme.typography.body1,
      marginBottom: theme.spacing(2)
    }
  }
}));

function MailDetails() {
  const classes = useStyles();
  const { mailId } = useParams();
  const dispatch = useDispatch();
  const mail = useSelector((state) => state.mail.mails.byId[mailId]);

  useEffect(() => {
    dispatch(getMail(mailId));
  }, [dispatch, mailId]);

  if (!mail) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Toolbar />
      <Divider />
      <Box
        p={3}
        display="flex"
        justifyContent="space-between"
        flexShrink={0}
      >
        <Box
          display="flex"
          alignItems="center"
        >
          <Avatar
            className={classes.avatar}
            src={mail.from.avatar}
          >
            {getInitials(mail.from.name)}
          </Avatar>
          <Box ml={2}>
            <Typography
              display="inline"
              variant="h5"
              color="textPrimary"
            >
              {mail.from.name}
            </Typography>
            {' '}
            <Link
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {mail.from.email}
            </Link>
            <Typography
              variant="subtitle2"
              color="textSecondary"
            >
              To:
              {' '}
              {mail.to.map((person) => (
                <Link
                  color="inherit"
                  key={person.email}
                >
                  {person.email}
                </Link>
              ))}
            </Typography>
            <Typography
              className={classes.date}
              color="textSecondary"
              variant="caption"
            >
              {moment(mail.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
        >
          <Hidden smDown>
            <Tooltip title="Reply">
              <IconButton>
                <ReplyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Reply all">
              <IconButton>
                <ReplyAllIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Hidden>
          <Tooltip title="More options">
            <IconButton>
              <MoreIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Divider />
      <Box
        flexGrow={1}
        py={6}
        px={3}
        bgcolor="background.dark"
      >
        <Typography
          variant="h1"
          color="textPrimary"
        >
          {mail.subject}
        </Typography>
        <Box mt={2}>
          <Markdown
            source={mail.message}
            className={classes.message}
          />
        </Box>
      </Box>
      <Divider />
      <MailReply />
    </div>
  );
}

export default MailDetails;
