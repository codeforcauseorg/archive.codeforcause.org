import {
  Avatar,
  Box,
  Grid,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import React from 'react';
import authorUrl from '../../../data/blogAuthors';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '5px 40px 70px auto',
    backgroundColor: '#f2f2f2',
    [theme.breakpoints.down('sm')]: {
      margin: '5px auto 70px auto'
    },
    '&:hover': {
      boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.14)'
    }
  },
  container: {
    margin: '0px auto',
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap'
    }
  },
  mainHead: {
    fontWeight: '700',
    color: '#000'
  },
  img: {
    width: '95%',
    maxHeight: '200px'
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

export default function BlogItem({ blog }) {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item className={classes.pict} md={6} sm={12} xs={12}>
          <img src={blog.thumbnail} alt="course_pic" className={classes.img} />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Typography
            className={classes.extraBottompadding}
            variant="h6"
            color="secondary"
          >
            {blog.categories[0]}
          </Typography>
          <Typography className={classes.extraBottompadding} variant="h3">
            {blog.title}
          </Typography>
          <Typography variant="caption">Jun 18, 2019 | 7 min Read</Typography>
          <Box style={{ marginTop: '22px' }} display="flex" alignItems="center">
            <Avatar
              className={classes.avatar}
              alt=""
              src={authorUrl[blog.author].avatar}
            />
            <Box display="flex" flexDirection="column">
              <Box>
                <Typography className={classes.txt}>{blog.author}</Typography>
                <Typography className={classes.txt}>Learner</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
