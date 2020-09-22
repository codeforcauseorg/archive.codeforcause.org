import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Box, Container, Typography, makeStyles } from '@material-ui/core';
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
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      style={{
        backgroundImage: 'url("/static/campusLeaders/hero.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      {...rest}
    >
      <Container maxWidth="lg">
        <div className={classes.main}>
          <Typography variant="h1">Campus Leaders</Typography>
          <Box mt={2}>
            <Typography variant="body1" align="center">
              Stand Up and fight for the Cause with the Code For Cause
            </Typography>
          </Box>
          <Box mt={2}>
            <ApplyNowModal />
          </Box>
        </div>
      </Container>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
