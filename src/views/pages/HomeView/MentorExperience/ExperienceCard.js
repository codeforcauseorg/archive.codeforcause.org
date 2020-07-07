import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#E2E9FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 230,
    width: 'auto',
    color: '#1D006E'
  }
}));

function ExperienceCard({ exp, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box style={{ margin: 'auto', padding: '40px 0px' }}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
          align="center"
        >
          <img width="70px" alt={exp.title} src={exp.img} />
        </Typography>
        <Typography variant="h3" align="center" style={{ marginTop: 20 }}>
          {exp.count}
        </Typography>
        <Typography variant="h4" align="center">
          {exp.title}
        </Typography>
      </Box>
    </Card>
  );
}

ExperienceCard.propTypes = {
  className: PropTypes.string
};

export default ExperienceCard;
