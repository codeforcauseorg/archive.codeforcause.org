import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  makeStyles,
  TextField
} from '@material-ui/core';
import { addCheckItem } from 'src/actions/kanbanActions';

const useStyles = makeStyles(() => ({
  root: {}
}));

function CheckItemAdd({
  card,
  checklist,
  className,
  ...rest
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [isExpanded, setExpanded] = useState(false);

  const handleAdd = () => {
    setExpanded(true);
  };

  const handleCancel = () => {
    setExpanded(false);
    setName('');
  };

  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleSave = async () => {
    try {
      if (!name) {
        return;
      }

      await dispatch(addCheckItem(card.id, checklist.id, name));
      setExpanded(false);
      setName('');
      enqueueSnackbar('Check item added', {
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
        <div>
          <TextField
            fullWidth
            onChange={handleChange}
            placeholder="Add an item"
            value={name}
            variant="outlined"
          />
          <Box mt={1}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
              size="small"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Box>
        </div>
      ) : (
        <Button
          variant="outlined"
          size="small"
          onClick={handleAdd}
        >
          Add an item
        </Button>
      )}
    </div>
  );
}

CheckItemAdd.propTypes = {
  card: PropTypes.object.isRequired,
  checklist: PropTypes.object.isRequired,
  className: PropTypes.string
};

CheckItemAdd.defaultProps = {
  className: ''
};

export default CheckItemAdd;
