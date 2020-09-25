import React from 'react';
import PropTypes from 'prop-types';
import { Typography, makeStyles, Container } from '@material-ui/core';
import SubCard from './SubCard';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: '15px ',
    padding: 0
  },
  card: {
    minHeight: '628px',
    backgroundColor: '#F2F6FF',
    color: '#1D006E',
    borderRadius: '10px',
    padding: '50px 30px'
  }
}));

function MainCard({ content, ...props }) {
  const classes = useStyles();

  return (
    <Container className={classes.card}>
      <Typography variant="h3">{content.title}</Typography>
      <Typography variant="subtitle1" className={classes.content}>
        {content.about}
      </Typography>
      <>
        {content.points.map(point => (
          <SubCard key={point.id} point={point} />
        ))}
      </>
    </Container>
  );
}

MainCard.propTypes = {
  className: PropTypes.string
};

export default MainCard;
