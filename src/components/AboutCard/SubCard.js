import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    paddingTop: '40px',
  },

  extraMargin: {
    marginLeft: 15,
    float: 'right',
    [theme.breakpoints.down('md')]: {
      marginLeft: 25
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      fontSize: '85%'
    }
  },
  image: {
    margin: '10px auto',
    display: 'inline-block',
    float: 'left',
  }
}));

const SubCard = ({ point }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid className={classes.image} item sm={2}>
        <img alt="Select file" height="55px" src={point.img} />
      </Grid>
      <Grid item sm={10}>
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
