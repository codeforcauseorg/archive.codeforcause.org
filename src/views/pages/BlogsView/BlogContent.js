import { Container, Grid, Hidden, makeStyles } from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import axios from 'src/utils/axios';
import BlogHead from './BlogHead';
import BlogItem from './BlogItem';
import SideBar from './SideBar';

const useStyles = makeStyles(theme => ({
  blogText: {
    margin: '0px auto',
    backgroundColor: '#f2f2f2',
    padding: theme.spacing(10, 40, 10),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 20, 10)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 5, 10)
    }
  },
  remaining: {
    margin: '0px auto',
    backgroundColor: '#fff',
    padding: theme.spacing(10, 40, 10),

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 20, 10)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 5, 10)
    }
  },

  extraPadding: {
    padding: '50px 0px'
  },
  paddingTop: {
    padding: '50px auto 100px',
    marginTop: '90px',
    marginBottom: '50px',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 0
    }
  }
}));

export default function BlogContent() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [blog, setBlog] = useState(null);

  const getEvents = useCallback(() => {
    console.log('things started');

    axios
      .get(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/code-for-cause'
      )
      .then(response => {
        if (isMountedRef.current) {
          console.log('d: ' + response.data.items);
          setBlog(response.data.items);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  if (blog === null) {
    return null;
  }

  return (
    <div>
      <BlogHead blogHead={blog[0]} />
      <Container className={classes.paddingTop}>
        <Grid container justify="space-between">
          <Grid item md={8} sm={12}>
            {blog.slice(1, 5).map((item, index) => {
              return (
                <Link
                  to={`blog/${index + 1}`}
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <BlogItem blog={item} />
                </Link>
              );
            })}
          </Grid>
          <Hidden smUp>
            {blog.slice(5, 9).map((item, index) => {
              return (
                <Link
                  to={`blog/${index + 5}`}
                  style={{ textDecoration: 'none', color: '#000' }}
                >
                  <BlogItem blog={item} />
                </Link>
              );
            })}
          </Hidden>
          <Hidden smDown>
            <Grid item md={4}>
              <SideBar blog={blog.slice(5, 9)} />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
}
