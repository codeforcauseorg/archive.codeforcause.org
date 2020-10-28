import {
  Avatar,
  Box,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import React from 'react';
import ButtonTabs from './ButtonTabs';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px auto',
    backgroundColor: '#f2f2f2'
  },
  mainHead: {
    fontWeight: '700',
    color: '#000'
  },
  subtitle: {
    fontWeight: 600,
    fontStyle: 'italic'
  },
  btn: {
    padding: '13px'
  },
  author: {
    marginBottom: 0,
    [theme.breakpoints.down('md')]: {
      margin: '20px 0px'
    }
  },
  buttonTabs: {
    padding: '18px 0px'
  },
  avatarLarge: {
    width: '62px',
    height: '62px',
    marginRight: theme.spacing(2)
  },
  extraBottompadding: {
    paddingBottom: '16px'
  }
}));

export default function BlogHead({ blogHead }) {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.mainHead} variant="h1">
        What you are Seeking,
      </Typography>
      <Typography className={classes.mainHead} variant="h1">
        Is Seeking You!!
      </Typography>
      <Box style={{ padding: '24px 0px 80px' }}>
        <ButtonTabs />
      </Box>
      <Link to="/blog/0" style={{ textDecoration: 'none', color: '#000' }}>
        <Grid container>
          <Grid container item md={6} justify="space-between">
            <Grid item>
              <Typography
                className={classes.extraBottompadding}
                variant="h6"
                color="secondary"
              >
                {blogHead.categories[0]}
              </Typography>
              <Typography className={classes.extraBottompadding} variant="h3">
                {blogHead.title}
              </Typography>
              <Typography
                className={classes.extraBottompadding}
                dangerouslySetInnerHTML={{
                  __html:
                    blogHead.description
                      .match(/<p>([^<]+)<\/p>/)
                      .toString()
                      .substring(0, 120) + '...'
                }}
              />
              <Typography variant="caption">
                Jun 18, 2019 | 7 min Read
              </Typography>
            </Grid>
            <Grid
              item
              className={classes.author}
              justify="flex-end"
              alignContent="flex-end"
              alignItems="flex-end"
            >
              <Box display="flex" alignItems="center">
                <Avatar
                  className={classes.avatarLarge}
                  alt=""
                  width="50px"
                  src="/static/images/members/kunal.png"
                />
                <Box display="flex" flexDirection="column">
                  <Box fontWeight="fontWeightBold">
                    <Typography variant="h6">{blogHead.author}</Typography>
                    <Typography variant="caption">Learner</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid item md={6} style={{ textAlign: 'center' }}>
            <img
              src={blogHead.thumbnail}
              alt="blog"
              height="100%"
              width="100%"
            />
          </Grid>
        </Grid>
      </Link>
    </Container>
  );
}
