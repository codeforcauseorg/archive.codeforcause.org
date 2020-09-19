import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppBar, Box, Toolbar, makeStyles } from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    zIndex: theme.zIndex.drawer + 100,
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  toolbar: {
    height: 64
  },
  link: {
    fontWeight: theme.typography.fontWeightMedium
  }
}));

function TopBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box ml={2} flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
