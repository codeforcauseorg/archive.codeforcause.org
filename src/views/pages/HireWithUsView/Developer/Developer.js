import React from 'react';
import Devbox from './DevBox/index';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  Developer: {
    marginTop: '80px',
    paddingLeft: '200px',
    paddingTop: '50px',
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: '#e6e6ff',
    height: '800px',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      paddingTop: '50px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '1150px',
      paddingLeft: '10px'
    }
  },
  Head: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '20px'
    }
  },
  heading1: {
    display: 'inline-block'
  },
  heading2: {
    display: 'inline-block',
    paddingLeft: '20px'
  },
  Box: {
    marginTop: '70px',
    width: '100%',
    height: '400px',
    [theme.breakpoints.down('md')]: {
      transform: 'translate(-150px,0px)'
    },
    [theme.breakpoints.down('sm')]: {
      transform: 'translate(-250px,0px)'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '30px',
      paddingLeft: '40px'
    }

  },
  Lastbox: {
    marginTop: '20px'
  },
  Bottom: {
    marginTop: '77px',

    [theme.breakpoints.down('sm')]: {
      marginTop: '150px'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '475px'
    }
  },
  BottomBox: {
    marginLeft: '800px',
    paddingTop: '40px',
    paddingLeft: '55px',
    paddingRight: '200px',
    width: '910px',
    height: '260px',
    display: 'inline-block',
    background: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'white',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px salmon',
    borderRadius: '121.5px 20px 121px 121.5px',
    position: 'relative',
    float: 'right',
    top: '-190px',
    left: '-10',
    zIndex: '700',
    [theme.breakpoints.down('md')]: {
      height: '300px',
      width: '700px'
    },
    [theme.breakpoints.down('sm')]: {
      height: '250px',
      width: '610px'
    },
    [theme.breakpoints.down('xs')]: {
      height: '230px',
      width: '350px',
      paddingRight: '55px'
    },
    opacity: '1'
  },
  SideBox: {
    width: '750px',
    height: '120px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '121.5px 121.5px 121px 121.5px',
    border: '1px solid #BAAEAE',
    backgroundColor: '#f2e6ff',
    position: 'relative',
    float: 'right',
    left: '380px',
    top: '-420px',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px #BAAEAE',
    opacity: '0.8',
    transform: 'rotate(90deg)',
    zIndex: '1000',
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      width: '500px',
      left: '250px'
    }
  },
  Footer: {
    marginTop: '30px',
    float: 'none',
    height: '90px',
    width: '100%',
    top: '-50px',
    background: 'none',
    zIndex: '400'
  },
  Write: {
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
      fontSize: '16px'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '13px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '11px'
    }
  }
}));

export default function Developer(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.Developer}>
        <Grid item className={classes.Head}>
          <Typography variant="h2" className={classes.heading1}>
            The Making Of{' '}
          </Typography>
          <Typography variant="h1" className={classes.heading2}>
            The Fine Developer
          </Typography>
        </Grid>

        <Grid justify="space-between" container className={classes.Box}>
          <Devbox Img="Gold_Ribbon" />
          <Devbox Img="Book_Icon" />
          <Devbox Img="Thumbs_Up" />
          <Devbox />
        </Grid>

        <Grid item xs={12} sm={12} className={classes.Bottom}>
          <Grid item className={classes.BottomBox}>
            <Typography variant="body1" class={classes.Write}>
              Lorem Ipsum is simply dummy. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              cont{' '}
            </Typography>
          </Grid>
          <div className={classes.SideBox} />
        </Grid>
      </Grid>
      <div className={classes.Footer}></div>
    </div>
  );
}
