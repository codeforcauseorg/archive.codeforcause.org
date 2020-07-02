import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  textStyle: {
    color: 'black',
    position: 'relative',
    fontColor: 'blue',
    display: 'flex',
    padding: ' 19px 19px',
    '&:hover': {
      position: 'relative',
      top: '2px',
      textDecoration: 'none',
      borderBottom: '4px solid #A60000'
    }
  }
}));

const HeaderItem = ({ title }) => {
  const classes = useStyles();
  return (
    <Box ml={2}>
      <Link
        component={RouterLink}
        to={title}
        variant="h5"
        className={classes.textStyle}
      >
        <Typography variant="h6" color="textPrimary">
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default HeaderItem;
