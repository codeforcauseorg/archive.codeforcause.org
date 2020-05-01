import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useSnackbar } from 'notistack';
import {
  Box,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import { updateCard } from 'src/actions/kanbanActions';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Details({
  card,
  className,
  list,
  ...rest
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleUpdate = _.debounce(async (update) => {
    try {
      await dispatch(updateCard(card.id, update));
      enqueueSnackbar('Card updated', {
        variant: 'success'
      });
    } catch (error) {
      enqueueSnackbar('Ooops!', {
        variant: 'error'
      });
    }
  }, 1000);

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box mt={3}>
        <TextField
          variant="outlined"
          fullWidth
          defaultValue={card.name}
          onChange={(event) => handleUpdate({ name: event.target.value })}
          label="Card Title"
        />
      </Box>
      <Box mt={3}>
        <Typography
          variant="h4"
          color="textPrimary"
        >
          Description
        </Typography>
        <Box mt={2}>
          <TextField
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            onChange={(event) => handleUpdate({ description: event.target.value })}
            placeholder="Leave a message"
            defaultValue={card.description}
          />
        </Box>
      </Box>
    </div>
  );
}

Details.propTypes = {
  card: PropTypes.object.isRequired,
  className: PropTypes.string,
  list: PropTypes.object.isRequired
};

export default Details;
