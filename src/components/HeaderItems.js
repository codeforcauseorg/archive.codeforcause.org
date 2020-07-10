import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Box, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  textStyle: {
    color: 'black',
    position: 'relative',
    fontColor: 'blue',
    display: 'flex',
    padding: ' 19px 19px',
    textDecoration: 'none',
    '&:hover': {
      position: 'relative',
      top: '2px',
      
      borderBottom: '4px solid #A60000'
    }
  }
}));

const HeaderItem = ({ title, link }) => {
  const classes = useStyles();
  return (
    <Box ml={2}>
      <Link
        smooth
        to={link}
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
