/* eslint-disable react/no-array-index-key */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Chip,
  FormHelperText,
  IconButton,
  SvgIcon,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Plus as PlusIcon } from 'react-feather';

const useStyles = makeStyles((theme) => ({
  root: {},
  addTab: {
    marginLeft: theme.spacing(2)
  },
  tag: {
    '& + &': {
      marginLeft: theme.spacing(1)
    }
  },
  datePicker: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  }
}));

function ProjectDetails({
  className,
  onBack,
  onNext,
  ...rest
}) {
  const classes = useStyles();
  const [tag, setTag] = useState('');

  return (
    <Formik
      initialValues={{
        projectName: '',
        tags: ['Full-Time']
      }}
      validationSchema={Yup.object().shape({
        projectName: Yup.string().min(3, 'Must be at least 3 characters').max(255).required('Required'),
        tags: Yup.array(),
        startDate: Yup.date(),
        endDate: Yup.date()
      })}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          // Do API call to store step data in server session
          // It is important to have it on server to be able to reuse it if user
          // decides to continue later.
          setStatus({ success: true });
          setSubmitting(false);

          if (onNext) {
            onNext();
          }
        } catch (err) {
          setErrors({ submit: err.message });
          setStatus({ success: false });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        setFieldTouched,
        touched,
        values
      }) => (
        <form
          onSubmit={handleSubmit}
          className={clsx(classes.root, className)}
          {...rest}
        >
          <Typography
            variant="h3"
            color="textPrimary"
          >
            Please select one option
          </Typography>
          <Box mt={2}>
            <Typography
              variant="subtitle1"
              color="textSecondary"
            >
              Proin tincidunt lacus sed ante efficitur efficitur.
              Quisque aliquam fringilla velit sit amet euismod.
            </Typography>
          </Box>
          <Box mt={2}>
            <TextField
              error={Boolean(touched.projectName && errors.projectName)}
              fullWidth
              helperText={touched.projectName && errors.projectName}
              label="Project Name"
              name="projectName"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.projectName}
              variant="outlined"
            />
            <Box
              mt={3}
              display="flex"
              alignItems="center"
            >
              <TextField
                fullWidth
                label="Tags"
                name="tags"
                value={tag}
                onChange={(event) => setTag(event.target.value)}
                variant="outlined"
              />
              <IconButton
                variant="contained"
                className={classes.addTab}
                onClick={() => {
                  if (!tag) {
                    return;
                  }

                  setFieldValue('tags', [...values.tags, tag]);
                  setTag('');
                }}
              >
                <SvgIcon>
                  <PlusIcon />
                </SvgIcon>
              </IconButton>
            </Box>
            <Box mt={2}>
              {values.tags.map((tag, i) => (
                <Chip
                  variant="outlined"
                  key={i}
                  label={tag}
                  className={classes.tag}
                  onDelete={() => {
                    const newTags = values.tags.filter((t) => t !== tag);

                    setFieldValue('tags', newTags);
                  }}
                />
              ))}
            </Box>
            {Boolean(touched.tags && errors.tags) && (
              <Box mt={2}>
                <FormHelperText error>
                  {errors.tags}
                </FormHelperText>
              </Box>
            )}
            <Box mt={4}>
              <KeyboardDatePicker
                className={classes.datePicker}
                label="Start Date"
                format="MM/DD/YYYY"
                name="startDate"
                inputVariant="outlined"
                value={values.startDate}
                onBlur={() => setFieldTouched('startDate')}
                onClose={() => setFieldTouched('startDate')}
                onAccept={() => setFieldTouched('startDate')}
                onChange={(date) => setFieldValue('startDate', date)}
              />
              <KeyboardDatePicker
                className={classes.datePicker}
                label="End Date"
                format="MM/DD/YYYY"
                name="endDate"
                inputVariant="outlined"
                value={values.endDate}
                onBlur={() => setFieldTouched('endDate')}
                onClose={() => setFieldTouched('endDate')}
                onAccept={() => setFieldTouched('endDate')}
                onChange={(date) => setFieldValue('endDate', date)}
              />
            </Box>
            {Boolean(touched.startDate && errors.startDate) && (
              <Box mt={2}>
                <FormHelperText error>
                  {errors.startDate}
                </FormHelperText>
              </Box>
            )}
            {Boolean(touched.endDate && errors.endDate) && (
              <Box mt={2}>
                <FormHelperText error>
                  {errors.endDate}
                </FormHelperText>
              </Box>
            )}
          </Box>
          <Box
            mt={6}
            display="flex"
          >
            {onBack && (
              <Button
                onClick={onBack}
                size="large"
              >
                Previous
              </Button>
            )}
            <Box flexGrow={1} />
            <Button
              color="secondary"
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              size="large"
            >
              Next
            </Button>
          </Box>
        </form>
      )}
    </Formik>

  );
}

ProjectDetails.propTypes = {
  className: PropTypes.string,
  onNext: PropTypes.func,
  onBack: PropTypes.func
};

export default ProjectDetails;
