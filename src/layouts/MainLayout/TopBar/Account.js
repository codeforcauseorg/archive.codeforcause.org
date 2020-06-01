import React, { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import authService from 'src/services/authService';

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 200
  }
}));

function Account() {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const account = useSelector(state => state.account);
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (authService.isAuthenticated()) {
    return (
      <>
        <Box
          display="flex"
          alignItems="center"
          component={ButtonBase}
          onClick={handleOpen}
          ref={ref}
        >
          <Avatar
            alt="User"
            className={classes.avatar}
            src={account.user.avatar}
          />
          {/* <Hidden smDown> */}
          <Typography variant="h6" color="textSecondary">
            {/* Hello happy */}
            Hello {`${account.user.firstName}`}
          </Typography>
          {/* </Hidden> */}
        </Box>
        <Menu
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          keepMounted
          PaperProps={{ className: classes.popover }}
          getContentAnchorEl={null}
          anchorEl={ref.current}
          open={isOpen}
        >
          {/* <MenuItem
          component={RouterLink}
          to="/app/social/profile"
        >
          Profile
        </MenuItem> */}
        {/* <MenuItem
          component={RouterLink}
          to="/app/account"
        >
          Account
        </MenuItem> */}
          <MenuItem onClick={authService.logout}>Logout</MenuItem>
        </Menu>
      </>
    );
  } else {
    return (
      <>
        <Button
          color="secondary"
          component="a"
          variant="contained"
          size="small"
          onClick={authService.login}
        >
          Login
        </Button>
      </>
    );
  }
}

export default Account;
