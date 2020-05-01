/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Field, SubmissionError, reduxForm } from 'redux-form';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  CircularProgress,
  Divider,
  FormHelperText,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import wait from 'src/utils/wait';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  password: Yup.string().min(7, 'Must be at least 7 characters').max(255).required('Required'),
  policy: Yup.boolean().oneOf([true], 'This field must be checked')
});

function validate(values) {
  const formErrors = {};

  try {
    validationSchema.validateSync(values, { abortEarly: false });
  } catch (errors) {
    errors.inner.forEach((error) => {
      formErrors[error.path] = error.message;
    });
  }

  return formErrors;
}

async function submit() {
  try {
    // Make API request
    await wait(1000);
  } catch (error) {
    throw new SubmissionError({
      _error: 'Login failed!'
    });
  }
}

function renderTextField({
  input,
  label,
  meta: { touched, invalid, error },
  ...rest
}) {
  return (
    <TextField
      error={touched && invalid}
      fullWidth
      helperText={touched && error}
      label={label}
      variant="outlined"
      {...input}
      {...rest}
    />
  );
}

function renderCheckbox({
  input,
  label,
  meta: { touched, invalid, error },
  ...rest
}) {
  return (
    <div>
      <Box
        alignItems="center"
        display="flex"
        ml={-1}
      >
        <Checkbox
          checked={!!input.value}
          onChange={input.onChange}
          {...input}
          {...rest}
        />
        {label}
      </Box>
      {Boolean(touched && invalid) && (
        <FormHelperText error>
          {error}
        </FormHelperText>
      )}
    </div>
  );
}

function BasicForm({ handleSubmit, submitting }) {
  const [isAlertVisible, setAlertVisible] = useState(true);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Card>
        <CardHeader title="Basic Form" />
        <Divider />
        <CardContent>
          {isAlertVisible && (
            <Box mb={3}>
              <Alert
                onClose={() => setAlertVisible(false)}
                severity="info"
              >
                This is an info alert - check it out!
              </Alert>
            </Box>
          )}
          {(submitting) ? (
            <Box
              display="flex"
              justifyContent="center"
              my={5}
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              <Grid
                container
                spacing={2}
              >
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Field
                    name="firstName"
                    label="First Name"
                    component={renderTextField}
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <Field
                    name="lastName"
                    label="Last Name"
                    component={renderTextField}
                  />
                </Grid>
              </Grid>
              <Box mt={2}>
                <Field
                  name="email"
                  label="Email Address"
                  type="email"
                  component={renderTextField}
                />
              </Box>
              <Box mt={2}>
                <Field
                  name="password"
                  label="Password"
                  type="password"
                  component={renderTextField}
                />
              </Box>
              <Box mt={2}>
                <Field
                  name="policy"
                  label={(
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    >
                      I have read the
                      {' '}
                      <Link
                        component="a"
                        href="#"
                        color="secondary"
                      >
                        Terms and Conditions
                      </Link>
                    </Typography>
                )}
                  component={renderCheckbox}
                />
              </Box>
              <Box mt={2}>
                <Button
                  color="secondary"
                  disabled={submitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
            </>
          )}
        </CardContent>
      </Card>
    </form>
  );
}

BasicForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'BasicForm',
  validate,
  initialValues: {
    email: 'johnnydoe@yahoo.com',
    firstName: 'John',
    lastName: 'Doe',
    password: 'thisisasecuredpassword',
    policy: false
  }
})(BasicForm);
