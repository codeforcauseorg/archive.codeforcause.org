import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  rot: {},
  back: {
    padding: '6% 0px 5% 3%',
    [theme.breakpoints.up('sm')]: {
      padding: '6% 0px 0px 3%'
    }
  }
}));

export default function EditProfile() {
  const classes = useStyles();
  return (
    <Grid container xs={12}>
      <Grid item className={classes.back} xs={12} sm={2} md={2}>
        <Link to="/student" style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faChevronLeft} color="#CC2700" />
          <Typography display="inline" variant="h6" color="secondary">
            {'  '} Back To Profile
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} sm={8} md={8}>
        <Form />
      </Grid>
      <Grid xs={12} sm={2} md={2} className={classes.back} />
    </Grid>
  );
}
