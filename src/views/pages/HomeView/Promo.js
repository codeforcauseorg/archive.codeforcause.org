import {
  Container,
  makeStyles,
  Typography,
  Button,
  Box
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(5, 10, 5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(1, 10, 1)
    },
    color: '#000000'
  },
  btn: {
    backgroundColor: '#A60000',
    color: '#ffffff',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'rgba(166, 0, 0, 0.8)'
    }
  }
}));

function Promo({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container>
        <Typography
          style={{ color: '#ffffff', marginBottom: '16px' }}
          variant="h1"
          align="center"
        >
          Offering 90% Scholarship
        </Typography>

        <Typography
          style={{ color: '#ffffff', marginBottom: '16px' }}
          variant="h3"
          align="center"
        >
          On Practical Full Stack Web Development with JS.
        </Typography>

        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Button className={classes.btn} size="large" variant="contained" href="/special-practical-webdev-with-js">
            Apply Now
          </Button>
        </Box>
      </Container>
    </div>
  );
}

Promo.propTypes = {
  className: PropTypes.string
};

export default Promo;
