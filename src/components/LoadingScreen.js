import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: '100%',
    padding: theme.spacing(3)
  },
  loadingLogo: {
    marginBottom: '32px'
  },
  box: {
    textAlign: 'center'
  }
}));

function LoadingScreen() {
  const classes = useStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box className={classes.box} width={400}>
        <img src="/static/logo/logo.png" alt="logo" className={classes.loadingLogo} />
        <LinearProgress />
      </Box>
    </div>
  );
}

export default LoadingScreen;
