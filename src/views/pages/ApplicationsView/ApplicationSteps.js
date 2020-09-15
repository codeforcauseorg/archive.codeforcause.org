import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Paper from '@material-ui/core/Paper';

import { Button, Typography } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

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
    marginBottom: '12px'
  }
}));

function getSteps() {
  return ['Profile Information', 'Education Information', 'Application Challenge'];
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
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({
    personal : {},
    education : {},
    challenge: {}
  });
  const steps = getSteps();

  const handleSubmitApplication = () => {
    console.log(formData)
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
        Next
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

  return (
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
        Next
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
        Next
      </Button>
    </ValidatorForm>
  );
}
