import React, {
  useEffect,
  useRef
} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { getLabels } from 'src/actions/mailActions';
import Sidebar from './Sidebar';
import MailList from './MailList';
import MailDetails from './MailDetails';
import MailNew from './MailNew';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative'
  }
}));

function MailView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { mailId } = useParams();
  const pageRef = useRef(null);

  useEffect(() => {
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <Page
      className={classes.root}
      title="Mail"
      ref={pageRef}
    >
      <Sidebar containerRef={pageRef} />
      {mailId ? <MailDetails /> : <MailList />}
      <MailNew />
    </Page>
  );
}

export default MailView;
