import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Container,
  Typography,
  makeStyles,
  Grid,
  Button,
  CircularProgress
} from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '300px',
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
  textField: {
    marginBottom: '20px',
    marginTop: '8px',
    backgroundColor: '#ECECEC',
    borderBlockColor: 'green',
    borderColor: 'green',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ECECEC'
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0px'
    }
  },
  extraPadding: {
    [theme.breakpoints.down('md')]: {
      marginTop: '12px'
    }
  }
}));

function Hero({
  title,
  subtitle,
  subtitleDesign,
  className, // className
  backgroundImage = null, // Link to the  background image if any
  component = null, // The Button or any component provided
  ...rest
}) {
  const classes = useStyles();

  return (
    <div>
      <div
        className={clsx(classes.root, className)}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        {...rest}
      >
        <Container maxWidth="lg">
          <div className={classes.main}>
            <Typography variant="h2">{title}</Typography>
            <Box mt={2}>
              <Typography className={subtitleDesign} variant="body1">
                {subtitle}
              </Typography>
            </Box>
            <Box mt={2}>{component != null ? component : <></>}</Box>
          </div>
          <Form />
          <Typography
            display="block"
            className={classes.extraPadding}
            variant="caption"
          >
            By clicking ‘subscribe’ , I agree to Code For Cause’s Terms &
            Privacy Policy.
          </Typography>
        </Container>
      </div>
    </div>
  );
}

function Form() {
  const classes = useStyles();
  const [formData, updateFormData] = useState({});
  const [submitting, setSubmitting] = useState(0);

  //   const { enqueueSnackbar } = useSnackbar();

  const handleChange = event => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    setSubmitting(1);
    e.preventDefault();
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <Typography variant="caption">Email Id</Typography>
      <Grid container spacing={3} xs={12} sm={12} md={12}>
        <Grid item sm={10} xs={12}>
          <TextValidator
            key="email"
            className={classes.textField}
            variant="outlined"
            value={formData.email}
            fullWidth
            name="email"
            onChange={handleChange}
            validators={['required', 'isEmail']}
            errorMessages={['This is a required field', 'Ender a valid Email']}
          />
        </Grid>
        <Grid item sm={2} xs={12}>
          {submitting === 0 ? (
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              style={{
                marginTop: '7px',
                textTransform: 'capitalize',
                padding: '16.8px'
              }}
            >
              <Typography variant="h6" style={{ fontWeight: 600 }}>
                Subscribe
              </Typography>
            </Button>
          ) : (
            <div className={classes.submissions}>
              <CircularProgress />
            </div>
          )}
        </Grid>
      </Grid>
    </ValidatorForm>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleDesign: PropTypes.string,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

export default Hero;
