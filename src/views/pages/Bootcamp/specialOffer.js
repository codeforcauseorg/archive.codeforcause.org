import { Box, Hidden, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(3),
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#A60000',
    whiteSpace: 'nowrap',
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

export default function SpecialOffer({ offer }) {
  const classes = useStyles();

  if (!offer) {
    return undefined;
  }

  return (
    <div className={classes.root}>
      <Hidden xsDown>
        <img
          src="https://i.pinimg.com/originals/b7/5f/ee/b75feef936c4e0224cd1dcde29b82370.png"
          style={{
            height: '100px'
          }}
          alt=""
        />
      </Hidden>
      <Box
        style={{
          flexGrow: 1
        }}
      >
        <Typography align="center" variant="h2">
          {offer.title}
        </Typography>
        <Typography align="center" variant="h4" style={{ marginTop: '16px' }}>
          {offer.subheading}
        </Typography>
      </Box>
      <Hidden xsDown>
        <img
          src="https://i.pinimg.com/originals/b7/5f/ee/b75feef936c4e0224cd1dcde29b82370.png"
          style={{
            height: '100px',
            transform: 'scaleX(-1)'
          }}
          alt=""
        />
      </Hidden>
    </div>
  );
}
