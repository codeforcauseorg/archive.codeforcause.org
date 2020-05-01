import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import {
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Tooltip,
  Typography,
  makeStyles
} from '@material-ui/core';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Label from 'src/components/Label';

const getLabel = (todo) => {
  if (todo.done) {
    return null;
  }

  if (moment(todo.deadline).isBefore(moment(), 'day')) {
    return (
      <Label color="error">
        {`Due ${moment(todo.deadline).fromNow()}`}
      </Label>
    );
  }

  if (moment(todo.deadline).isSame(moment(), 'day')) {
    return (
      <Label color="warning">
        Due today
      </Label>
    );
  }

  return (
    <Label>
      {`Due ${moment(todo.deadline).fromNow()}`}
    </Label>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
  done: {
    textDecoration: 'line-through',
    color: theme.palette.text.secondary
  }
}));

function Todos({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [todos, setTodos] = useState();

  const handleChange = (event, todo) => {
    event.persist();

    setTodos((prevTodos) => prevTodos.map((prevTodo) => {
      if (prevTodo.id === todo.id) {
        return {
          ...todo,
          done: !todo.done
        };
      }

      return prevTodo;
    }));
  };

  const getTodos = useCallback(() => {
    axios
      .get('/api/projects/account/todos')
      .then((response) => {
        if (isMountedRef.current) {
          setTodos(response.data.todos);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  if (!todos) {
    return null;
  }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Button
            color="secondary"
            size="small"
          >
            Add Todo
          </Button>
        )}
        title="Todos"
      />
      <Divider />
      <List>
        {todos.map((todo, i) => (
          <ListItem
            divider={i < todos.length - 1}
            key={todo.id}
          >
            <ListItemIcon>
              <Radio
                checked={todo.done}
                onClick={(event) => handleChange(event, todo)}
              />
            </ListItemIcon>
            <ListItemText>
              <Typography
                className={clsx({
                  [classes.done]: todo.done
                })}
                variant="body2"
                color="textSecondary"
              >
                {todo.title}
              </Typography>
            </ListItemText>
            {getLabel(todo)}
            <Tooltip title="Archive">
              <IconButton>
                <ArchiveIcon />
              </IconButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

Todos.propTypes = {
  className: PropTypes.string
};

export default Todos;
