import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSnackbar } from 'notistack';
import { Box, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { getBoard, moveCard } from 'src/actions/kanbanActions';
import Header from './Header';
import List from './List';
import ListAdd from './ListAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'auto'
  },
  inner: {
    display: 'flex',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

function KanbanView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { lists, isLoaded } = useSelector((state) => state.kanban);
  const { enqueueSnackbar } = useSnackbar();

  const handleDragEnd = async ({ source, destination, draggableId }) => {
    try {
    // Dropped outside the list
      if (!destination) {
        return;
      }

      // Card has not been moved
      if (source.droppableId === destination.droppableId
        && source.index === destination.index
      ) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
      // Moved to the same list on diferent position
        await dispatch(moveCard(draggableId, destination.index));
      } else {
      // Moved to another list
        await dispatch(moveCard(draggableId, destination.index, destination.droppableId));
      }

      enqueueSnackbar('Card moved', {
        variant: 'success'
      });
    } catch (error) {
      //
    }
  };

  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);

  if (!isLoaded) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Kanban Board"
    >
      <Box p={3}>
        <Header />
      </Box>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={classes.content}>
          <div className={classes.inner}>
            {lists.allIds.map((listId) => (
              <List
                className={classes.list}
                key={listId}
                listId={listId}
              />
            ))}
            <ListAdd />
          </div>
        </div>
      </DragDropContext>
    </Page>
  );
}

export default KanbanView;
