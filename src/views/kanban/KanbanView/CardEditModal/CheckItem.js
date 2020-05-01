import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Trash as TrashIcon } from 'react-feather';
import {
  updateCheckItem,
  deleteCheckItem
} from 'src/actions/kanbanActions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'flex-start',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: theme.palette.background.dark,
      '& $deleteButton': {
        visibility: 'visible'
      }
    }
  },
  checkbox: {
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(1)
  },
  name: {
    flexGrow: 1,
    cursor: 'pointer',
    minHeight: 32
  },
  deleteButton: {
    visibility: 'hidden'
  }
}));

function CheckItem({
  card,
  checklist,
  checkItem,
  className,
  editing,
  onEditCancel,
  onEditInit,
  onEditComplete,
  ...rest
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState(checkItem.name);

  const handleStateChange = async (event) => {
    try {
      event.persist();

      const state = event.target.checked ? 'complete' : 'incomplete';

      await dispatch(updateCheckItem(
        card.id,
        checklist.id,
        checkItem.id,
        { state }
      ));
      enqueueSnackbar('Check item updated', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  };

  const handleNameChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleSave = async () => {
    try {
      await dispatch(updateCheckItem(
        card.id,
        checklist.id,
        checkItem.id,
        { name }
      ));
      onEditComplete();
      enqueueSnackbar('Check item added', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  };

  const handleCancel = () => {
    setName(checkItem.name);
    onEditCancel();
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteCheckItem(
        card.id,
        checklist.id,
        checkItem.id
      ));
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
      <Checkbox
        checked={checkItem.state === 'complete'}
        onChange={handleStateChange}
        className={classes.checkbox}
      />
      {editing ? (
        <Box flexGrow={1}>
          <TextField
            value={name}
            variant="outlined"
            fullWidth
            onChange={handleNameChange}
          />
          <Box mt={1}>
            <Button
              size="small"
              variant="contained"
              color="secondary"
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
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
        >
          <Typography
            onClick={onEditInit}
            color="textPrimary"
            variant="body1"
            className={classes.name}
          >
            {checkItem.name}
          </Typography>
          <IconButton
            onClick={handleDelete}
            className={classes.deleteButton}
          >
            <SvgIcon fontSize="small">
              <TrashIcon />
            </SvgIcon>
          </IconButton>
        </Box>
      )}
    </div>
  );
}

CheckItem.propTypes = {
  card: PropTypes.object.isRequired,
  checklist: PropTypes.object.isRequired,
  checkItem: PropTypes.object.isRequired,
  className: PropTypes.string,
  editing: PropTypes.bool,
  onEditCancel: PropTypes.func,
  onEditComplete: PropTypes.func,
  onEditInit: PropTypes.func
};

CheckItem.defaultProps = {
  editing: false,
  onEditCancel: () => {},
  onEditComplete: () => {},
  onEditInit: () => {}
};

export default CheckItem;
