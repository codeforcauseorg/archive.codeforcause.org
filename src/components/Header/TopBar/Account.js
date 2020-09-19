import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';

import {
  Typography,
  Dialog,
  DialogContent,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem
} from '@material-ui/core';
import authService from 'src/services/authService';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { login, dismissLogin, logout } from 'src/actions/accountActions';

function Account() {
  const user = useSelector(state => state.account.user);
  const loginFlag = useSelector(state => state.account.login);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleLogout = () => {
    handleCloseMenu();
    dispatch(logout());
    dispatch(dismissLogin());
  };

  const handleClose = () => {
    dispatch(dismissLogin());
  };

  const handleLoginOpen = () => {
    dispatch(login());
  };

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const truncate = input => {
    const first = input.split(' ')[0];
    if (first.length > 13) {
      return first.substring(0, 10) + '...';
    }
    return first;
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 64
      }}
    >
      <div
        style={{
          padding: '10% 10px',
          whiteSpace: 'nowrap',
          color: '#000000'
        }}
      >
        {!!user ? (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            onClick={handleOpenMenu}
            style={{
              cursor: "pointer"
            }}
          >
            <Avatar
              style={{
                height: '35px',
                width: 'auto',
                marginRight: '16px'
              }}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  style={{
                    height: '35px'
                  }}
                />
              ) : (
                <PersonIcon
                  style={{
                    height: '35px',
                    width: '35px',
                    padding: '5px'
                  }}
                />
              )}
            </Avatar>

            <Typography variant="h6">
              <Box
                style={{
                  color: '#A60000'
                }}
              >
                {`Hello ${truncate(user.displayName)}`}
              </Box>
            </Typography>
          </Box>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleLoginOpen}
            style={{
              textTransform: 'capitalize'
            }}
          >
            <Typography variant="h6">Login / Sign Up</Typography>
          </Button>
        )}

        <Dialog
          open={!user && !!loginFlag}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent
            style={{
              background: '#E2E9FF'
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              mt={2}
              mb={2}
            >
              <Typography
                variant="h3"
                style={{
                  marginBottom: '8px'
                }}
              >
                Login / Sign Up
              </Typography>

              <Typography variant="body2">Explore learning with</Typography>

              <Typography
                variant="body2"
                style={{
                  marginBottom: '12px'
                }}
              >
                Open Source
              </Typography>

              <StyledFirebaseAuth
                uiConfig={authService.uiConfig}
                firebaseAuth={authService.firebase.auth()}
              />
            </Box>
          </DialogContent>
        </Dialog>

        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          keepMounted
          open={!!anchorEl}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Account;
