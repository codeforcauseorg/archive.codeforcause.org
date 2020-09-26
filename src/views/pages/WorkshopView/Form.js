import React, { useState } from 'react';
import {
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  makeStyles,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Typography
} from '@material-ui/core';
import {
  SelectValidator,
  TextValidator,
  ValidatorForm
} from 'react-material-ui-form-validator';
import axios from 'axios';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ButtonComponent from 'src/components/Button/ButtonComponent';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
  root: {
    width: '65%',
    margin: '0px auto 100px',
    [theme.breakpoints.down('sm')]: {
      width: '85%'
    }
  },
  mainHeading: {
    fontWeight: 700,
    color: '#000'
  },
  container: {
    padding: '10% 12%'
  },
  subhead: {
    padding: '10px 0'
  },
  textField: {
    marginBottom: '16px',
    background: '#e2e2e2'
  },
  btn: {
    padding: '13px'
  },
  submissions: {
    padding: '10px 0',
    width: '80px',
    height: '50px'
  },
  extraPadding: {
    padding: '20px 0px'
  },
  rightPadding: {
    [theme.breakpoints.up('md')]: {
      paddingRight: '10px'
    }
  },
  leftPadding: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '10px'
    }
  }
}));

function Form({ ...rest }) {
  const classes = useStyles();

  const [formData, updateFormData] = useState({});
  const [submitting, setSubmitting] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { enqueueSnackbar } = useSnackbar();

  const handleDateChange = date => {
    setSelectedDate(date);
    updateFormData({
      ...formData,
      date: date
    });
  };

  const handleChange = event => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    setSubmitting(1);
    console.log('d : ' + formData.date);
    e.preventDefault();
    axios({
      method: 'post',
      url:
        'https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/workshop',
      data: formData
    })
      .then(response => {
        setSubmitting(0);
        enqueueSnackbar('Application Submitted Successfully');
      })
      .catch(error => {
        enqueueSnackbar('Application Failed. Try again later');
      });
  };

  const workshopTopics = [
    'Machine Learning',
    'Placements',
    'Google Cloud',
    'Social Wellbeing',
    'Open Source',
    'Fellowship'
  ];

  return (
    <Paper elevation={20} className={classes.root} {...rest}>
      <Container className={classes.container}>
        <Typography align="center" className={classes.mainHeading} variant="h1">
          Excited For Workshop!! Submit Request
        </Typography>
        <Typography
          align="center"
          className={classes.extraPadding}
          variant="subtitle2"
        >
          We will Contact You Regarding Your Request as the request is reviewed
          by Us
        </Typography>
        <Typography
          align="center"
          style={{ padding: '12px 0px 20px' }}
          color="error"
        >
          As of now, we are only taking virtual workshops till further Notice
        </Typography>
        <Typography className={classes.subhead} variant="h6" color="primary">
          Contact Information
        </Typography>
        <ValidatorForm onSubmit={handleSubmit}>
          <Typography variant="caption">Name</Typography>
          <TextValidator
            key="name"
            className={classes.textField}
            variant="outlined"
            value={formData.name}
            fullWidth
            name="name"
            onChange={handleChange}
            validators={['required']}
            errorMessages={['This is a required field']}
          />

          <Grid container justify="space-between">
            <Grid md={6} xs={12} className={classes.rightPadding}>
              <Typography variant="caption">Contact Number</Typography>
              <TextValidator
                key="contact"
                className={classes.textField}
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
            <Grid md={6} xs={12} className={classes.leftPadding}>
              <Typography variant="caption">Email</Typography>
              <TextValidator
                key="email"
                className={classes.textField}
                variant="outlined"
                value={formData.email}
                fullWidth
                name="email"
                onChange={handleChange}
                validators={['required', 'isEmail']}
                errorMessages={[
                  'This is a required field',
                  'Please enter a valid email'
                ]}
              />
            </Grid>
          </Grid>

          <Typography variant="caption">College</Typography>
          <TextValidator
            key="college"
            className={classes.textField}
            variant="outlined"
            value={formData.college}
            fullWidth
            name="college"
            onChange={handleChange}
            validators={['required']}
            errorMessages={['This is a required field']}
          />

          <Typography variant="caption">Are you a college society</Typography>
          <RadioGroup
            row
            key="isCollegeSociety"
            name="isCollegeSociety"
            value={formData.isCollegeSociety}
            onChange={handleChange}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>

          <Typography variant="caption">Link to social profile</Typography>
          <TextValidator
            key="social"
            className={classes.textField}
            variant="outlined"
            value={formData.social}
            fullWidth
            name="social"
            onChange={handleChange}
            validators={['required', 'matchRegexp:^(http(s)?://)']}
            errorMessages={[
              'This is a required field',
              'Enter Correct social platform link'
            ]}
          />

          <Typography className={classes.subhead} variant="h6" color="primary">
            Workshop Information
          </Typography>

          <Typography variant="caption">Topic for Workshop</Typography>
          <SelectValidator
            key="topic"
            name="topic"
            className={classes.textField}
            variant="outlined"
            value={formData.topic}
            fullWidth
            onChange={handleChange}
            validators={['required']}
            errorMessages={['This is a required field']}
          >
            {workshopTopics.map(topic => {
              return (
                <MenuItem style={{ backgroundColor: 'white' }} value={topic}>
                  {topic}
                </MenuItem>
              );
            })}
          </SelectValidator>

          <Typography variant="caption">Referred Date For Workshop</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classes.textField}
              disableToolbar
              variant="standard"
              style={{ border: '0.5px solid grey', padding: '10px' }}
              format="MM/dd/yyyy"
              minDate={new Date()}
              margin="normal"
              id="date-picker-inline"
              fullWidth
              autoOk
              autoSave
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </MuiPickersUtilsProvider>

          <Typography variant="caption">
            Approximate Footfall Expected
          </Typography>
          <TextValidator
            key="footfall"
            name="footfall"
            className={classes.textField}
            variant="outlined"
            value={formData.footfall}
            fullWidth
            onChange={handleChange}
            validators={['required']}
            errorMessages={['This is a required field']}
          />

          <div style={{ padding: '30px 0 15px' }}>
            <Typography style={{ margin: 0 }} variant="caption" color="initial">
              By continuing, you agree to the Code For Cause Terms of Use and
              Privacy Policy
            </Typography>
          </div>

          {submitting === 0 ? (
            <ButtonComponent
              className={classes.btn}
              title="Submit Request"
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
            />
          ) : (
            <div className={classes.submissions}>
              <CircularProgress />
            </div>
          )}
        </ValidatorForm>
      </Container>
    </Paper>
  );
}

export default Form;
