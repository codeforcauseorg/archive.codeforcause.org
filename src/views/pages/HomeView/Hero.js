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

const background = 'linear-gradient(270.72deg, #180255 0.25%, #000000 97.54%)';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#FFF',
    background,
    paddingTop: 80,
    paddingBottom: 60,
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  extraPadding: {
    padding: '0 70px 0px 0px',
    // [theme.breakpoints.down('md')]: {
    //   padding: '0 30px'
    // },
    textAlign: 'justify'
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '100%',
      height: 'auto',
      backfaceVisibility: 'hidden'
      // boxShadow: theme.shadows[16]
      // transform: 'rotateY(-35deg) rotateX(15deg)'
    }
  },
  hide: {
    display: 'none'
  },
  Button: {
    textTransform: 'capitalize'
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
              <Typography variant="h1">
                Learn for the Cause
              </Typography>
              <Typography variant="h1">
                Code for the Cause
              </Typography>
              <Box mt={6}>
                <Typography variant="h4">
                Start Your journey with the best tech enthusiasts.
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
                  src="/static/home/codeforcause.svg"
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
