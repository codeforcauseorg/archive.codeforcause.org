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

import { login } from 'src/actions/accountActions';
import { useDispatch, useSelector } from 'react-redux';

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
  const user = useSelector(state => state.account.user);
  const dispatch = useDispatch();
  const handleLoginOpen = () => {
    dispatch(login());
  };

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
                Workshops, Bootcamps
              </Typography>
              <Typography variant="h1"> &amp; Webinars</Typography>
              <Hidden mdUp>
                <Box mt={6} mb={2}>
                  <div className={classes.image}>
                    <img alt="codeforcauseimg" src="/static/events/hero.png" />
                  </div>
                </Box>
              </Hidden>
              <Box mt={5}>
                {!!user ? (
                  <Typography variant="h4">
                    It's the time to learn from Experts.
                  </Typography>
                ) : (
                  <Typography variant="h4">
                    Login To get regular Updates.
                  </Typography>
                )}
              </Box>
              <Box mt={2} mb={3}>
                <Grid container xs={12} md={12}>
                  <Grid item xs={12} md={12}>
                    {!!user ? (
                      <Typography
                        variant="h4"
                        style={{
                          color: '#ffffff'
                        }}
                      >
                        Explore our live events below
                      </Typography>
                    ) : (
                      <Button
                        className={classes.btn}
                        onClick={handleLoginOpen}
                        size="large"
                        variant="contained"
                      >
                        Login / Signup
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} md={6}>
              <Box>
                <div className={classes.image}>
                  <img alt="codeforcauseimg" src="/static/events/hero.png" />
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
