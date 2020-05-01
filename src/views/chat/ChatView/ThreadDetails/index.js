import React, {
  useEffect,
  useRef
} from 'react';
import {
  useHistory,
  useParams
} from 'react-router';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Divider,
  makeStyles
} from '@material-ui/core';
import {
  markThreadAsSeen,
  getThread
} from 'src/actions/chatActions';
import Toolbar from './Toolbar';
import Message from '../Message';
import MessageAdd from '../MessageAdd';

function threadSelector(state, threadKey, history) {
  const { threads, contacts } = state.chat;
  const { user } = state.account;
  const thread = threads.byKey[threadKey];

  // When starting a new thread, we don't have it in store
  // So we can create a temporary new one where threadKey is the contact username
  if (!thread) {
    const contactId = contacts.allIds.filter(
      // eslint-disable-next-line no-underscore-dangle
      (_contactId) => contacts.byId[_contactId].username === threadKey
    )[0];

    if (!contactId) {
      history.push('/app/chat/new');
    }

    return {
      key: threadKey,
      type: 'ONE_TO_ONE', // We might add GROUP type in future
      participantIds: [contactId, user.id],
      messages: []
    };
  }

  return thread;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.dark
  }
}));

function ThreadDetails() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { threadKey } = useParams();
  const history = useHistory();
  const thread = useSelector((state) => threadSelector(state, threadKey, history));
  const messagesRef = useRef(null);

  function scrollMessagesToBottom() {
    if (messagesRef.current) {
      // eslint-disable-next-line no-underscore-dangle
      messagesRef.current._container.scrollTop = messagesRef.current._container.scrollHeight;
    }
  }

  useEffect(() => {
    dispatch(getThread(threadKey));
    dispatch(markThreadAsSeen(threadKey));
  }, [dispatch, threadKey]);

  useEffect(() => {
    if (thread) {
      scrollMessagesToBottom();
    }
    // eslint-disable-next-line
  }, [thread.messages]);

  if (!thread) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Toolbar thread={thread} />
      <Divider />
      <Box
        flexGrow={1}
        p={2}
        ref={messagesRef}
        component={PerfectScrollbar}
        options={{ suppressScrollX: true }}
      >
        {thread.messages.length > 0 && thread.messages.map((message) => (
          <Message
            key={message.id}
            message={message}
          />
        ))}
      </Box>
      <Divider />
      <MessageAdd thread={thread} />
    </div>
  );
}

export default ThreadDetails;
