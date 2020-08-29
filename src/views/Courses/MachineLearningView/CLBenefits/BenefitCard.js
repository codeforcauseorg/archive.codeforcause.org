import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Box, Card, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#5D517E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 230,
    width: 'auto',
    color: '#1D006E'
  }
}));

function BenefitCard({ benefit, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box style={{ margin: 'auto', padding: '40px 10px' }}>
        <Typography
          component="h3"
          gutterBottom
          variant="overline"
          color="textSecondary"
          align="center"
        >
          <img width="70px" alt="benefit" src={benefit.img} />
        </Typography>
        <Typography
          variant="h6"
          align="center"
          style={{ marginTop: 20, color: '#FFFFFF' }}
        >
          {benefit.detail}
        </Typography>
      </Box>
    </Card>
  );
}

BenefitCard.propTypes = {
  className: PropTypes.string
};

export default BenefitCard;
