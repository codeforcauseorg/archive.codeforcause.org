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
    },
    margin: '4px 8px'
  },
  textField: {
    marginBottom: '16px'
  },
  submissions: {
    width: '80px',
    height: '50px'
  }
}));

export default function ApplyModal({ course, fullWidth = false, ...rest }) {
  const classes = useStyles();

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
          size="large"
          variant="contained"
          onClick={() => {
            window.open(course.link);
          }}
          {...rest}
          fullWidth={fullWidth}
        >
          Register Now
        </Button>
      </ThemeProvider>
    </div>
  );
}
