import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import OpenSource from './OpenSource';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    backgroundColor: theme.palette.background.default,
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  toolbar: {
    minHeight: 64
  },
  menuButton: {
    float: 'right',
    color: '#000',
    marginRight: '0px'
  },
  list: {
    width: '100% !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    textDecoration: 'none'
  }
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        <Hidden smDown>
          <Box ml={2} flexGrow={1} />
          <Box ml={2} flexGrow={0.05} />

          <Box ml={2}>
            <OpenSource />
          </Box>
          <Box ml={2} flexGrow={0.05} />

        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
