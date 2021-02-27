import { Container, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(180deg, #2A185A 0%, #000000 100%)',
    padding: theme.spacing(5, 10, 5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 10, 5)
    },
    color: '#000000'
  }
}));

function Header({ benefits, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography
          style={{ color: '#ffffff' }}
          variant="h1"
          align="center"
        >
          Offering 90% Scholarship On this Batch. Apply Now.
        </Typography>

      </Container>
    </div>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
