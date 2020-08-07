import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Typography,
  makeStyles
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const background = 'linear-gradient(270.72deg, #180255 0.25%, #000000 97.54%)';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#FFF',
    background,
    paddingTop: 80,
    paddingBottom: 60,
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  extraPadding: {
    padding: '0 70px 0px 0px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
    }
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '100%',
      height: 'auto',
      backfaceVisibility: 'hidden'
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center'
    }
  },
  hide: {
    display: 'none'
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
              className={clsx(classes.extraPadding, className)}
            >
              <Typography variant="h1" gutterBottom>
                Learn for Cause
              </Typography>
              <Typography variant="h1">Code for Cause</Typography>
              <Hidden mdUp>
                <Box mt={6} mb={2}>
                  <div className={classes.image}>
                    <img
                      alt="codeforcauseimg"
                      src="/static/home/codeforcause.svg"
                    />
                  </div>
                </Box>
              </Hidden>
              <Box mt={5}>
                <Typography variant="body1">
                  An initiative to help the community by providing training,
                  guidance and awareness about the possibilities in the software
                  field to students &amp; professionals.
                </Typography>
              </Box>
              <Box mt={4}>
                <Grid container xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    <Button
                      className={classes.btn}
                      component="a"
                      href="https://youtube.com/codeforcause"
                      target="_blank"
                      size="large"
                      variant="contained"
                    >
                      <PlayArrowIcon style={{ paddingRight: 5 }} />
                      Watch Our Videos
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={6}>
              <Box>
                <div className={classes.image}>
                  <img
                    alt="codeforcauseimg"
                    src="/static/home/codeforcause.svg"
                  />
                </div>
              </Box>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
}

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
