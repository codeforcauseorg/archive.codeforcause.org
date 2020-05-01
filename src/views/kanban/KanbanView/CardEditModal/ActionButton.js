import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  SvgIcon,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'flex-start',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1)
  }
}));

function ActionButton({
  icon: Icon,
  children,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      fullWidth
      variant="contained"
      size="small"
      {...rest}
    >
      {Icon && (
        <SvgIcon
          fontSize="small"
          className={classes.icon}
        >
          <Icon />
        </SvgIcon>
      )}
      {children}
    </Button>
  );
}

ActionButton.propTypes = {
  icon: PropTypes.any,
  children: PropTypes.any
};

export default ActionButton;
