import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Divider,
  Hidden,
  IconButton,
  SvgIcon,
  Typography,
  makeStyles
} from '@material-ui/core';
import { Menu as MenuIcon } from 'react-feather';
import { openSidebar } from 'src/actions/chatActions';
import MessageAdd from '../MessageAdd';
import Search from './Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.dark
  },
  search: {
    marginLeft: theme.spacing(2)
  }
}));

function ThreadNew() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  return (
    <div className={classes.root}>
      <Hidden mdUp>
        <Box
          px={2}
          py={1}
          bgcolor="background.default"
        >
          <IconButton
            className={classes.menuButton}
            edge="start"
            onClick={handleOpenSidebar}
          >
            <SvgIcon fontSize="small">
              <MenuIcon />
            </SvgIcon>
          </IconButton>
        </Box>
        <Divider />
      </Hidden>
      <Box
        display="flex"
        alignItems="center"
        p={2}
      >
        <Typography
          variant="body1"
          color="textSecondary"
        >
          To:
        </Typography>
        <Search className={classes.search} />
      </Box>
      <Box flexGrow={1} />
      <Divider />
      <MessageAdd disabled />
    </div>
  );
}

export default ThreadNew;
