import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, makeStyles, Container } from '@material-ui/core';
import SubCard from './SubCard';

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: '15px '
  },
  card: {
    backgroundColor: '#EEF5FF',
    borderRadius: '10px',
    padding: '50px 32px'
  }
}));

const temporaryDescription = "Think of a software education platform that could solve it by Providing hands-on learning Establishing a community";

function MainCard({ title, ...props }) {
  const classes = useStyles();
  // const { user } = useSelector((state) => state.account);

  return (
    <Grid item md={6} xs={12}>
      <Container className={classes.card}>
        <Typography variant="h3">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          className={classes.content}
        >
          A common misread can be that, how can software development help the
          community. Think of a software development platform that could solve
          it by Managing resources.
        </Typography>
        <SubCard description={temporaryDescription} />
        <SubCard description={temporaryDescription} />
        <SubCard description={temporaryDescription} />
      </Container>
    </Grid>
  );
}

MainCard.propTypes = {
  className: PropTypes.string
};

export default MainCard;
