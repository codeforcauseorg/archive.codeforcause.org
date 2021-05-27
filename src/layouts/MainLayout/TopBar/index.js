import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Box,
  Hidden,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';
import Item from './Item';
import Account from './Account';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { HashLink as Link } from 'react-router-hash-link';
import LoginDialog from './LoginDialog';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    backgroundColor: theme.palette.background.default,
    paddingLeft: 70,
    paddingRight: 70,
    top: 'auto',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  toolbar: {
    minHeight: 64,
    maxHeight: 64
  },
  menuButton: {
    float: 'right',
    color: '#000',
    marginRight: '0px'
  },
  drawer: {
    minHeight: '-webkit-fill-available',
    backgroundColor: theme.palette.background.default
  },
  drawerHeader: {
    width: '100%',
    minHeight: '64px',
    display: 'flex',
    alignItems: 'center'
  },
  closeButton: {
    marginLeft: 'auto',
    marginRight: '14px',
    color: '#000'
  },
  drawerBody: {
    maxWidth: '100vw',
    minHeight: '-webkit-fill-available',
    display: 'flex',
    flexDirection: 'column'
  },
  drawerList: {
    padding: '0',
    transform: 'translateY(-2%)'
  },
  drawerListItem: {
    width: '100vw',
    display: 'flex',
    padding: '0',
    margin: '8px 0px 8px 0px'
  },
  drawerListItemImage: {
    width: '175px'
  },
  drawerTextStyle: {
    fontStyle: 'italic',
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: theme.palette.text.primary
  },
  border: {
    borderBottom: '1px solid black'
  },
  // images on right side and text on the left
  drawerListItemRight: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 10px 0 20px'
  },
  drawerListItemRightText: {
    width: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  // images on left side and text on the right
  drawerListItemLeft: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    padding: '0 20px 0 10px'
  },
  drawerListItemLeftText: {
    width: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'right'
  }
}));

function TopBar({ className, onMobileNavOpen, ...rest }) {
  const classes = useStyles();
  const user = useSelector(state => state.account.user);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const pathname = window.location.pathname;

  const navItems = [
    {
      title: 'Special Offers',
      subtitle: 'For You',
      link: '/#special-offers',
      image: '/static/images/nav/offers.jpg'
    },
    {
      title: 'Campus Leader',
      subtitle: 'Become A',
      link: '/campusLeaders',
      image: '/static/images/nav/campus-leader.jpg'
    },
    {
      title: 'Events',
      subtitle: 'Upcoming',
      link: '/events',
      image: '/static/images/nav/events.jpg'
    },
    {
      title: 'Courses',
      subtitle: 'Learn and Earn',
      link: '/courses',
      image: '/static/images/nav/courses.jpg'
    }
  ];

  const drawerHeader = () => (
    <div className={classes.drawerHeader}>
      <RouterLink
        to="/"
        onClick={toggleDrawer('right', false)}
        style={{ marginLeft: '25px', marginTop: '10px' }}
      >
        <Logo className={classes.logo} />
      </RouterLink>
      <IconButton
        edge="end"
        className={classes.closeButton}
        aria-label="close"
        onClick={toggleDrawer('right', false)}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );

  const drawerTextList = (item, index) => {
    switch (index) {
      case 0:
        return (
          <div>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="subtitle2">{item.subtitle}</Typography>
            <div className={classes.border} style={{ width: '55px' }} />
          </div>
        );
      case 1:
        return (
          <div>
            <Typography variant="subtitle2">{item.subtitle}</Typography>
            <Typography variant="h5">{item.title}</Typography>
            <div
              className={classes.border}
              style={{ width: '150px', marginLeft: 'auto' }}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Typography variant="subtitle2">{item.subtitle}</Typography>
            <Typography variant="h5">{item.title}</Typography>
            <div className={classes.border} style={{ width: '55px' }} />
          </div>
        );
      default:
        return (
          <div>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="subtitle2">{item.subtitle}</Typography>
            <div
              className={classes.border}
              style={{ width: '140px', marginLeft: 'auto' }}
            />
          </div>
        );
    }
  };

  const drawerItemList = () => (
    <div className={classes.drawerBody}>
      <List className={classes.drawerList}>
        {navItems.map((item, index) => {
          return (
            <ListItem key={index} className={classes.drawerListItem}>
              <Link
                smooth
                to={item.link}
                className={classes.drawerTextStyle}
                onClick={toggleDrawer('right', false)}
                onKeyDown={toggleDrawer('right', false)}
              >
                {index % 2 === 0 ? (
                  <div className={classes.drawerListItemRight}>
                    <div className={classes.drawerListItemRightText}>
                      {drawerTextList(item, index)}
                    </div>
                    <img
                      className={classes.drawerListItemImage}
                      alt={item.title}
                      src={item.image}
                    />
                  </div>
                ) : (
                  <div className={classes.drawerListItemLeft}>
                    <img
                      className={classes.drawerListItemImage}
                      alt={item.title}
                      src={item.image}
                    />
                    <div className={classes.drawerListItemLeftText}>
                      {drawerTextList(item, index)}
                    </div>
                  </div>
                )}
              </Link>
            </ListItem>
          );
        })}
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
        <RouterLink to="/">
          <Logo className={classes.logo} />
        </RouterLink>
        <Hidden smDown>
          <Box ml={2} flexGrow={1} />
          {navItems.map((item, index) => {
            return (
              <Item
                key={index}
                active={item.link === pathname}
                title={item.title}
                link={item.link}
              />
            );
          })}
          <Box ml={2} flexGrow={0.05} />
          <Box ml={2}>
            <LoginDialog />
            <Account />
          </Box>
          <Box ml={2} flexGrow={0.05} />
        </Hidden>
        <Hidden mdUp>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            style={{ position: 'absolute', right: '0px' }}
          >
            <LoginDialog />
            {user ? <Account /> : <div />}
            <IconButton
              edge="end"
              className={classes.menuButton}
              aria-label="menu"
              onClick={toggleDrawer('right', true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Drawer
            width="100vw"
            anchor="right"
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            <div className={classes.drawer}>
              {drawerHeader()}
              {drawerItemList()}
              {!user ? <Account /> : <div />}
            </div>
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
