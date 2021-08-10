import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Container, Grid, Typography, makeStyles } from '@material-ui/core';
import { FAQuestions } from '../Course/partials/FAQuestions';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 10, 10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10)
    },
    color: '#000000'
  }
}));

const faqs = {
  faqs: [
    {
      title: 'Will this help me with my career path?',
      answer:
        'Yes. If you learn well, all that the course intends to teach, you’ll be able to impress quite a few interviewers across quite a few fine companies.'
    },
    {
      title: 'How your doubts will get resolved?',
      answer:
        'We have an army of TA’s who are available in different time slots to resolve all your doubts. You can also interact with faculty through Slack.'
    },
    {
      title: 'Is this course suitable for me?',
      answer:
        'Definitely! If you want to shift to software developer career path, then this course is perfect for you!'
    }
  ]
};

function FAQ({className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Frequently Asked Questions
        </Typography>
        <Grid container component="dl" style={{ padding: '20px 0px 20px' }}>
          <FAQuestions course={faqs} />
        </Grid>
      </Container>
    </div>
  );
}

FAQ.propTypes = {
  className: PropTypes.string
};

export default FAQ;
