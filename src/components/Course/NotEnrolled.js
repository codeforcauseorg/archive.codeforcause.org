import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    background: '#FBFCFF',
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
  mainIcon: {
    textAlign: 'center',
    padding: '80px 0px 20px'
  }
}));

export default function NotEnrolled() {
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
        <CardContent className={clsx(classes.cardContent, classes.mainIcon)}>
          <img src="/static/images/courses/error.svg" alt="error" />
        </CardContent>
        <CardContent style={{ textAlign: 'center', padding: '0px 40px 36px' }}>
          <Typography
            align="center"
            variant="h5"
            style={{ fontSize: '18px', color: '#000', paddingBottom: '12px' }}
          >
            You Have Not Enrolled In Any Course Yet!!
          </Typography>
          <Typography align="center" variant="body2">
            Your Courses in which you have enrolled will appear here.
          </Typography>
        </CardContent>

        <Link
          display="flex"
          justifyContent="center"
          to="/courses"
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
              Explore Courses
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
          Enroll into the course now and get flat 10% off on any course from
          code for cause.
        </Typography>
      </Card>
    </Box>
  );
}
