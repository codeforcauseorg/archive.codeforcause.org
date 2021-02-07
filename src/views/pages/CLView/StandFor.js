import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#000',
    background: '#FFF',
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  extraPadding: {
    padding: '0 35px',
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      padding: '0'
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
  },
  listPointers: {
    fontSize: '45px',
    marginRight: '5px'
  },
  extraMargin: {
    marginTop: '50px',
    [theme.breakpoints.down('md')]: {
      marginTop: '30px'
    }
  }
}));

function StandsFor({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          style={{ marginTop: '10px' }}
          variant="h2"
          align="center"
          gutterBottom
          color="textPrimary"
        >
          What Does a Campus Leader Stands For?
        </Typography>
        <Grid container spacing={3} className={classes.extraMargin}>
          <Hidden smDown>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }}
            >
              <img
                alt="this is what we stand for"
                src="/static/campusLeaders/standFor.png"
                style={{
                  flexShrink: '0',
                  minWidth: '100%',
                  borderRadius: '10px'
                }}
              />
            </Grid>
          </Hidden>

          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              height="100%"
              className={clsx(classes.extraPadding, className)}
            >
              <Box>
                <Typography variant="body1">
                  <b>Campus Leaders at Code For Cause</b> are the entreprenurial
                  mindset people who want create value in the community by
                  awaring people, and gathering the like minded to work for
                  cause. And above all set example and influence on people for
                  contributing. So, some values and the expectations we have
                  from our campus leaders are
                </Typography>
              </Box>

              <Box mt={3} mb={1}>
                <Typography variant="h5" align="center">
                  Here’s what we expect out of a true Campus Leader:
                </Typography>
              </Box>

              <ul>
                <li>
                  <Box mt={2}>
                    <Typography variant="body1">
                      <h4 style={{ display: 'inline' }}>Enthusiasm</h4> to go
                      social while building and contributing to the community
                      with their skill.
                    </Typography>
                  </Box>
                </li>

                <li>
                  <Box mt={2}>
                    <Typography variant="body1">
                      <h4 style={{ display: 'inline' }}>
                        An Initiative taker:{' '}
                      </h4>
                      A Leader should always have a way of talking people out of
                      problems and leading them to do the same for others.
                    </Typography>
                  </Box>
                </li>

                <li>
                  <Box mt={2}>
                    <Typography variant="body1">
                      <h4 style={{ display: 'inline' }}>
                        A Community Builder:
                      </h4>
                      ​ A true leader should identify the resources available
                      within the community, and use them to help build a better
                      & more helpful one.
                    </Typography>
                  </Box>
                </li>

                <li>
                  <Box mt={2}>
                    <Typography variant="body1">
                      <h4 style={{ display: 'inline' }}>
                        A Resource Seeker:​{' '}
                      </h4>
                      Most sought out value for a Leader - a giving personality
                      and an effort maker, making anything possible with the
                      given resources.
                    </Typography>
                  </Box>
                </li>

                <li>
                  <Box mt={2}>
                    <Typography variant="body1">
                      <h4 style={{ display: 'inline' }}>An Investor: </h4>S
                      hould be up & ready to take initiative and invest their
                      time and effort into building a community.
                    </Typography>
                  </Box>
                </li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

StandsFor.propTypes = {
  className: PropTypes.string
};

export default StandsFor;
