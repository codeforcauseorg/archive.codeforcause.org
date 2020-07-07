import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Typography, makeStyles, Container } from '@material-ui/core';

const primaryContentColor = '#F8F6FA';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '100px 0px',
    paddingBottom: '40px',
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
  // const { user } = useSelector((state) => state.account);

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
            We aim to provide a real world practical learning experience and
            keep students informed about the latest trends in technology,
            open-source and opportunities, so that they can keep up with the
            fast-paced digital world by following a pi-shaped learning pattern.
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
