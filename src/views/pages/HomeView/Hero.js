import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 80,
    paddingBottom: 60,
    [theme.breakpoints.down('md')]: {
      paddingTop: 40,
      paddingBottom: 60
    }
  },
  extraPadding: {
    padding: '0 70px',
    [theme.breakpoints.down('md')]: {
      padding: '0 30px'
    },
    textAlign: 'justify'
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      backfaceVisibility: 'hidden'
      // boxShadow: theme.shadows[16]
      // transform: 'rotateY(-35deg) rotateX(15deg)'
    }
  },
  shape: {
    position: 'absolute',
    top: '0',
    left: '0',
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  },
  hide: {
    display: 'none'
  },
  Button: {
    textTransform: 'capitalize'
    // padding :
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
              className={clsx(classes.extraPadding, className)}
            >
              <Typography variant="h2" color="#000">
                Learn for the Cause
              </Typography>
              <Typography variant="h2" color="#000">
                Code for the Cause
              </Typography>
              <Box mt={6}>
                <Typography variant="body1">
                  An initiative to help the community by providing training,
                  guidance and awareness about the possibilities in the software
                  field to students &amp; professionals.
                </Typography>
              </Box>
              <Box mt={2}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="h1" color="secondary"></Typography>
                    <Box
                      mt={2}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        style={{
                          backgroundColor: '#A60000',
                          color: '#ffffff',
                          textTransform: 'capitalize'
                        }}
                        component="a"
                        href="/register"
                        size="large"
                        variant="contained"
                      >
                        Register
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item>
                    <Typography variant="h1" color="secondary"></Typography>
                    <Box
                      mt={2}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        style={{
                          borderColor: '#A60000',
                          color: '#A60000',
                          textTransform: 'capitalize'
                        }}
                        component="a"
                        href="/register"
                        variant="outlined"
                        size="large"
                      >
                        Know more
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box position="relative">
              {/* <div className={classes.shape}>
                <img alt="Shapes" src="/static/home/shapes.svg" />
              </div> */}

              <div className={classes.image}>
                <img
                  alt="codeforcauseimg"
                  src="/static/home/codeforcause.png"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
