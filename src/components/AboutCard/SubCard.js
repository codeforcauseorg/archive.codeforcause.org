import React from 'react';
import { Grid, Typography, makeStyles, Box, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    paddingTop: '40px',
    textAlign: 'center'
  },

  title: {
    marginLeft: 15,
    float: 'right',
    [theme.breakpoints.down('md')]: {
      marginLeft: 25
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
      float: 'none',
      textAlign: 'center',
    }
  },
  contentTitle: {
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      fontWeight: 'normal'
    }
  },
  image: {
    margin: '10px auto',
    display: 'inline-block',
    float: 'left',
    [theme.breakpoints.down('xs')]: {
      float: 'none',
    }
  }
}));

const SubCard = ({ point }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid className={classes.image} item sm={2} xs={12}>
        <img alt="title-img" style={{ marginTop: '6px' }} height="55px" src={point.img} />
      </Grid>
      <Grid item sm={10} xs={12}>
        <Typography
          className={classes.title}
          align="justify"
          variant="subtitle1"
        >
          <Box component="span" className={classes.contentTitle} display="inline-block">{`${ point.contentTitle }`}</Box>
          
          <Hidden xsDown>
            <strong> : </strong>{ point.content }
          </Hidden>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SubCard;
