import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Typography, makeStyles, Container } from '@material-ui/core';

const primaryContentColor = '#F8F6FA';
const secondaryContentColor = '#D2CCD7';
const backgroundColor = '#350070';

const useStyles = makeStyles(() => ({
  root: {
    padding: '100px 30px',
    paddingBottom: '40px',
    color: 'white',
    backgroundColor
  },
  image: {
    width: '100%',
    maxHeight: 200
  },
  content: {
    marginTop: '34px',
    color: secondaryContentColor
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
          <Typography variant="h3">
            What We Stand For
          </Typography>
          <Typography className={classes.content} variant="subtitle1">
            Think of a software education platform that could solve it by
            Providing hands-on learning Establishing a community Having
            discussions about ongoing trends in tech with students Follow the
            T-Shape learning path.
            <strong className={classes.primarySubtitle}>Open Source & Open Knowledge</strong>
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
}

WhatWeStandFor.propTypes = {
  className: PropTypes.string
};

export default WhatWeStandFor;
