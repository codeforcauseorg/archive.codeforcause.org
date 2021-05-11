import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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

  const theme = createMuiTheme({
    palette: {
      action: {
        disabledBackground: '#A60000',
        disabled: '	#C0C0C0'
      }
    }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          className={classes.btn}
          disabled={!course.enabled}
          size="large"
          variant="contained"
          onClick={handleClickOpen}
          {...rest}
          fullWidth={fullWidth}
        >
          {course.enabled ? 'Register Now' : 'Applications Closed'}
        </Button>
      </ThemeProvider>
    </div>
  );
}
