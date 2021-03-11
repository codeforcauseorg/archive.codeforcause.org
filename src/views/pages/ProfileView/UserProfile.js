import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
  btn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
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

export default function UserProfile() {
  const classes = useStyles();
  const [formData, updateFormData] = useState({});

  const handleChange = event => {
    updateFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          key="name"
          className={classes.textField}
          label="Full Name"
          variant="outlined"
          value={formData.name}
          fullWidth
          name="name"
          onChange={handleChange}
        />

        <TextField
          key="email"
          className={classes.textField}
          label="Email"
          variant="outlined"
          value={formData.email}
          fullWidth
          name="email"
          onChange={handleChange}
        />

        <TextField
          key="contact"
          className={classes.textField}
          label="WhatsApp / Contact Number "
          variant="outlined"
          value={formData.phone}
          fullWidth
          name="phone"
          onChange={handleChange}
        />

        <TextField
          key="linkedIn"
          className={classes.textField}
          label="LinkedIn URL"
          variant="outlined"
          value={formData.linkedIn}
          fullWidth
          name="linkedIn"
          onChange={handleChange}
        />

        <TextField
          key="course"
          className={classes.textField}
          label="Course & Branch"
          variant="outlined"
          value={formData.course}
          fullWidth
          name="course"
          onChange={handleChange}
        />

        <TextField
          key="year"
          className={classes.textField}
          label="year"
          variant="outlined"
          value={formData.year}
          fullWidth
          name="year"
          onChange={handleChange}
        />

        <TextField
          key="college"
          className={classes.textField}
          label="College Name"
          variant="outlined"
          value={formData.college}
          fullWidth
          name="college"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
