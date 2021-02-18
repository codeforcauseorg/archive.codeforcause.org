import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  btn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'rgba(166, 0, 0, 0.8)'
    }
  }
}));

export default function ApplyModal({
  course,
  batch,
  fullWidth = false,
  ...rest
}) {
  const classes = useStyles();

  const handleClickOpen = () => {
    window.open(batch.priceId);
  };

  return (
    <div>
      <Button
        className={classes.btn}
        size="large"
        variant="contained"
        onClick={handleClickOpen}
        {...rest}
        fullWidth={fullWidth}
      >
        Register Now
      </Button>
    </div>
  );
}
