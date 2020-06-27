import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const backgroundColor = '#350070';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '40px',
  },

  avatar: {
    borderRadius: 70,
    width: 70,
    maxWidth: 70,
    maxHeight: 70,
    height: 70,
    marginRight: 15,
    backgroundColor
  },
}));

const SubCard = ({ description }) => {
  const classes = useStyles();
  return (
    <Grid
      alignItems="flex-start"
      container
      justify="flex-start"
      className={classes.root}
    >
      <Grid className={classes.avatar} />
      <Grid
        item
        xs={8}
        alignItems="flex-start"
        container
        justify="flex-start"
      >
        <Typography
          variant="subtitle2"
        >
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SubCard;
