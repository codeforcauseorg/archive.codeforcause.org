/* eslint-disable no-shadow */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import {
  Droppable,
  Draggable
} from 'react-beautiful-dnd';
import {
  Box,
  ClickAwayListener,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  SvgIcon,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import { MoreVertical as MoreIcon } from 'react-feather';
import {
  deleteList,
  clearList,
  updateList
} from 'src/actions/kanbanActions';
import Card from './Card';
import CardAdd from './CardAdd';

function selectList(state, listId) {
  const { lists } = state.kanban;

  return lists.byId[listId];
}

const useStyles = makeStyles((theme) => ({
  root: {},
  inner: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100%',
    overflowY: 'hidden',
    overflowX: 'hidden',
    width: 380,
    [theme.breakpoints.down('xs')]: {
      width: 300
    }
  },
  title: {
    cursor: 'pointer'
  },
  droppableArea: {
    flexGrow: 1,
    overflowY: 'auto',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  menu: {
    width: 240
  }
}));

function List({
  className,
  listId,
  ...rest
}) {
  const classes = useStyles();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const list = useSelector((state) => selectList(state, listId));
  const dispatch = useDispatch();
  const moreRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState(list.name);
  const [isRenaming, setRenaming] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleRenameInit = () => {
    setRenaming(true);
    setMenuOpen(false);
  };

  const handleRename = async () => {
    try {
      if (!name) {
        setName(list.name);
        setRenaming(false);
        return;
      }

      const update = { name };

      setRenaming(false);
      await dispatch(updateList(list.id, update));
      enqueueSnackbar('List updated', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  };

  const handleDelete = async () => {
    try {
      setMenuOpen(false);
      await dispatch(deleteList(list.id));
      enqueueSnackbar('List deleted', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  };

  const handleClear = async () => {
    try {
      setMenuOpen(false);
      await dispatch(clearList(list.id));
      enqueueSnackbar('List cleared', {
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
      <Paper className={classes.inner}>
        <Box
          py={1}
          px={2}
          display="flex"
          alignItems="center"
        >
          {isRenaming ? (
            <ClickAwayListener onClickAway={handleRename}>
              <TextField
                value={name}
                onBlur={handleRename}
                onChange={handleChange}
                variant="outlined"
                margin="dense"
              />
            </ClickAwayListener>
          ) : (
            <Typography
              color="inherit"
              variant="h5"
              className={classes.name}
              onClick={handleRenameInit}
            >
              {list.name}
            </Typography>
          )}
          <Box flexGrow={1} />
          <IconButton
            color="inherit"
            edge="end"
            variant="contained"
            onClick={handleMenuOpen}
            ref={moreRef}
          >
            <SvgIcon fontSize="small">
              <MoreIcon />
            </SvgIcon>
          </IconButton>
        </Box>
        <Divider />
        <Droppable
          droppableId={list.id}
          type="card"
        >
          {(provided) => (
            <Box
              minHeight={80}
              ref={provided.innerRef}
              className={classes.droppableArea}
            >
              {list.cardIds.map((cardId, index) => (
                <Draggable
                  draggableId={cardId}
                  index={index}
                  key={cardId}
                >
                  {(provided, snapshot) => (
                    <Card
                      cardId={cardId}
                      dragging={snapshot.isDragging}
                      index={index}
                      key={cardId}
                      list={list}
                      ref={provided.innerRef}
                      style={{ ...provided.draggableProps.style }}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
        <Divider />
        <Box p={2}>
          <CardAdd listId={list.id} />
        </Box>
        <Menu
          keepMounted
          anchorEl={moreRef.current}
          open={isMenuOpen}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          PaperProps={{ className: classes.menu }}
          getContentAnchorEl={null}
        >
          <MenuItem onClick={handleRenameInit}>
            Rename
          </MenuItem>
          <MenuItem onClick={handleClear}>
            Clear
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            Delete
          </MenuItem>
        </Menu>
      </Paper>
    </div>
  );
}

List.propTypes = {
  className: PropTypes.string,
  listId: PropTypes.string.isRequired
};

export default List;
