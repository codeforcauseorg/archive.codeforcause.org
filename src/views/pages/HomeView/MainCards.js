import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, makeStyles, Container } from '@material-ui/core';
import MainCard from 'src/components/AboutCard/MainCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '40px 0px 120px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  }
}));

function MainCards({ className, ...rest }) {
  const classes = useStyles();
  const openKnowledgeContent = {
    title: 'Open Knowledge',
    about:
      'Our structure is based on generating the knowledge flow that is not limited by bottlenecks. So we expand our mentor base with every student we teach. We inspire our mentees to pass on the guidance and support.',
    points: [
      {
        id: '1',
        img: '/static/images/icons/sf1.svg',
        content:
          'We host live classes and workshops regularly with focus on hands-on learning, which is crucial in gaining real-world software development experience.'
      },
      {
        id: '2',
        img: '/static/images/icons/sf1.svg',
        content:
          'Get connected to a large group of developers and open-source enthusiasts to get all your doubts resolved - whether technical, career-oriented or soft skills.'
      },
      {
        id: '3',
        img: '/static/images/icons/sf1.svg',
        content:
          'Learn from the experiences of the community members in the industry which will help you with career guidance for the path best suited to you.'
      }
    ]
  };
  const openSourceContent = {
    title: 'Open Source',
    about:
      'Our structure is based on generating the knowledge flow that is not limited by bottlenecks. So we expand our mentor base with every student we teach. We inspire our mentees to pass on the guidance and support.',
    points: [
      {
        id: '1',
        img: '/static/images/icons/sf1.svg',
        content:
          'We host live classes and workshops regularly with focus on hands-on learning, which is crucial in gaining real-world software development experience.'
      },
      {
        id: '2',
        img: '/static/images/icons/sf1.svg',
        content:
          'Get connected to a large group of developers and open-source enthusiasts to get all your doubts resolved - whether technical, career-oriented or soft skills.'
      },
      {
        id: '3',
        img: '/static/images/icons/sf1.svg',
        content:
          'Learn from the experiences of the community members in the industry which will help you with career guidance for the path best suited to you.'
      }
    ]
  };

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
