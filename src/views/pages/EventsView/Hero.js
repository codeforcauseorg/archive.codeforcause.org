import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';

const background = 'linear-gradient(270.72deg, #180255 0.25%, #000000 97.54%)';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '350px',
    color: '#FFF',
    background,
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
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <div className={classes.main}>
          <Typography variant="h1">Webinars &amp; Bootcamps </Typography>
          <Box mt={2}>
            <Typography variant="body1" align="center">
              Login To get regular Updates
            </Typography>
          </Box>
          <Box mt={2}>
            <Button
              className={classes.btn}
              component="a"
              href="https://youtube.com/codeforcause"
              target="_blank"
              size="large"
              variant="contained"
            >
              Login / Signup
            </Button>
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
