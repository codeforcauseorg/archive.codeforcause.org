import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { AppBar, Box, Hidden, Toolbar, makeStyles } from '@material-ui/core';
import Logo from 'src/components/Logo';
import Item from './Item';
import OpenSource from './OpenSource';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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
    width: '100% !important'
  }
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
    >
      <List>
        {['About Us', 'Test', 'Our Team'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <AppBar className={clsx(classes.root, className)} {...rest}>
      <Toolbar className={classes.toolbar}>
        {/* <Hidden mdDown> */}
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        {/* </Hidden> */}
        <Hidden smDown>
          <Box ml={2} flexGrow={1} />
          <Item title="About" />
          <Item title="Team" />
          <Item title="Our Process" />
          <Item title="Courses" />
          <Box ml={2} flexGrow={0.05} />
          <Box ml={2}>
            <OpenSource />
          </Box>
          <Box ml={2} flexGrow={0.05} />
        </Hidden>
        <Hidden mdUp>
          <Box ml={8}>
            <IconButton
              edge="end"
              className={classes.menuButton}
              aria-label="menu"
              onClick={toggleDrawer('right', true)}
              style={{ position: 'absolute', right: '15px', top: '15%' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer
            anchor="right"
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list()}
          </Drawer>
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
