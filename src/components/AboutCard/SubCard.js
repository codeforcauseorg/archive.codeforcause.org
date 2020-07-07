import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    paddingTop: '40px'
  },

  avatar: {
    height: 70,
    width: 'auto'
  }
}));

const SubCard = ({ point }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={3} className={classes.avatar}>
        <img alt="Select file" className={classes.image} src={point.img} />
      </Grid>
      <Grid item md={9}>
        <Typography variant="subtitle2">{point.content}</Typography>
      </Grid>
    </Grid>
  );
};

export default SubCard;
