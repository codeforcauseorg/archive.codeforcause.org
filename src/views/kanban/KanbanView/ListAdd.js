
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Card,
  TextField,
  makeStyles
} from '@material-ui/core';
import { createList } from 'src/actions/kanbanActions';

const useStyles = makeStyles((theme) => ({
  root: {},
  inner: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 380,
    [theme.breakpoints.down('xs')]: {
      width: 300
    }
  }
}));

function ListAdd({ className, ...rest }) {
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
      await dispatch(createList(name || 'Untitled list'));
      setExpanded(false);
      setName('');
      enqueueSnackbar('List created', {
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
      <Card className={classes.inner}>
        <Box p={2}>
          {isExpanded ? (
            <>
              <TextField
                fullWidth
                label="List Title"
                name="listName"
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
                Add another list
              </Button>
            </Box>
          )}
        </Box>
      </Card>
    </div>
  );
}

ListAdd.propTypes = {
  className: PropTypes.string
};

export default ListAdd;
