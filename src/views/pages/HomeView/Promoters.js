import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F2F7FF',
    paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(2),
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6)
    },
    color: '#000000'
  },

  centerCls: {
    paddingLeft: '5px',
    paddingRight: '5px'
  }
}));

function Promoters({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid
          container
          component="dl"
          direction="row"
          justify="left"
          alignItems="center"
        >
          <Grid item xs={12} md={5}>
            <Typography variant="h4" gutterBottom>
              Our mentors are associated with
            </Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <img alt="Logo" src="/static/images/promoters/google.svg" />
          </Grid>
          {/* <Grid item xs={6} md={2}>
            <img alt="Logo" src="/static/images/promoters/microsoft.svg" />
          </Grid> */}
          <Grid item xs={6} md={2}>
            <img alt="Logo" src="/static/images/promoters/redhat.svg" />
          </Grid>
          <Grid item xs={6} md={1}>
            <img alt="Logo" src="/static/images/promoters/ibm.svg" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Promoters.propTypes = {
  className: PropTypes.string
};

export default Promoters;
