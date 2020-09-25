import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  btn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    '&:hover': {
      backgroundColor: 'rgba(166, 0, 0, 0.8)'
    }
  }
}));

function ButtonComponent({ className, title, icon, ...rest }) {
  const classes = useStyles();
  return (
    <Button className={clsx(classes.btn, className)} {...rest}>
      {icon}
      {title}
    </Button>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string
};

export default ButtonComponent;
