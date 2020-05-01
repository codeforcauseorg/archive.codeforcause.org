import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {
  Drawer,
  Hidden,
  makeStyles
} from '@material-ui/core';
import { closeSidebar } from 'src/actions/chatActions';
import Toolbar from './Toolbar';
import ThreadList from './ThreadList';

const useStyles = makeStyles(() => ({
  drawerDesktopRoot: {
    width: 280,
    flexShrink: 0
  },
  drawerDesktopPaper: {
    position: 'relative'
  },
  drawerMobilePaper: {
    position: 'relative',
    width: 280
  },
  drawerMobileBackdrop: {
    position: 'absolute'
  }
}));

function Sidebar({ containerRef }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const { sidebarOpen } = useSelector((state) => state.chat);

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  useEffect(() => {
    if (sidebarOpen) {
      dispatch(closeSidebar());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <div>
      <Toolbar />
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        <ThreadList />
      </PerfectScrollbar>
    </div>
  );

  return (
    <>
      <Hidden smDown>
        <Drawer
          variant="permanent"
          classes={{
            root: classes.drawerDesktopRoot,
            paper: classes.drawerDesktopPaper
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdUp>
        <Drawer
          variant="temporary"
          open={sidebarOpen}
          onClose={handleCloseSidebar}
          classes={{
            paper: classes.drawerMobilePaper
          }}
          style={{ position: 'absolute', zIndex: 1200 }}
          BackdropProps={{ classes: { root: classes.drawerMobileBackdrop } }}
          ModalProps={{ container: () => containerRef.current }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

Sidebar.propTypes = {
  containerRef: PropTypes.any
};

export default Sidebar;
