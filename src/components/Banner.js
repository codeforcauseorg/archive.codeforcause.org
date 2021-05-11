import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
    height: 'auto'
  }
}));

function Banner() {
  const classes = useStyles();
  return (
    <Box>
      <img
        className={classes.image}
        src="/static/banner/forWebsiteHighResolution.jpg"
        alt="Banner"
      />
    </Box>
  );
}

export default Banner;
