import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { AppBar, Box, Toolbar, makeStyles } from '@material-ui/core';
import Logo from 'src/components/Logo';
import Account from './Account';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    minHeight: 64
  },
  logo: {
    borderRadius: '50%',
    border: `1px solid ${theme.palette.divider}`
  }
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        {/* <Hidden mdDown> */}
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        {/* </Hidden> */}
        <Box ml={2} flexGrow={1} />
        {/* <Search /> */}
        {/* <Contacts /> */}
        {/* <Notifications /> */}
        {/* <Settings /> */}
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
