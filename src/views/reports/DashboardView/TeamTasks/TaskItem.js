import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import StackAvatars from 'src/components/StackAvatars';

const useStyles = makeStyles((theme) => ({
  root: {},
  viewButton: {
    marginLeft: theme.spacing(2)
  }
}));

function TaskItem({ task, className, ...rest }) {
  const classes = useStyles();

  let deadline = 'N/A';
  let critical = false;

  if (task.deadline) {
    const now = moment();
    const deadlineMoment = moment(task.deadline);

    if (deadlineMoment.isAfter(now) && deadlineMoment.diff(now, 'day') < 3) {
      deadline = `${deadlineMoment.diff(now, 'day')} days remaining`;
      critical = true;
    }
  }

  return (
    <ListItem
      className={clsx(
        classes.root,
        { [classes.critical]: critical },
        className
      )}
      {...rest}
    >
      <ListItemText
        className={classes.listItemText}
        primary={task.title}
        primaryTypographyProps={{ variant: 'h6', noWrap: true }}
        secondary={deadline}
      />
      <StackAvatars
        avatars={task.members}
        limit={3}
      />
      <Tooltip title="View task">
        <IconButton
          className={classes.viewButton}
          edge="end"
        >
          <OpenInNewIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
}

TaskItem.propTypes = {
  className: PropTypes.string,
  task: PropTypes.object.isRequired
};

export default TaskItem;
