import {
  Avatar,
  Box,
  Grid,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '5px auto 70px auto',
    backgroundColor: '#f2f2f2'
  },
  mainHead: {
    fontWeight: '700',
    color: '#000'
  },
  img: {
    height: '192px',
    width: '328px'
  },
  subtitle: {
    fontWeight: 600,
    fontStyle: 'italic'
  },
  avatar: {
    width: '40px',
    height: '40px',
    marginRight: theme.spacing(2)
  },
  extraBottompadding: {
    paddingBottom: '8px'
  },
  txt: {
    fontWeight: 700,
    fontSize: '12px'
  }
}));

export default function BlogItem() {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container spacing={3} style={{ margin: '0px auto' }}>
        <Grid item className={classes.pict}>
          <img
            src="/static/images/courses/coursetop/cpjava.jpg"
            alt="course_pic"
            className={classes.img}
          />
        </Grid>
        <Grid item>
          <Typography
            className={classes.extraBottompadding}
            variant="h6"
            color="secondary"
          >
            Experience
          </Typography>
          <Typography className={classes.extraBottompadding} variant="h3">
            Google Summer Of Code
          </Typography>
          <Typography variant="caption">Jun 18, 2019 | 7 min Read</Typography>
          <Box style={{ marginTop: '22px' }} display="flex" alignItems="center">
            <Avatar
              className={classes.avatar}
              alt=""
              src="/static/images/members/kunal.png"
            />
            <Box display="flex" flexDirection="column">
              <Box>
                <Typography className={classes.txt}>Kunal Kushwaha</Typography>
                <Typography className={classes.txt}>Learner</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
