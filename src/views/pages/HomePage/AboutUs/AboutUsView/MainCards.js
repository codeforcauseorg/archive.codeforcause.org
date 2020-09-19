import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, makeStyles, Container } from '@material-ui/core';
import MainCard from 'src/components/AboutCard/MainCard';
import { openKnowledgeContent, openSourceContent } from '../../../../../data/HomeViewData/HomeViewData';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '40px 0px 120px',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  }
}));

function MainCards({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Container className={clsx(classes.root, className)} {...rest}>
      <Grid alignItems="center" container justify="center" spacing={8}>
        <Grid item md={6} xs={12}>
          <MainCard content={openKnowledgeContent} />
        </Grid>
        <Grid item md={6} xs={12}>
          <MainCard content={openSourceContent} />
        </Grid>
      </Grid>
    </Container>
  );
}

MainCards.propTypes = {
  className: PropTypes.string
};

export default MainCards;
