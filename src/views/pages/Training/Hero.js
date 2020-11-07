import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import TrainingHero from '../../../components/Hero/TrainingHero';

const useStyles = makeStyles(theme => ({
  root: {},
  box: {
    backgroundColor: '#fff',
    marginRight: '8px',
    color: '#000',
    padding: '4px 12px',
    width: 'min-content',
    borderRadius: '8px',
    display: 'inline-block'
  }
}));

export default function Hero() {
  return (
    <TrainingHero
      title="Introducing CodeForCause"
      title2="6 Months Training"
      subtitle="Training that gives you Industrial Exposure"
      imageUrl="/static/images/backs/training.svg"
      firstComponent={<BoxTab text="Duration 6 Months" />}
      secondComponent={
        <>
          <BoxTab text="20 Projects" />
          <BoxTab text="Certificates" />
        </>
      }
    />
  );
}

export function BoxTab({ text, className = '' }) {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.box, className)}>
      <Typography noWrap>{text}</Typography>
    </Box>
  );
}
