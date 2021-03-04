import { Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(3, 10, 3),
    color: '#fff'
  },
  btn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
    marginLeft: '50%',
    marginTop: '16px',
    transform: 'translateX(-50%)',
    fontWeight: 600,
    paddingLeft: '24px',
    paddingRight: '24px',
    '&:hover': {
      backgroundColor: 'rgba(166, 0, 0, 0.8)'
    }
  }
}));

export default function SpecialHeader({ event }) {
  const classes = useStyles();
  const history = useHistory();

  if (!event) {
    return '';
  }

  const eve = event[0];
  return (
    <div className={classes.root}>
      <img
        src="https://i.pinimg.com/originals/b7/5f/ee/b75feef936c4e0224cd1dcde29b82370.png"
        height="150px"
        style={{
          overflow: 'hidden',
          position: 'absolute',
          zIndex: 0,
          top: 72,
          left: 4
        }}
        alt=""
      />

      <Typography align="center" variant="h3">
        {eve.name}
      </Typography>
      <Typography align="center" variant="h5" style={{ marginTop: '16px' }}>
        {eve.time}
      </Typography>
      <Button
        onClick={() => {
          history.push(eve.link);
        }}
        className={classes.btn}
      >
        Apply Now
      </Button>
    </div>
  );
}
