import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Grid,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import PostAdd from 'src/components/PostAdd';
import PostCard from 'src/components/PostCard';
import About from './About';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Timeline({
  className,
  user,
  ...rest
}) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [posts, setPosts] = useState(null);

  const getPosts = useCallback(() => {
    axios
      .get('/api/social/users/1/posts')
      .then((response) => {
        if (isMountedRef.current) {
          setPosts(response.data.posts);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
        >
          <About user={user} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={8}
        >
          <PostAdd />
          {posts && posts.map((post) => (
            <Box
              mt={3}
              key={post.id}
            >
              <PostCard post={post} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

Timeline.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default Timeline;
