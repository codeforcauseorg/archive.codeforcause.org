import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  Button,
  CardContent,
  Card
} from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useSnackbar } from 'notistack';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import axios from 'src/utils/axios';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #1D006E 0%, #000000 100%)',
    padding: theme.spacing(10, 10, 10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 0, 10)
    },
    color: '#000000'
  },
  textField: {
    marginBottom: '16px'
  },
  text: {
    marginBottom: '16px'
  },
  actBtn: {
    marginBottom: '16px',
    background: '#F2F7FF',
    color: '#A60000',
    textTransform: 'lowercase',
    '&:hover': {
      backgroundColor: 'rgba(242,247,255, 0.8)'
    }
  }
}));

function Process({ benefits, className, ...rest }) {
  const classes = useStyles();

  const [formData, updateFormData] = useState({});
  const [submitting, setSubmitting] = useState(0);

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = event => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    setSubmitting(1);
    e.preventDefault();
    formData.source = window.location.href;
    axios({
      method: 'post',
      url:
        'https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/enquiries',
      data: formData
    })
      .then(response => {
        setSubmitting(0);
        updateFormData({ name: '', email: '', phone: '' });
        enqueueSnackbar('Request Submitted Successfully.');
      })
      .catch(error => {
        enqueueSnackbar('Request Failed. Please check your connection.');
        setSubmitting(0);
      });
  };

  return (
    <Box className={clsx(classes.root, className)} {...rest}>
      <Typography
        style={{ color: '#ffffff', marginBottom: '40px' }}
        variant="h2"
        align="center"
      >
        Can’t Choose Whats Best For You?
      </Typography>
      <Grid container alignItems="stretch">
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{
            padding: '24px'
          }}
        >
          <Card
            style={{
              padding: '24px',
              borderRadius: '6px',
              background: '#ffffff',
              height: '100%'
            }}
          >
            <CardContent>
              <Typography className={classes.text} variant="h3">
                Request a Consultation
              </Typography>

              <Typography className={classes.text} variant="body1">
                Setup a call with our counsellor and figure out what’s best for
                you.
              </Typography>

              <ValidatorForm onSubmit={handleSubmit}>
                <TextValidator
                  key="name"
                  className={classes.textField}
                  label="Full Name"
                  variant="outlined"
                  value={formData.name}
                  fullWidth
                  name="name"
                  onChange={handleChange}
                  validators={['required']}
                  errorMessages={['This is a required field']}
                />

                <TextValidator
                  key="email"
                  className={classes.textField}
                  label="Email"
                  variant="outlined"
                  value={formData.email}
                  fullWidth
                  name="email"
                  onChange={handleChange}
                  validators={['required', 'isEmail']}
                  errorMessages={[
                    'This is a required field',
                    'Ender a valid Email'
                  ]}
                />

                <TextValidator
                  key="phone"
                  className={classes.textField}
                  label="Contact Number"
                  variant="outlined"
                  value={formData.phone}
                  fullWidth
                  name="phone"
                  onChange={handleChange}
                  validators={['required']}
                  errorMessages={['This is a required field']}
                />

                {submitting === 0 ? (
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{
                      marginTop: '12px',
                      textTransform: 'capitalize'
                    }}
                  >
                    Request
                  </Button>
                ) : (
                  <div className={classes.submissions}>
                    <CircularProgress />
                  </div>
                )}
              </ValidatorForm>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          style={{
            padding: '24px'
          }}
        >
          <Card
            style={{
              padding: '24px',
              borderRadius: '6px',
              background: '#ffffff',
              height: '100%'
            }}
          >
            <CardContent>
              <Typography className={classes.text} variant="h3">
                Request a Consultation
              </Typography>

              <Typography variant="body1">
                Setup a call with our counsellor and figure out what’s best for
                you.
              </Typography>
            </CardContent>

            <CardContent>
              <Typography className={classes.text} variant="h4">
                Call Us
              </Typography>

              <Button
                className={classes.actBtn}
                fullWidth
                variant="contained"
                size="large"
                startIcon={<PhoneIcon />}
                component="a"
                href="tel:919810468685"
                target="_blank"
              >
                <Typography>+91 98104 68685 </Typography>
              </Button>

              <Button
                className={classes.actBtn}
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<PhoneIcon />}
                component="a"
                href="tel:918221843032"
                target="_blank"
              >
                <Typography>+91 82218 43032 </Typography>
              </Button>
            </CardContent>

            <CardContent>
              <Typography className={classes.text} variant="h4">
                Email Us
              </Typography>

              <Button
                className={classes.actBtn}
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<EmailIcon />}
                component="a"
                href="mailto:team@codeforcause.org"
                target="_blank"
              >
                <Typography>team@codeforcause.org </Typography>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

Process.propTypes = {
  className: PropTypes.string
};

export default Process;
