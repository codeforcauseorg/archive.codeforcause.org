import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';

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
        <img alt="title-img" style={{ marginTop: '6px' }} height="55px" src={point.img} />
      </Grid>
      <Grid item md={10}>

        <Typography
          className={classes.extraMargin}
          variant="subtitle1"
        >
          <Box component="span" style={{ fontWeight: 'bold' }} display="inline-block">{`${point.contentTitle} :`}</Box>
          {` `}
          {point.content}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SubCard;
