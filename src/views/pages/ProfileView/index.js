import React from 'react';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { UserEdit } from './UserEdit';
import UserRegister from './UserRegister';

const useStyles = makeStyles(() => ({
  root: {}
}));

function ProfileView() {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Campus Leaders">
      <UserEdit />
      <UserRegister />
    </Page>
  );
}

export default ProfileView;
