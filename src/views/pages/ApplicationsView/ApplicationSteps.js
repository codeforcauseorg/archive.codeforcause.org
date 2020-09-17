import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';

import { Button, Typography, MenuItem } from '@material-ui/core';
import {
  ValidatorForm,
  TextValidator,
  SelectValidator
} from 'react-material-ui-form-validator';

// import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  textField: {
    marginBottom: '16px'
  }
}));

function getSteps() {
  return [
    'Profile Information',
    'Education Information',
    'Application Challenge'
  ];
}

function getStepContent(step, setActiveStep, formData, setFormData) {
  switch (step) {
    case 0:
      return (
        <FormPersonalInfo
          setActiveStep={setActiveStep}
          data={formData}
          setData={setFormData}
        />
      );
    case 1:
      return (
        <FormEducationInfo
          setActiveStep={setActiveStep}
          data={formData}
          setData={setFormData}
        />
      );
    case 2:
      return (
        <FormChallenge
          setActiveStep={setActiveStep}
          data={formData}
          setData={setFormData}
        />
      );
    default:
      return 'Unknown step';
  }
}

export function ApplicationSteps() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(2);
  const [formData, setFormData] = React.useState({
    personal: {},
    education: {},
    challenge: {}
  });
  const steps = getSteps();

  const handleSubmitApplication = () => {
    console.log(formData);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index, setActiveStep, formData, setFormData)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed</Typography>
          <Button onClick={handleSubmitApplication} className={classes.button}>
            Submit Application
          </Button>
        </Paper>
      )}
    </div>
  );
}

function FormPersonalInfo({ setActiveStep, data, setData }) {
  const classes = useStyles();
  const [formData, updateFormData] = useState(data.personal);

  const handleChange = event => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setData({
      ...data,
      personal: formData
    });
    setActiveStep(1);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <TextValidator
        key="fullName"
        className={classes.textField}
        label="Name"
        variant="outlined"
        value={formData.fullName}
        fullWidth
        name="fullName"
        onChange={handleChange}
        validators={['required']}
        errorMessages={['Name is a required field']}
      />

      <TextValidator
        key="phone"
        className={classes.textField}
        label="Phone"
        variant="outlined"
        value={formData.phone}
        fullWidth
        name="phone"
        onChange={handleChange}
        validators={['required']}
        errorMessages={['Phone number is a required field']}
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
          'Email is a required field',
          'Must be a valid Email address'
        ]}
      />

      <SelectValidator
        key="gender"
        className={classes.textField}
        value={formData.gender}
        onChange={handleChange}
        name="gender"
        variant="outlined"
        validators={['required']}
        errorMessages={['Please select a gender']}
        label="Gender"
        fullWidth
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </SelectValidator>

      <Button variant="outlined" disabled color="secondary">
        Cancel
      </Button>

      <Button
        type="submit"
        variant="contained"
        color="secondary"
        style={{
          marginLeft: '16px'
        }}
      >
        Save
      </Button>
    </ValidatorForm>
  );
}

function FormEducationInfo({ setActiveStep, data, setData }) {
  const classes = useStyles();
  const [formData, updateFormData] = useState(data.education);

  const handleChange = event => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handlePrev = () => {
    setActiveStep(0);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setData({
      ...data,
      education: formData
    });
    setActiveStep(2);
  };

  const years = Array(25)
    .fill(2000)
    .map((x, y) => x + y);

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <SelectValidator
        key="year"
        className={classes.textField}
        value={formData.year}
        onChange={handleChange}
        name="year"
        variant="outlined"
        validators={['required']}
        errorMessages={['Please select your Graduation Year']}
        label="Graduation Year"
        fullWidth
      >
        {years.map((year, index) => {
          return <MenuItem value={year}>{year}</MenuItem>;
        })}
      </SelectValidator>

      <TextValidator
        key="college"
        className={classes.textField}
        label="College"
        variant="outlined"
        value={formData.college}
        fullWidth
        name="college"
        onChange={handleChange}
        validators={['required']}
        errorMessages={['College is a required field']}
      />

      <TextValidator
        key="state"
        className={classes.textField}
        label="State"
        variant="outlined"
        value={formData.state}
        fullWidth
        name="state"
        onChange={handleChange}
        validators={['required']}
        errorMessages={['State is a required field']}
      />

      <TextValidator
        key="country"
        className={classes.textField}
        label="Country"
        variant="outlined"
        value={formData.country}
        fullWidth
        name="country"
        onChange={handleChange}
        validators={['required']}
        errorMessages={['Country is a required field']}
      />

      <Button variant="outlined" onClick={handlePrev} color="secondary">
        Prev
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        style={{
          marginLeft: '16px'
        }}
      >
        Save
      </Button>
    </ValidatorForm>
  );
}

function FormChallenge({ setActiveStep, data, setData }) {
  const classes = useStyles();
  const [formData, updateFormData] = useState(data.challenge);

  const handleChange = event => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handlePrev = () => {
    setActiveStep(1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setData({
      ...data,
      challenge: formData
    });
    setActiveStep(3);
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <TextValidator
        className={classes.textField}
        multiline
        fullWidth
        label="Why ?"
        variant="outlined"
        onChange={handleChange}
        rows={4}
      />

      <TextValidator
        className={classes.textField}
        multiline
        fullWidth
        label="What is your expectation from this course?"
        variant="outlined"
        onChange={handleChange}
        rows={4}
      />

      <TextValidator
        className={classes.textField}
        multiline
        fullWidth
        label="What is your viewpoint toward Coding in Community Contribution?"
        variant="outlined"
        onChange={handleChange}
        rows={4}
      />

      <Button variant="outlined" onClick={handlePrev} color="secondary">
        Prev
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        style={{
          marginLeft: '16px'
        }}
      >
        Save
      </Button>
    </ValidatorForm>
  );
}
