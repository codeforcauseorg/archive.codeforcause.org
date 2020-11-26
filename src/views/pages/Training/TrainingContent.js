import { Container, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
// import Hexagon from ''
import { FeatureCard, features } from '../Course/partials/CourseFeatures';
import HexagonSvg from './HexagonSvg';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    position: 'relative',
    zIndex: 0
    // width: '100%'
  },
  container: {
    // padding: theme.spacing(10, 0, 10),
    // textAlign: 'center',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: '8vw',
    paddingRight: '8vw',
    width: '113%'
  }
}));

export default function TrainingContent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ zIndex: -1 }}>
        <HexagonSvg
          fill="#FFD9D8"
          style={{
            width: 47,
            height: 49,
            position: 'absolute',
            left: '3%',
            top: 20,
            zIndex: -1
          }}
        />
        <HexagonSvg
          fill="#B1ECFF"
          style={{
            width: 60,
            height: 60,
            position: 'absolute',
            left: '90%',
            top: 20,
            zIndex: -1
          }}
        />
        <HexagonSvg
          fill="#B1ECFF"
          style={{
            width: 30,
            height: 30,
            position: 'absolute',
            left: '88%',
            top: 80,
            zIndex: -1
          }}
        />
        <HexagonSvg
          fill="#B1ECFF"
          style={{
            width: 120,
            height: 120,
            position: 'absolute',
            left: '89vw',
            top: '86%',
            zIndex: -1
          }}
        />
      </div>
      <Container className={classes.container} maxWidth="xl">
        <Typography variant="h3" style={{ marginBottom: '24px' }}>
          What Do we have in this training
        </Typography>
        {features.map((feature, index) => {
          return <FeatureCard feature={feature} index={index} />;
        })}
      </Container>
    </div>
  );
}
