import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { ApplicationSteps } from './ApplicationSteps';
// import axios from 'src/utils/axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 10, 10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10)
    }
  }
}));

export function EditApplication() {
  const classes = useStyles();

  const urlParams = new URLSearchParams(window.location.search);
  const applicationId = urlParams.get('id');

  const [courseTitle, setCourseTitle] = useState('');

  return (
    <Grid container className={classes.root}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant="h2"
          align="center"
          style={{
            marginBottom: '12px'
          }}
        >
          Fill the Application to be Considered for
        </Typography>
        <Typography
          variant="h3"
          align="center"
          style={{
            color: '#A60000'
          }}
        >
          {courseTitle}
        </Typography>
      </Grid>

      <Grid item lg={6} md={6} sm={12} xs={12}>
        <ApplicationSteps
          applicationId={applicationId}
          setCourseTitle={setCourseTitle}
        />
      </Grid>
    </Grid>
  );
}
