import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, makeStyles, Container } from '@material-ui/core';
import MainCard from '../../../components/AboutCard/MainCard';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#350070',
    padding: '120px 2em'
  }
}));

function MainCards({ className, ...rest }) {
  const classes = useStyles();
  // const { user } = useSelector((state) => state.account);

  return (
    <Container className={clsx(classes.root, className)} {...rest}>
      <Grid alignItems="center" container justify="center" spacing={10}>
        <MainCard title="Open Knowledge" />
        <MainCard title="Open Source" />
      </Grid>
    </Container>
  );
}

MainCards.propTypes = {
  className: PropTypes.string
};

export default MainCards;
