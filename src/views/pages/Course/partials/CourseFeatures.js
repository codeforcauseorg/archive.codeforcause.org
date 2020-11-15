import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    padding: '60px 0px 40px',
    backgroundColor: '#F4F4F4',
    borderRadius: '10px'
  },
  card: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: 308,
    height: 245,
    color: '#B4B4B4',
    padding: '24px',
    margin: '24px',
    background: 'linear-gradient(180deg, #FF6565 0%, #000000 100%)',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
    [theme.breakpoints.down('sm')]: {
      margin: '16px'
    }
  },
  box: {
    height: '51px',
    width: '51px',
    backgroundColor: '#bebebe',
    padding: '12px',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.14), inset 0px 0px 5px #1D006E',
    borderRadius: '7px'
  }
}));

function CourseFeatures() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        align="center"
        variant="h3"
        style={{ fontSize: '28px', marginBottom: '30px' }}
      >
        Course Features
      </Typography>
      <div style={{ display: 'block', textAlign: 'center' }}>
        {features.map((feature, index) => {
          return <Card feature={feature} index={index} />;
        })}
      </div>
    </div>
  );
}

function Card({ feature, index }) {
  const classes = useStyles();
  return (
    <Paper
      elevation={0}
      className={classes.card}
      style={{ background: `${feature.background}` }}
    >
      <Box
        className={classes.box}
        style={{ backgroundColor: `${feature.iconBackGround}` }}
      >
        <img
          src={`/static/images/courses/trainingLogos/${index}.svg`}
          alt="logo"
        ></img>
      </Box>
      <Typography
        variant="h4"
        style={{ margin: '40px 0px 12px', lineHeight: '150%' }}
      >
        {feature.topic}
      </Typography>
      <Typography variant="body2" style={{ fontWeight: 500, color: '#d4d4d4' }}>
        {feature.subTopic}
      </Typography>
    </Paper>
  );
}

const features = [
  {
    topic: 'Structured Industry vetted Curiculumn',
    subTopic: 'Who have been In Out Throughout the Industry',
    background: 'linear-gradient(180deg, #FF6565 0%, #000000 100%)',
    iconBackGround: '#BEBEBE'
  },
  {
    topic: 'Live Classes By Faculty',
    subTopic: 'Who have been In Out Throughout the Industry',
    background: 'linear-gradient(180deg, #5114FF 0%, #000000 100%)',
    iconBackGround: '#73ABFF'
  },
  {
    topic: 'Affordable costing',
    subTopic: 'Who have been In Out Throughout the Industry',
    background: 'linear-gradient(180deg, #00A2D6 0%, #000000 100%)',
    iconBackGround: '#9AFFE7'
  },
  {
    topic: 'Live Classes By Faculty',
    subTopic: 'Who have been In Out Throughout the Industry',
    background: '#5D517E',
    iconBackGround: '#bebebe'
  }
];

export default CourseFeatures;
