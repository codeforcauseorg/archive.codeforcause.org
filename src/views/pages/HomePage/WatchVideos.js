import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';

const background = 'linear-gradient(180deg, #180253 0%, #0E0131 100%)';

const useStyles = makeStyles(theme => ({
  root: {
    height: '75vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    background
  },
  primaryText: {
    paddingBottom: '50px',
    marginLeft: 38,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 0,
      marginLeft: 0
    }
  },
  secondaryText: {
    paddingLeft: '10px',
    fontWeight: 900
  },
  icon: {
    height: 90,
    '&:hover': {
      scale: 1.2,
      transition: 'ease-in .2s',
      opacity: '0.8'
    },
    [theme.breakpoints.down('sm')]: {
      height: 120,
      padding: '20px 0'
    }
  },
  box2: {
    height: 90,
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  }
}));

const WatchVideosView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h2" className={classes.primaryText}>
          Start Learning Today
        </Typography>
        <div className={classes.box2}>
          <a
            href="https://www.youtube.com/codeforcause"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="play"
              className={classes.icon}
              src="/static/images/icons/play1.svg"
            />
          </a>
          <Typography variant="h2" className={classes.secondaryText}>
            Watch Our Videos
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default WatchVideosView;
