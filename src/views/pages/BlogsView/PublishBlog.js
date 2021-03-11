import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  Typography
} from '@material-ui/core';
import React, { useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    padding: theme.spacing(20, 10, 20),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(20, 3, 20)
    }
  },
  heading: {
    fontWeight: 700,
    paddingBottom: '20px'
  },
  paddingTop: {
    paddingTop: '50px'
  },
  publish: {
    color: '#585858',
    paddingRight: '16px',
    paddingBottom: '24px',
    [theme.breakpoints.down('sm')]: {
      paddingRight: '120px'
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: '20px'
    }
  },
  textField: {
    marginBottom: '20px',
    marginTop: '8px',
    backgroundColor: '#ECECEC',
    borderBlockColor: 'green',
    borderColor: 'green',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ECECEC'
    }
  },
  divider: {
    backgroundColor: '#000',
    padding: '0px 0.5px',
    height: 'auto',
    width: 'auto',
    border: '0.5px  #525252'
  }
}));

export default function PublishBlog() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3} justify="space-between">
          <Grid item md={3}>
            <Typography variant="h2" className={classes.heading}>
              Publish Your Article In Our Publication
            </Typography>
            <Typography className={classes.publish}>
              We promote all the old and new content that remains hidden from
              the people. Aiming the new can only be discovered knowing the old
              and the new.
            </Typography>
          </Grid>
          <Hidden smDown>
            <Divider
              className={classes.divider}
              variant="fullWidth"
              orientation="vertical"
            />
          </Hidden>
          <Grid item md={7}>
            <Typography variant="h2" className={classes.heading}>
              Submit your blog link
            </Typography>
            <Typography
              display="block"
              variant="caption"
              style={{ marginBottom: '20px' }}
            >
              It can be a link to blog on any blogging site which is not
              published with other publication yet
            </Typography>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

function Form() {
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
    e.preventDefault();
    formData.source = window.location.href;
    
  };

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit}>
        <Typography variant="caption">Email Id</Typography>
        <TextValidator
          key="email"
          className={classes.textField}
          variant="outlined"
          value={formData.email}
          fullWidth
          name="email"
          onChange={handleChange}
          validators={['required', 'isEmail']}
          errorMessages={['This is a required field', 'Ender a valid Email']}
        />

        <Typography variant="caption">Blog Link</Typography>
        <TextValidator
          key="link"
          className={classes.textField}
          variant="outlined"
          value={formData.link}
          fullWidth
          name="link"
          onChange={handleChange}
          validators={['required']}
          errorMessages={['This is a required field']}
        />

        {submitting === 0 ? (
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            style={{
              marginTop: '12px',
              textTransform: 'capitalize',
              padding: '12px 0px'
            }}
          >
            <Typography variant="h6" style={{ fontWeight: 600 }}>
              Request
            </Typography>
          </Button>
        ) : (
          <div className={classes.submissions}>
            <CircularProgress />
          </div>
        )}
      </ValidatorForm>
    </div>
  );
}
