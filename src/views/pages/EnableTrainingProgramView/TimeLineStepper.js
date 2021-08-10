import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

function getSteps() {
  return [
    'APPLICATION OPENS',
    'TESTS',
    'INTERVIEWS',
    'CODING SESSIONS BEGINS',
    'FIRST FILTRATION',
    'SECOND FILTRATION',
    'DEVELOPMENT BEGINS',
    'THIRD FILTRATION',
    'BATCH FINALE'
  ];
}

function getStepDate(step) {
  switch (step) {
    case 0:
      return 'DATE';
    case 1:
      return 'DATE';
    case 2:
      return 'DATE';
    case 3:
      return 'DATE';
    case 4:
      return 'DATE';
    case 5:
      return 'DATE';
    case 6:
      return 'DATE';
    case 7:
      return 'DATE';
    case 8:
      return 'DATE';
    default:
      return 'Unknown step';
  }
}

export default function TimeLineStepper() {
  const classes = useStyles();
  const activeStep = 9;
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}<br/>{getStepDate(index)}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
