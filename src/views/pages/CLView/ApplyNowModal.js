import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
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
    marginBottom: '16px'
  },
  submissions: {
    width: '80px',
    height: '50px'
  }
}));

export default function ApplyNowModal() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [formData, updateFormData] = useState({});
  const [submitting, setSubmitting] = useState(0);

  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    setSubmitting(1);
    e.preventDefault();
    axios({
      method: 'post',
      url:
        'https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/leads',
      data: formData
    })
      .then(response => {
        setSubmitting(0);
        handleClose();
        enqueueSnackbar('Application Submitted Successfully');
      })
      .catch(error => {
        enqueueSnackbar('Application Failed. Try again later');
      });
  };

  return (
    <div>
      <Button
        className={classes.btn}
        size="large"
        variant="contained"
        onClick={handleClickOpen}
      >
        Apply now
      </Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Apply for Campus Leaders Program
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Please provide your details below.</Typography>
          </DialogContentText>
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
              validators={['required']}
              errorMessages={['This is a required field']}
            />

            <TextValidator
              key="contact"
              className={classes.textField}
              label="WhatsApp / Contact Number "
              variant="outlined"
              value={formData.phone}
              fullWidth
              name="phone"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['This is a required field']}
            />

            <TextValidator
              key="linkedIn"
              className={classes.textField}
              label="LinkedIn URL"
              variant="outlined"
              value={formData.linkedIn}
              fullWidth
              name="linkedIn"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['This is a required field']}
            />

            <TextValidator
              key="course"
              className={classes.textField}
              label="Course & Branch"
              variant="outlined"
              value={formData.course}
              fullWidth
              name="course"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['This is a required field']}
            />

            <TextValidator
              key="year"
              className={classes.textField}
              label="Year"
              variant="outlined"
              value={formData.year}
              fullWidth
              name="year"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['This is a required field']}
            />

            <TextValidator
              key="college"
              className={classes.textField}
              label="College Name"
              variant="outlined"
              value={formData.college}
              fullWidth
              name="college"
              onChange={handleChange}
              validators={['required']}
              errorMessages={['This is a required field']}
            />

            {submitting === 0 ? (
              <Button type="submit" variant="contained" color="secondary">
                Apply
              </Button>
            ) : (
              <div className={classes.submissions}>
                <CircularProgress />
              </div>
            )}

            <Button
              variant="outlined"
              onClick={handleClose}
              color="secondary"
              style={{
                marginLeft: '16px'
              }}
            >
              Cancel
            </Button>
          </ValidatorForm>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
