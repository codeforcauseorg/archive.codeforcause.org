import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Container,
  Hidden,
  IconButton,
  Tooltip,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {},
  cover: {
    position: 'relative',
    height: 460,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:before': {
      position: 'absolute',
      content: '" "',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: 'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)'
    },
    '&:hover': {
      '& $changeButton': {
        visibility: 'visible'
      }
    }
  },
  changeButton: {
    visibility: 'hidden',
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    backgroundColor: colors.blueGrey[900],
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      top: theme.spacing(3),
      bottom: 'auto'
    },
    '&:hover': {
      backgroundColor: colors.blueGrey[900]
    }
  },
  addPhotoIcon: {
    marginRight: theme.spacing(1)
  },
  avatar: {
    border: `2px solid ${theme.palette.common.white}`,
    height: 120,
    width: 120,
    top: -60,
    left: theme.spacing(3),
    position: 'absolute'
  },
  action: {
    marginLeft: theme.spacing(1)
  }
}));

function Header({
  className,
  user,
  ...rest
}) {
  const classes = useStyles();
  const [connectedStatus, setConnectedStatus] = useState(user.connectedStatus);

  const handleConnectToggle = () => {
    setConnectedStatus((prevConnectedStatus) => (prevConnectedStatus === 'not_connected' ? 'pending' : 'not_connected'));
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <div
        className={classes.cover}
        style={{ backgroundImage: `url(${user.cover})` }}
      >
        <Button
          className={classes.changeButton}
          variant="contained"
        >
          <AddPhotoIcon className={classes.addPhotoIcon} />
          Change Cover
        </Button>
      </div>
      <Container maxWidth="lg">
        <Box
          position="relative"
          mt={1}
          display="flex"
          alignItems="center"
        >
          <Avatar
            alt="Person"
            className={classes.avatar}
            src={user.avatar}
          />
          <Box marginLeft="160px">
            <Typography
              variant="overline"
              color="textSecondary"
            >
              {user.bio}
            </Typography>
            <Typography
              variant="h4"
              color="textPrimary"
            >
              {user.name}
            </Typography>
          </Box>
          <Box flexGrow={1} />
          <Hidden smDown>
            {connectedStatus === 'not_connected' && (
              <Button
                onClick={handleConnectToggle}
                size="small"
                variant="outlined"
                className={classes.action}
              >
                Connect
              </Button>
            )}
            {connectedStatus === 'pending' && (
              <Button
                onClick={handleConnectToggle}
                size="small"
                variant="outlined"
                className={classes.action}
              >
                Pending
              </Button>
            )}
            <Button
              color="secondary"
              component={RouterLink}
              size="small"
              to="/app/chat"
              variant="contained"
              className={classes.action}
            >
              Send message
            </Button>
          </Hidden>
          <Tooltip title="More options">
            <IconButton className={classes.action}>
              <MoreIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
};

export default Header;
