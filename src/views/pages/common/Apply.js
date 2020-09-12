import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Grid,
  Typography,
  makeStyles,
  TextField,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '350px',
    color: '#FFF',
    padding: '100px 70px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    color: '#FFF'
  },
  btn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    '&:hover': {
      backgroundColor: 'rgba(166, 0, 0, 0.8)'
    }
  },
  applyleft: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textDetails: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.2)'
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.4)'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.6)'
      }
    }
  }
}));

function Apply({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      style={{
        backgroundImage: 'url("/static/events/apply.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      {...rest}
    >
      <Grid container maxWidth="lg">
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          className={classes.applyleft}
        >
          <div className={classes.main}>
            <Typography
              variant="h3"
              style={{
                marginBottom: '24px'
              }}
            >
              Tell Us What You Want To Learn Next
            </Typography>
            <TextField
              className={classes.textDetails}
              multiline
              variant="outlined"
              rows={5}
              style={{
                minWidth: '500px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '5px',
                color: 'white'
              }}
            />
            <Box mt={3}>
              <Button color="secondary" size="large" variant="contained">
                Submit
              </Button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Apply.propTypes = {
  className: PropTypes.string
};

export default Apply;
