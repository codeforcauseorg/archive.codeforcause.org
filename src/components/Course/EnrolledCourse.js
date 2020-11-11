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
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '12px',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.13)'
  },
  cardContent: {
    margin: '15px 5px'
  },
  complete: {
    fontWeight: '600'
  }
}));

export default function EnrolledCourse({ course }) {
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
              <ActiveLinearProgress
                variant="determinate"
                value="99"
              ></ActiveLinearProgress>
              <Typography className={classes.complete} variant="caption">
                {'Online Meeting'}
              </Typography>
            </Grid>
            <Grid container md={3} sm={3} xs={3} row>
              <ActiveLinearProgress
                variant="determinate"
                value="99"
              ></ActiveLinearProgress>
              <Typography className={classes.complete} variant="caption">
                {'Enroll In course'}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <CardContent style={{ textAlign: 'center' }}>
          <img
            src="/static/images/courses/courseComplete.png"
            alt="success flag"
          />
        </CardContent>

        <CardContent className={classes.cardContent}>
          <Typography
            variant="caption"
            align="center"
            display="block"
            style={{ fontWeight: 600, fontSize: '12px' }}
          >
            Congrats!! You Can Enroll Now
          </Typography>
          <Typography
            variant="caption"
            align="center"
            display="block"
            style={{ fontWeight: 500, fontSize: '10px', color: '#4CAC00' }}
          >
            You have successfully completed the application process. You can now
            enroll into the course through the enroll now button given below.
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
        <Typography
          style={{
            fontSize: '0.56rem',
            padding: '0px 12px 10px',
            color: '#787878'
          }}
          variant="caption"
        >
          You will be able to enroll into the course as soon as you successfully
          completed your online meeting.
        </Typography>
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
