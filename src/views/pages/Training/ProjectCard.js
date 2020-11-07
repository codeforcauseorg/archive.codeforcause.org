import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  makeStyles,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React from 'react';
import { BoxTab } from './Hero';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(-3, 6, 0, 0),
    paddingBottom: theme.spacing(3),
    width: '348px',
    textAlign: 'left',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.15)'
  },
  media: {
    height: '140px',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.15)',
    borderRadius: '6px',
    marginBottom: theme.spacing(2)
  },
  subtitle: {
    color: '#6F6F6F',
    margin: '0px 0px 8px',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '21px'
  },
  tab: {
    padding: '5px 14px',
    marginBottom: '8px',
    color: '#0092B2',
    backgroundColor: '#e4e4e4',
    borderRadius: '4px'
  }
}));

export default function ProjectCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        image="/static/swipes/apps.png"
        title="Course"
        className={classes.media}
      />
      <CardContent>
        <Typography
          style={{ fontWeight: 500, fontSize: 18, lineHeight: '27px' }}
        >
          Game Development Using JAVA
        </Typography>
        <Typography className={classes.subtitle}>Week 1</Typography>
        {tags.map(tag => {
          return <BoxTab text={tag} className={classes.tab} />;
        })}
      </CardContent>
      <CardContent>
        <Typography className={classes.subtitle}>About Project</Typography>
        <Typography variant="body2" style={{ color: '#646464' }}>
          The Sudoku game consists of graphical user interface, solver and
          puzzle generator; implemented using java and java swings.
        </Typography>
      </CardContent>
      <CardContent>
        <Grid container spacing={2} justify="flex-start">
          <Grid item>
            <Typography
              display="inline"
              className={classes.subtitle}
              style={{ fontSize: '12px' }}
            >
              Difficulty Level
            </Typography>
          </Grid>
          <Grid item>
            <LinearProgressWithLabel value={70} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 5,
    borderRadius: 5,
    width: '100%'
  },
  colorPrimary: {
    backgroundColor: '#cecece'
  },
  bar: {
    borderRadius: 5,
    background: 'linear-gradient(90deg, #4300FF 0%, #000000 100%)'
  }
}))(LinearProgress);

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" minWidth={150} mr={1}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={20}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const tags = ['C++', 'Python', 'Javascript'];
