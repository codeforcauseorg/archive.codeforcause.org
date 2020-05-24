import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 40,
    paddingBottom: 100,
    [theme.breakpoints.down('md')]: {
      paddingTop: 40,
      paddingBottom: 60
    }
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16],
      transform: 'rotateY(-35deg) rotateX(15deg)'
    }
  },
  shape: {
    position: 'absolute',
    top: '60px',
    left: '0',
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
    }
  },
  hide: {
    display : 'none'
  }
}));

function Hero({ className, ...rest }) {
  const classes = useStyles();


  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={5}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography
                variant="overline"
                color="secondary"
              >
                Welcome to
              </Typography>
              <Typography
                variant="h1"
                color="textSecondary"
              >
                Code for Cause
              </Typography>
              <Box mt={3}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                >
                  Code for Cause is an initiative to help the community by means of software.
                  Our primary focus is to provide guidance and mentorship to students who lack it. Not only for those who lack on-campus opportunities but also for those who lack awareness about the possibilities in the software field. 
                  We believe that it is never too late to start. Provided you have the right guidance and are willing to learn, not just from us, but from the entire community. 

                </Typography>
              </Box>
              {/* <Box mt={3}>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      30+
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Demo Pages
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      UX
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Complete Flows
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h1"
                      color="secondary"
                    >
                      300+
                    </Typography>
                    <Typography
                      variant="overline"
                      color="textSecondary"
                    >
                      Components
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            */}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
          >
            <Box position="relative">
            <div className={classes.shape}>
                <img
                  alt="Shapes"
                  src="/static/home/shapes.svg"
                />
              </div>
             
              <div className={classes.image}>
                <img
                  alt="Presentation"
                  src="/static/home/codeforcause.jpg"
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
