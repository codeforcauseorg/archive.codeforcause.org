import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Box, Grid, Typography, makeStyles, Hidden } from '@material-ui/core';
import ApplyNowModal from './ApplyNowModal';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '350px',
    color: '#FFF',
    padding: '100px 70px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    color: '#FFF'
  },
  btn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    '&:hover': {
      backgroundColor: 'rgba(166, 0, 0, 0.8)'
    }
  },
  applyleft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function Apply({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      style={{
        backgroundImage: 'url("/static/campusLeaders/apply.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      {...rest}
    >
      <Grid container maxWidth="lg">
        <Grid item lg={9} md={12} sm={12} xs={12} className={classes.applyleft}>
          <div className={classes.main}>
            <Typography
              variant="h2"
              style={{
                marginBottom: '10px',
                fontWeight: 700
              }}
            >
              Lead a community at your campus
            </Typography>
            <Typography
              variant="h2"
              style={{
                marginBottom: '24px',
                fontWeight: 700
              }}
            >
              powered by Code for Cause
            </Typography>
            <Box mt={2}>
              <ApplyNowModal />
            </Box>
          </div>
        </Grid>

        <Hidden mdDown>
          <Grid item lg={3} md={3}>
            <Box>
              <div className={classes.image}>
                <img
                  alt="codeforcauseimg"
                  src="/static/images/cl/cl_apply.png"
                  style={{
                    marginBottom: '-105px'
                  }}
                />
              </div>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

Apply.propTypes = {
  className: PropTypes.string
};

export default Apply;
