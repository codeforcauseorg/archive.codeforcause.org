import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Container,
  Grid,
  Hidden,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#FFF',
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15,
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
      marginTop: '30px',
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
          What Does the Campus Leader Stands For
        </Typography>
        <Grid container spacing={3} className={classes.extraMargin}>
          <Hidden smDown>
            <Grid item xs={12} md={6} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden"
            }}>
                <img src="/static/campusLeaders/standFor.png" style={{
                      flexShrink: "0",
                      minWidth: "100%"
                }}/>
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
              <Box mt={2}>
                <Typography variant="body1">
                  He/she shall be entusiastic about going social and build &amp;
                  contribute for the community<h4>- An Initiative taker</h4>
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body1">
                  A Leader shall always have a way of talking people out from
                  problems and leading them to do that for others too{' '}
                  <h4> - A Community Builder</h4>
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body1">
                  He/she should be connecting to the resources available in
                  community that might help in building a better &amp; more
                  helpful community <h4>- A Resource Seeker</h4>
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body1">
                  Most sought after value - an effort maker and giving
                  peronality <h4>- An Investor</h4>
                </Typography>
              </Box>
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
