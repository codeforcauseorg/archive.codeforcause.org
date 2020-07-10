import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    paddingTop: '40px'
  },

  extraMargin: {
    marginLeft: 15,
    [theme.breakpoints.down('md')]: {
      marginLeft: 25
    }
  }
}));

const SubCard = ({ point }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={2}>
        <img alt="Select file" height="55px" src={point.img} />
      </Grid>
      <Grid item md={10}>
        <Typography
          className={classes.extraMargin}
          align="justify"
          variant="subtitle2"
        >
          {point.content}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SubCard;
