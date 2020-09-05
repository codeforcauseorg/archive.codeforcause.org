import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Box
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  rootContent: {
    padding: theme.spacing(10, 10, 10),
    background: '#F1F4FE',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10)
    }
  }
}));
export default function Schedule() {
  const classes = useStyles();

  return (
    <Grid container className={classes.rootContent}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant="h2"
          className={classes.text}
          displayInline
          align="center"
          style={{
            marginBottom: '48px'
          }}
        >
          <Box fontWeight="fontWeightBold">
            Can’t Choose What’s Best For Junior?
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
