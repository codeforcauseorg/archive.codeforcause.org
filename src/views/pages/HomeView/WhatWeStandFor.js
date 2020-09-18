import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Typography, makeStyles, Container } from '@material-ui/core';
import { whatWeStandForDescription } from '../../../data/HomeViewData/HomeViewData';

const primaryContentColor = '#F8F6FA';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '100px 0px',
    paddingBottom: '40px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    },
    color: 'white'
  },
  image: {
    width: '100%',
    maxHeight: 200
  },
  content: {
    marginTop: '34px',
    color: '#FFF'
  },
  primarySubtitle: {
    color: primaryContentColor
  }
}));

const WhatWeStandFor = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Container className={clsx(classes.root, className)} {...rest}>
      {' '}
      <Grid alignItems="center" container justify="space-between" spacing={3}>
        <Grid item md={6} xs={12}>
          <Typography variant="h4" style={{ color: '#A60000' }}>
            About Us
          </Typography>
          <Typography variant="h3" style={{ marginTop: '10px' }}>
            What We Stand For
          </Typography>
          <Typography className={classes.content}>
            {whatWeStandForDescription}
          </Typography>
        </Grid>
        {/* <Hidden smDown> */}
        <Grid item md={4} xs={12}>
          <img
            alt="Cover"
            className={classes.image}
            src="/static/images/open-knowledge.svg"
          />
        </Grid>
        {/* </Hidden> */}
      </Grid>
    </Container>
  );
};

WhatWeStandFor.propTypes = {
  className: PropTypes.string
};

export default WhatWeStandFor;
