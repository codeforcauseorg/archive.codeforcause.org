import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  root: {
    padding: theme.spacing(10, 10, 10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10)
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '12px',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.13)'
  },
  cardMedia: {
    width: '100%',
    height: 'auto'
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    margin: '15px 5px'
  },
  chipActions: {
    display: 'block'
  },
  chip: {
    margin: '8px 0 3px 8px'
  },
  extraMargin: {
    marginTop: '15px',
    marginBottom: '0'
  },
  btn: {
    textTransform: 'none'
  },
  paddingCls: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  paddingClsxs: {
    padding: 0
  },
  iconSize: {
    fontSize: '32px'
  },
  text: {
    color: '#FFFFFF'
  },
  avatarLarge: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(4, 0, 2)
  },

  avatarGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px'
  },

  slide: {
    perspective: 0, // create perspective
    overflow: 'hidden',
    // relative is a must if you want to create overlapping layers in children
    position: 'relative'
  },
  background: {
    width: '100%',
    height: 'auto',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover'
  },
  complete: {
    fontWeight: '600'
  },
  gridList: {
    flexWrap: 'nowrap',
    width: '100%',
    transform: 'translateZ(0)'
  }
}));

export default function CourseCard({ course }) {
  const classes = useStyles();
  return (
    <Box>
      <Card
        className={classes.card}
        display="flex"
        style={{
          maxWidth: '320px'
        }}
      >
        <CardContent className={classes.cardContent}>
          <Box display="flex" flexDirection="column">
            <Typography
              align="left"
              variant="h5"
              style={{
                color: '#0085FF',
                paddingBottom: '11px'
              }}
            >
              {course.difficulty}
            </Typography>
            <Typography
              align="left"
              variant="h6"
              style={{
                color: '#B20000',
                marginBottom: '12px'
              }}
            >
              {course.domain}
            </Typography>

            <Typography variant="h4" align="left">
              {course.title}
            </Typography>
          </Box>
        </CardContent>

        <Box>
          <Grid container md={12} justify="space-around" alignItems="center">
            <Grid item md={4}>
              <Typography
                fontWeight=""
                noWrap
                variant="caption"
                style={{ fontWeight: 'bold' }}
              >
                Application Date
              </Typography>
            </Grid>
            <Grid item md={2}>
              <Typography noWrap variant="caption">
                12:00 PM
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography noWrap variant="caption">
                19th sept 2020
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            md={12}
            justify="space-around"
            alignItems="center"
            style={{ padding: '10px' }}
          >
            <Grid container md={3} sm={3} xs={3} row>
              <ActiveLinearProgress
                variant="determinate"
                value="99"
              ></ActiveLinearProgress>
              <Typography className={classes.complete} variant="caption">
                {'Application Filled'}
              </Typography>
            </Grid>
            <Grid container md={3} sm={3} xs={3} row>
              <ActiveLinearProgress
                variant="determinate"
                value="99"
              ></ActiveLinearProgress>
              <Typography className={classes.complete} variant="caption">
                {'Got Shortlisted'}
              </Typography>
            </Grid>
            <Grid container md={3} sm={3} xs={3} row>
              <UnActiveLinearProgress
                variant="determinate"
                value="99"
              ></UnActiveLinearProgress>
              <Typography variant="caption">{'Online Meeting'}</Typography>
            </Grid>
            <Grid container md={3} sm={3} xs={3} row>
              <UnActiveLinearProgress
                variant="determinate"
                value="99"
              ></UnActiveLinearProgress>
              <Typography variant="caption">{'Enroll In course'}</Typography>
            </Grid>
          </Grid>
        </Box>

        <CardContent className={classes.cardContent}>
          <Typography variant="caption">
            Congratulations! You are shortlisted In The Course. Check you have
            recieved email for Online Meeting on your registed email id
            gauravsunaria@gmail.com
          </Typography>
        </CardContent>

        <Link
          display="flex"
          justifyContent="center"
          to={course.link}
          style={{
            background: '#A60000',
            color: '#FF4C00',
            textDecoration: 'none',
            marginBottom: '16px'
          }}
        >
          <Typography
            align="center"
            style={{
              color: '#FFFFFF'
            }}
          >
            <Box m={1} fontWeight={600}>
              Enroll Now
            </Box>
          </Typography>
        </Link>
        {/* <Typography style={{fontSize: '0.56rem', padding: '0px 10px'}} variant='caption'>
                    You will be able to enroll into the course as soon as you successfully completed your online meeting.</Typography> */}
      </Card>
    </Box>
  );
}

const ActiveLinearProgress = withStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px'
  },
  colorPrimary: {
    backgroundColor: '#FFF'
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#4CAC00'
  }
}))(LinearProgress);

const UnActiveLinearProgress = withStyles(theme => ({
  root: {
    width: '100%',
    marginTop: '10px',
    marginBottom: '10px'
  },
  colorPrimary: {
    backgroundColor: '#FFF'
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#D7D7D7'
  }
}))(LinearProgress);
