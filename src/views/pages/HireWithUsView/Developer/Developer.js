import React from 'react';
import Devbox from './DevBox/index';
// import classes from './Developer.module.css';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  Developer: {
    marginTop: '70px',
    paddingLeft: '200px',
    paddingTop: '50px',
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: '#e6e6ff',
    height: '800px'
  },
  Head: {
    display: 'block'
  },
  heading1: {
    display: 'inline-block'
  },
  heading2: {
    display: 'inline-block',
    paddingLeft: '10px'
  },
  Box: {
    marginTop: '110px',
    width: '60%',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  Lastbox: {
    marginTop: '20px'
  },
  Bottom: {
    marginTop: '77px'
  },
  BottomBox: {
    marginLeft: '800px',
    paddingTop: '40px',
    paddingLeft: '55px',
    paddingRight: '200px',
    width: '970px',
    height: '230px',
    background: 'rgba(255, 255, 255, 0.1)',
    backgroundColor: 'white',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.1), inset 0px 0px 18px salmon',
    borderRadius: '121.5px 20px 121px 121.5px',
    /* border:5px solid black; */
    position: 'relative',
    float: 'right',
    top: '-190px',
    left: '-10',
    zIndex: '700'
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
    zIndex: '1000'
  },
  Footer: {
    marginTop: '30px',
    float: 'none',
    height: '90px',
    width: '100%',
    top: '-50px',
    background: 'none',
    zIndex: '400'
  }
}));

export default function Developer(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.Developer}>
        <div className={classes.Head}>
          <Typography variant="h2" className={classes.heading1}>
            The Making Of{' '}
          </Typography>
          <Typography variant="h1" className={classes.heading2}>
            The Fine Developer
          </Typography>
        </div>

        <div className={classes.Box}>
          <Devbox Img="Gold_Ribbon" />
          <Devbox Img="Book_Icon" />
          <Devbox Img="Thumbs_Up" />
        </div>

        <div className={classes.Bottom}>
          <div className={classes.Lastbox}>
            <Devbox />
          </div>

          <div className={classes.BottomBox}>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset ke Aldus
              PageMaker including versions of Lorem Ipsum elease of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop.
            </Typography>
          </div>
          <div className={classes.SideBox} />
        </div>
      </div>
      <div className={classes.Footer}></div>
    </div>
  );
}
