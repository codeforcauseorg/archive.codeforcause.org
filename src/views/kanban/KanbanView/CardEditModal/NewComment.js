import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  TextField,
  makeStyles
} from '@material-ui/core';
import { addComment } from 'src/actions/kanbanActions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  field: {
    marginLeft: theme.spacing(2)
  }
}));

function NewComment({ cardId, className, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.account);
  const { enqueueSnackbar } = useSnackbar();
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    event.persist();
    setMessage(event.target.value);
  };

  const handleAdd = async (event) => {
    try {
      event.persist();

      if (event.keyCode === 13 && message) {
        await dispatch(addComment(user.id, cardId, message));
        setMessage('');
        enqueueSnackbar('Comment added', {
          variant: 'success'
        });
      }
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Avatar
        alt="Person"
        src={user.avatar}
      />
      <TextField
        fullWidth
        className={classes.field}
        value={message}
        onKeyUp={handleAdd}
        onChange={handleChange}
        placeholder="Write a comment..."
        variant="outlined"
      />
    </div>
  );
}

NewComment.propTypes = {
  cardId: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default NewComment;
