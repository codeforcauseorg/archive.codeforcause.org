import { Box, Card, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 0, 0),
    padding: '60px 0px 40px',
    backgroundColor: '#F4F4F4',
    borderRadius: '0px'
  },
  card: {
    display: 'inline-block',
    verticalAlign: 'top',
    textAlign: 'left',
    width: 308,
    height: 245,
    color: '#fff',
    padding: '24px',
    margin: '24px 48px 24px 0px',
    background: '#5D517E',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)',
    [theme.breakpoints.down('sm')]: {
      margin: '16px'
    },
    '&, .makeStyles-card-210': {
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginRight: 0
      }
    }
  },
  box: {
    height: '51px',
    width: '51px',
    backgroundColor: '#fff',
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
      <div style={{ display: 'block', textAlign: 'center', width: '100%' }}>
        {features.map((feature, index) => {
          return <FeatureCard feature={feature} index={index} />;
        })}
      </div>
    </div>
  );
}

export function FeatureCard({ feature, index }) {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.card}>
      <Box className={classes.box}>
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
      <Typography variant="body2" style={{ fontWeight: 500 }}>
        {feature.subTopic}
      </Typography>
    </Card>
  );
}

export const features = [
  {
    topic: 'Structured Industry vetted Curiculumn',
    subTopic: 'Who have been In Out Throughout the Industry'
  },
  {
    topic: 'Live Classes By Faculty',
    subTopic: 'Who have been In Out Throughout the Industry'
  },
  {
    topic: 'Affordable costing',
    subTopic: 'Who have been In Out Throughout the Industry'
  },
  {
    topic: 'Live Classes By Faculty',
    subTopic: 'Who have been In Out Throughout the Industry'
  }
];

export default CourseFeatures;
