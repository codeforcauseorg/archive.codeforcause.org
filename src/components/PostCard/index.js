import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { Lightbox } from 'react-modal-image';
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Divider,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Reactions from './Reactions';
import Comment from './Comment';
import CommentAdd from './CommentAdd';

const useStyles = makeStyles(() => ({
  root: {},
  date: {
    marginLeft: 6
  },
  media: {
    height: 500,
    backgroundPosition: 'top'
  }
}));

function PostCard({ className, post, ...rest }) {
  const classes = useStyles();
  const [openedFile, setOpenedFile] = useState(null);

  return (
    <>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardHeader
          avatar={(
            <Avatar
              alt="Person"
              className={classes.avatar}
              component={RouterLink}
              src={post.author.avatar}
              to="#"
            />
          )}
          disableTypography
          subheader={(
            <Box
              display="flex"
              alignItems="center"
            >
              <AccessTimeIcon fontSize="small" />
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.date}
              >
                {moment(post.createdAt).fromNow()}
              </Typography>
            </Box>
          )}
          title={(
            <Link
              color="textPrimary"
              component={RouterLink}
              to="#"
              variant="h6"
            >
              {post.author.name}
            </Link>
          )}
        />
        <Box px={3} pb={2}>
          <Typography
            variant="body1"
            color="textPrimary"
          >
            {post.message}
          </Typography>
          {post.media && (
          <Box mt={2}>
            <CardActionArea onClick={() => setOpenedFile(post.media)}>
              <CardMedia
                className={classes.media}
                image={post.media}
              />
            </CardActionArea>
          </Box>
          )}
          <Box
            mt={2}
          >
            <Reactions post={post} />
          </Box>
          <Box my={2}>
            <Divider />
          </Box>
          {post.comments.map((comment) => (
            <Comment
              comment={comment}
              key={comment.id}
            />
          ))}
          <Box my={2}>
            <Divider />
          </Box>
          <CommentAdd />
        </Box>
      </Card>
      {openedFile && (
        <Lightbox
          large={openedFile}
          onClose={() => setOpenedFile(null)}
        />
      )}
    </>
  );
}

PostCard.propTypes = {
  className: PropTypes.string,
  post: PropTypes.object.isRequired
};

export default PostCard;
