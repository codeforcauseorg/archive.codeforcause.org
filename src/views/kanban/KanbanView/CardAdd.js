import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  TextField,
  makeStyles
} from '@material-ui/core';
import { createCard } from 'src/actions/kanbanActions';

const useStyles = makeStyles(() => ({
  root: {}
}));

function CardAdd({ className, listId, ...rest }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [isExpanded, setExpanded] = useState(false);
  const [name, setName] = useState('');

  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleAddInit = () => {
    setExpanded(true);
  };

  const handleAddCancel = () => {
    setExpanded(false);
    setName('');
  };

  const handleAddConfirm = async () => {
    try {
      await dispatch(createCard(listId, name || 'Untitled Card'));
      setExpanded(false);
      setName('');
      enqueueSnackbar('Card created', {
        variant: 'success'
      });
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
      {isExpanded ? (
        <>
          <TextField
            fullWidth
            label="Card Title"
            name="cardName"
            onChange={handleChange}
            value={name}
            variant="outlined"
          />
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
          >
            <Button
              onClick={handleAddCancel}
              variant="text"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddConfirm}
              variant="contained"
              color="secondary"
            >
              Add
            </Button>
          </Box>
        </>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Button onClick={handleAddInit}>
            Add another card
          </Button>
        </Box>
      )}
    </div>
  );
}

CardAdd.propTypes = {
  className: PropTypes.string,
  listId: PropTypes.string.isRequired
};

CardAdd.defaultProps = {
  className: ''
};

export default CardAdd;
