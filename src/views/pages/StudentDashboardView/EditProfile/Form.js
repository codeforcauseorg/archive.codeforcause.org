import {
  Button,
  CircularProgress,
  Container,
  Divider,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import axios from 'axios';
import React, { useReducer, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import ButtonComponent from 'src/components/Button/ButtonComponent';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    margin: '0px auto 100px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
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
    padding: '40px 0 10px'
  },
  textField: {
    marginBottom: '16px',
    background: '#DEDEDE'
  },
  btn: {
    padding: '13px'
  },

  unactbtn: {
    margin: '5px 5px 5px 0px',
    padding: '10px',
    background: '#DEDEDE',
    '&:hover': {
      background: '#dedede',
      color: 'black'
    }
  },
  actbtn: {
    margin: '5px 5px 5px 0px',
    padding: '10px',
    background: 'black',
    color: 'white',
    '&:hover': {
      background: 'black',
      color: 'white'
    }
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
        'https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/profile', // cloud function url to be generated
      data: formData
    })
      .then(response => {
        setSubmitting(0);
        // handleClose();
        // enqueueSnackbar('Application Submitted Successfully');
      })
      .catch(error => {
        // enqueueSnackbar('Application Failed. Try again later');
      });
  };

  const skillsArray = [
    {
      skill: 'c/c++',
      activated: true
    },
    {
      skill: 'Machine Learning',
      activated: false
    },
    {
      skill: 'Web Development',
      activated: false
    },
    {
      skill: 'Augmented Reality',
      activated: false
    },

    {
      skill: 'Game Development',
      activated: false
    }
  ];
  // to force update the state of the app
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  const [skills, updateSkills] = useState(skillsArray);
  const handleSkillClick = eskill => {
    for (var i = 0; i < skills.length; i++) {
      if (skills[i].skill === eskill) {
        skills[i].activated = !skills[i].activated;
      }
    }
    console.log(skills);
    updateSkills(skills);
    forceUpdate();
  };

  return (
    <Paper elevation={0} className={classes.root} {...rest}>
      <Container className={classes.container}>
        <Typography align="center" className={classes.mainHeading} variant="h1">
          Set Up Your Profile
        </Typography>
        <Typography
          className={classes.extraPadding}
          style={{ fontWeight: 600 }}
          variant="subtitle2"
        >
          We will be able to recommend and will be able to notify you about our
          events of your interest and near you.
        </Typography>
        <Typography className={classes.subhead} variant="h6" color="primary">
          Personal Information
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
          <Divider
            variant="fullWidth"
            style={{ margin: '40px 0px 0px', padding: '0.5px' }}
          />

          <Typography className={classes.subhead} variant="h6" color="primary">
            Residential Information
          </Typography>

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
          <Typography variant="caption">District</Typography>
          <TextValidator
            key="district"
            className={classes.textField}
            variant="outlined"
            value={formData.district}
            fullWidth
            name="district"
            onChange={handleChange}
            validators={['required']}
            errorMessages={['This is a required field']}
          />
          <Typography variant="caption">State</Typography>
          <TextValidator
            key="state"
            className={classes.textField}
            variant="outlined"
            value={formData.state}
            fullWidth
            name="state"
            onChange={handleChange}
            validators={['required']}
            errorMessages={['This is a required field']}
          />

          <Divider
            variant="fullWidth"
            style={{ margin: '40px 0px 0px', padding: '0.5px' }}
          />

          <Typography className={classes.subhead} variant="h6" color="primary">
            Your Interests
          </Typography>
          <Typography variant="caption">Select Your Interests</Typography>
          <div>
            {/* <Button className={classes.btn} focusRipple={false} color >hdfialu</Button> */}
            {skills.map(({ skill, activated }) => {
              if (activated)
                return (
                  <Button
                    className={classes.actbtn}
                    focusRipple={false}
                    disableRipple={true}
                    onClick={() => {
                      handleSkillClick(skill);
                    }}
                  >
                    {skill}
                  </Button>
                );
              else
                return (
                  <Button
                    className={classes.unactbtn}
                    focusRipple={false}
                    disableRipple={true}
                    onClick={() => {
                      handleSkillClick(skill);
                    }}
                  >
                    {skill}
                  </Button>
                );
            })}
          </div>
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
