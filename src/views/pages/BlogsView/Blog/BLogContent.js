import axios from 'src/utils/axios';
import React, { useCallback, useEffect, useState } from 'react';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Blog from './Blog';
import BlogCard from './BlogCard';
import { Divider, makeStyles, Typography } from '@material-ui/core';
import ButtonTabs from '../ButtonTabs';

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
  }
}));

export default function Blogs() {
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
      <div className={classes.blogText}>
        <Blog rawHtml={blog[7]} />
      </div>
      <div className={classes.remaining}>
        <Typography className={classes.extraPadding} variant="h2">
          Trending Topics
        </Typography>
        <ButtonTabs className={classes.extraPadding} />
        <Typography className={classes.extraPadding} variant="h2">
          More Like This
        </Typography>
        {blog.map((item, index) => {
          return (
            <BlogCard
              title={item.title}
              author={item.author}
              link={item.link}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </div>
      <Divider
        className={classes.divider}
        variant="fullWidth"
        style={{
          padding: '0.5px',
          backgroundColor: '#000',
          width: '80%',
          margin: 'auto'
        }}
      />
    </div>
  );
}
