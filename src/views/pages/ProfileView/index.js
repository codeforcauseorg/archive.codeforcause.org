import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
// import UserProfile from './UserProfile';
// import UserRegister from './UserRegister';
import {UserEdit} from './UserEdit';

const useStyles = makeStyles(() => ({
  root: {}
}));

function ProfileView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Campus Leaders">
      <UserEdit />
    </Page>
  );
}

export default ProfileView;
