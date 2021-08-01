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
  Grid
} from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from 'react-material-ui-form-validator';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'src/actions/accountActions';

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

export default function ApplyModal({
  course,
  batch,
  fullWidth = false,
  ...rest
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("unregistered");
  const [formData, updateFormData] = useState({
    countryCode: "+91"
  });
  const [submitting, setSubmitting] = useState(0);
  const [checking, setChecking] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const user = useSelector(state => state.account.user);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  useEffect(function () {

    if (user) {
      setChecking(true);
      console.log(user.email);
      axios(
        'https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/scholar/status/',
        {
          params: { email: user.email }
        }
      ).then(response => {
        setChecking(false);
        setStatus(response.data.status);
      });
    }

  }, [user])

  const handleClickOpen = () => {
    setChecking(true);
    console.log(user.email);
    axios(
      'https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/scholar/status/',
      {
        params: { email: user.email }
      }
    )
      .then(response => {
        setChecking(false);
        if (response.data.status === 'requested') {
          enqueueSnackbar(
            'Your application is already submitted. we will connect with you within 7 days.'
          );
          setOpen(false)
        } else {
          setOpen(true);
          updateFormData({
            countryCode: '+91',
            phone: '',
            priceId: batch.priceId,
            email: user.email,
            name: user.displayName
          });
        }
      })
      .catch(err => {
        setChecking(false);
        enqueueSnackbar('Application Failed. Try again later');
      });
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
    formData.source = window.location.href;
    formData.courseName = course.title;
    formData.email = user.email;
    setSubmitting(1);
    e.preventDefault();
    axios({
      method: 'post',
      url:
        'https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/scholar',
      data: formData
    })
      .then(response => {
        if (response.data.status && response.data.status === 'submitted') {
          enqueueSnackbar('Your application is submitted. we will connect with you within 7 days.');
        }
        setOpen(false);
      })
      .catch(error => {
        enqueueSnackbar('Application Failed. Try again later');
      });
  };


  const handleFeeSubmit = e => {

    e.preventDefault();
    axios.get('https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/scholar/payment',
      { params: { email: user.email } }).then(response => {
        if (response.data.payment_request && response.data.payment_request.longurl) {
          enqueueSnackbar('Redirecting for Fee Submission.');
          window.open(response.data.payment_request.longurl,'_blank');
        } else {
          enqueueSnackbar('Fee payment failed. Connect us over email.');
        }
      })
      .catch(error => {
        enqueueSnackbar('Fee payment failed. Connect us over email.');
      });
  };


  const countryCodes = Array(100)
    .fill(1)
    .map((x, y) => x + y)
    .reverse();

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
      {(() => {
        if (!user) {
          return (<ThemeProvider theme={theme}>
            <Button
              disabled={!course.active}
              className={classes.btn}
              size="large"
              variant="contained"
              onClick={handleLogin}
              {...rest}
              fullWidth={fullWidth}
            >
              {course.active ? 'Sign in to Register' : 'Applications Closed'}
            </Button>
          </ThemeProvider>)
        } else if (status === "unregistered") {
          return (<ThemeProvider theme={theme}>
            <Button
              disabled={!course.active}
              className={classes.btn}
              size="large"
              variant="contained"
              onClick={handleClickOpen}
              {...rest}
              fullWidth={fullWidth}
            >
              {course.active
                ? checking
                  ? 'Checking Seats...'
                  : 'Register'
                : 'Applications Closed'}
            </Button>
          </ThemeProvider>)
        } else if (status === "pending") {
          return (<ThemeProvider theme={theme}>
            <Button
              disabled={true}
              className={classes.btn}
              size="large"
              variant="contained"
              onClick={handleClickOpen}
              {...rest}
              fullWidth={fullWidth}
            >
              {"Approval is pending"}
            </Button>
          </ThemeProvider>)
        } else if (status === "accepted") {
          return (<ThemeProvider theme={theme}>
            <Button
              className={classes.btn}
              size="large"
              variant="contained"
              onClick={handleFeeSubmit}
              {...rest}
              fullWidth={fullWidth}
            >
              {"Submit Fees"}
            </Button>
            <Typography>Application Accepted</Typography>
          </ThemeProvider>)
        } else if (status === "complete") {
          return (<ThemeProvider theme={theme}>
            <Button
              disabled={true}
              className={classes.btn}
              size="large"
              variant="contained"
              onClick={handleClickOpen}
              {...rest}
              fullWidth={fullWidth}
            >
              {"Admission Successful"}
            </Button>
          </ThemeProvider>)
        }
      })()}

      <Dialog
        fullWidth
        open={open && user}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Apply for Scholarship</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Please provide your details below.</Typography>
          </DialogContentText>
          <ValidatorForm onSubmit={handleSubmit}>
            <TextValidator
              autoComplete={false}
              required
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
              required
              key="email"
              className={classes.textField}
              disabled
              label="Email"
              variant="outlined"
              value={user ? user.email : ''}
              fullWidth
              name="email"
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
                  label="WhatsApp / Contact Number "
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

            <TextValidator
              required
              key="course"
              className={classes.textField}
              label="Course & Branch"
              variant="outlined"
              value={formData.course}
              fullWidth
              name="course"
              onChange={handleChange}
              validators={[]}
              errorMessages={[]}
            />

            <SelectValidator
              required
              key="year"
              className={classes.textField}
              value={formData.year}
              onChange={handleChange}
              name="year"
              variant="outlined"
              validators={['required']}
              errorMessages={['Please select a year']}
              label="Year"
              fullWidth
            >
              <MenuItem value={'1st'}>1st</MenuItem>
              <MenuItem value={'2nd'}>2nd</MenuItem>
              <MenuItem value={'3rd'}>3rd</MenuItem>
              <MenuItem value={'4th'}>4th</MenuItem>
              <MenuItem value={'5th'}>5th</MenuItem>
              <MenuItem value={'Graduated'}>Graduated</MenuItem>
            </SelectValidator>

            <TextValidator
              required
              key="college"
              className={classes.textField}
              label="College Name"
              variant="outlined"
              value={formData.college}
              fullWidth
              name="college"
              onChange={handleChange}
              validators={[]}
              errorMessages={[]}
            />

            <DialogContentText>
              <Typography>
                You are submitting Scholarship Application. You will get an email for fee payment if you get selected. Fees is completely non refundable.
              </Typography>
            </DialogContentText>

            {submitting === 0 ? (
              <Button type="submit" variant="contained" color="secondary">
                Submit
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
