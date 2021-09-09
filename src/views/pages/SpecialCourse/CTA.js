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
import PhoneIcon from '@material-ui/icons/PhoneInTalk';
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
    marginBottom: '16px',
    marginTop: '8px',
    backgroundColor: '#fff',
    borderBlockColor: 'green',
    borderColor: 'green',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#F2F7FF'
    }
  },
  text: {
    marginBottom: '16px',
    fontWeight: '700'
  },
  actBtn: {
    marginBottom: '16px',
    padding: '14px',
    background: '#fff',
    color: '#A60000',
    textTransform: 'lowercase',
    borderColor: 'yellow !important',
    '&,.MuiButton-contained': {
      boxShadow: 'none'
    },
    '&:hover': {
      backgroundColor: '#fff'
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
              padding: '50px 24px',
              borderRadius: '6px',
              background: '#F2F7FF',
              height: '100%'
            }}
          >
            <CardContent>
              <Typography className={classes.text} variant="h3">
                Request <span style={{ color: '#A60000' }}>a Consultation</span>
              </Typography>

              <Typography style={{ paddingBottom: '16px' }} variant="body1">
                Setup a call with our counsellor and figure out what’s best for
                you.
              </Typography>

              <ValidatorForm onSubmit={handleSubmit}>
                <Typography variant="caption">Full Name</Typography>
                <Typography variant="caption" color="secondary">
                  *
                </Typography>
                <TextValidator
                  key="name"
                  className={classes.textField}
                  placeholder="Example: Elizabeth"
                  variant="outlined"
                  value={formData.name}
                  fullWidth
                  name="name"
                  onChange={handleChange}
                  validators={['required']}
                  errorMessages={['This is a required field']}
                />
                <Typography variant="caption">Email</Typography>
                <Typography variant="caption" color="secondary">
                  *
                </Typography>
                <TextValidator
                  key="email"
                  className={classes.textField}
                  variant="outlined"
                  value={formData.email}
                  fullWidth
                  name="email"
                  placeholder="john@example.com"
                  onChange={handleChange}
                  validators={['required', 'isEmail']}
                  errorMessages={[
                    'This is a required field',
                    'Ender a valid Email'
                  ]}
                />
                <Typography variant="caption">Contact Number</Typography>
                <Typography variant="caption" color="secondary">
                  *
                </Typography>
                <TextValidator
                  key="phone"
                  className={classes.textField}
                  variant="outlined"
                  value={formData.phone}
                  fullWidth
                  name="phone"
                  placeholder="+91 12345 12345"
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
              padding: '50px 24px',
              borderRadius: '6px',
              background: '#F2F7FF',
              height: '100%'
            }}
          >
            <CardContent style={{ paddingBottom: '40px' }}>
              <Typography className={classes.text} variant="h3">
                For <span style={{ color: '#A60000' }}>Any Query</span>
              </Typography>
            </CardContent>

            <CardContent>
              <Typography
                className={classes.text}
                variant="h4"
                style={{ paddingBottom: '20px' }}
              >
                Call Us
              </Typography>

              <Button
                className={classes.actBtn}
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<PhoneIcon />}
                component="a"
                href="tel:+919810468685"
                target="_blank"
              >
                <Typography>+91 9810468685 </Typography>
              </Button>
            </CardContent>

            <CardContent>
              <Typography
                className={classes.text}
                variant="h4"
                style={{ paddingBottom: '20px', paddingTop: '20px' }}
              >
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
