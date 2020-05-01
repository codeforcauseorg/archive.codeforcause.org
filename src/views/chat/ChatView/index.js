import React, {
  useEffect,
  useRef
} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { getContacts } from 'src/actions/chatActions';
import Sidebar from './Sidebar';
import ThreadDetails from './ThreadDetails';
import ThreadNew from './ThreadNew';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative'
  }
}));

function ChatView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { threadKey } = useParams();
  const pageRef = useRef(null);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Page
      className={classes.root}
      title="Chat"
      ref={pageRef}
    >
      <Sidebar containerRef={pageRef} />
      {threadKey ? <ThreadDetails /> : <ThreadNew /> }
    </Page>
  );
}

export default ChatView;
