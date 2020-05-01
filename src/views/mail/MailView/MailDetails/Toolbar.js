import React from 'react';
import { useHistory, useParams } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Hidden,
  IconButton,
  Input,
  Paper,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
    height: 68,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center'
  },
  searchInput: {
    marginLeft: theme.spacing(2),
    flexGrow: 1
  }
}));

function Toolbar({ className, ...rest }) {
  const classes = useStyles();
  const history = useHistory();
  const { systemLabel, customLabel } = useParams();

  const handleBack = () => {
    if (systemLabel) {
      return history.push(`/app/mail/${systemLabel}`);
    }

    if (customLabel) {
      return history.push(`/app/mail/label/${customLabel}`);
    }

    return history.push('/app/mail/inbox');
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Tooltip title="Back">
        <IconButton onClick={handleBack}>
          <ArrowBackIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Box flexGrow={1} />
      <Hidden mdDown>
        <Paper
          component={Box}
          display="flex"
          alignItems="center"
          variant="outlined"
          py={0.5}
          px={1}
          mr={2}
        >
          <SearchIcon color="action" />
          <Input
            className={classes.searchInput}
            disableUnderline
            placeholder="Search message"
          />
        </Paper>
      </Hidden>
      <Tooltip title="Previous mail">
        <IconButton>
          <KeyboardArrowLeftIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Next mail">
        <IconButton>
          <KeyboardArrowRightIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </div>
  );
}

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
