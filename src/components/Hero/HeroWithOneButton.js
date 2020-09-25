import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Box, Container, Typography, makeStyles } from '@material-ui/core';
// import ApplyNowModal from './ApplyNowModal';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '350px',
    color: '#FFF',
    padding: '100px 70px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px',
    color: '#FFF'
  },
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
  }
}));

function Hero({
  title,
  subtitle,
  className, // className
  backgroundImage = null, // Link to the  background image if any
  component = null, // The Button or any component provided
  ...rest
}) {
  const classes = useStyles();

  return (
    <div>
      {backgroundImage ? (
        <div
          className={clsx(classes.root, className)}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
          {...rest}
        >
          <Container maxWidth="lg">
            <div className={classes.main}>
              <Typography variant="h1">{title}</Typography>
              <Box mt={2}>
                <Typography variant="body1" align="center">
                  {subtitle}
                </Typography>
              </Box>
              <Box mt={2}>{component != null ? component : <></>}</Box>
            </div>
          </Container>
        </div>
      ) : (
        <div className={clsx(classes.root, className)} {...rest}>
          <Container maxWidth="lg">
            <div className={classes.main}>
              <Typography variant="h1">{title}</Typography>
              <Box mt={2}>
                <Typography variant="body1" align="center">
                  {subtitle}
                </Typography>
              </Box>
              <Box mt={2}>{component != null ? component : <></>}</Box>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

export default Hero;
