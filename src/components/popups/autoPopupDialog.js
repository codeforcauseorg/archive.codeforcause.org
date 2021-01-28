import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
  MenuItem,
  Grid,
  Slide
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from 'react-material-ui-form-validator';
import { useSnackbar } from 'notistack';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  btn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
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

export default function AutoPopupDialog({
  allowPopup,
  fullWidth = true,
  ...rest
}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [formData, updateFormData] = useState({ countryCode: '+91' });
  const [submitting, setSubmitting] = useState(0);

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setTimeout(() => {
      if (allowPopup) setOpen(true);
    }, 15000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
    formData.phone = `${formData.countryCode}${formData.phone}`;
    formData.source = window.location.href;

    setSubmitting(1);
    e.preventDefault();

    axios({
      method: 'post',
      url:
        'https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/counseling',
      data: formData
    })
      .then(response => {
        setSubmitting(0);
        handleClose();
        enqueueSnackbar('Your request has been successfully received', {
          variant: 'success'
        });
      })
      .catch(error => {
        enqueueSnackbar('Failed to send request. Try again later', {
          variant: 'error'
        });
      });
  };

  const countryCodes = Array(100)
    .fill(1)
    .map((x, y) => x + y)
    .reverse();

  return (
    <Dialog
      TransitionComponent={Transition}
      fullWidth
      open={open}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Request a consultation</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ marginBottom: '10px' }}>
          <Typography>
            Request a free counseling session with one of our mentors.
          </Typography>
        </DialogContentText>
        <ValidatorForm onSubmit={handleSubmit}>
          <TextValidator
            autoComplete={false}
            required
            key="name"
            className={classes.textField}
            label="Name"
            placeholder="What should we call you"
            variant="outlined"
            value={formData.name}
            fullWidth
            name="name"
            onChange={handleChange}
            validators={['required']}
            errorMessages={['This is a required field']}
          />

          <Grid container spacing={2} justify="space-evenly">
            <Grid item xs={2}>
              <SelectValidator
                key="countryCode"
                className={classes.textField}
                value={formData.countryCode}
                onChange={handleChange}
                name="countryCode"
                variant="outlined"
                validators={['required']}
                errorMessages={['Please select a country code']}
                fullWidth
              >
                {countryCodes.map(code => {
                  return <MenuItem value={`+${code}`}>+{code}</MenuItem>;
                })}
              </SelectValidator>
            </Grid>

            <Grid item xs={10}>
              <TextValidator
                autoComplete={false}
                required
                key="contact"
                className={classes.textField}
                label="Mobile Number"
                placeholder="Your Mobile/Whatsapp Number"
                variant="outlined"
                value={formData.phone}
                fullWidth
                name="phone"
                onChange={handleChange}
                validators={[
                  'required',
                  'matchRegexp:^[+]*[(]*[+]{0,1}[0-9]{1,3}[)]{0,1}[-s./0-9]*$'
                ]}
                errorMessages={[
                  'This is a required field',
                  'Please enter a valid contact number'
                ]}
              />
            </Grid>
          </Grid>
          {submitting === 0 ? (
            <Button type="submit" variant="contained" color="secondary">
              Request
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
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});
