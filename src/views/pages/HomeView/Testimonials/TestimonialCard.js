//eslint-disable-next-line
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

/** @jsx jsx */
import {jsx} from '@emotion/core';
import styled from '@emotion/styled';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '130px 0px',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}));

function TestimonialCard({ student }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box style={{ margin: '20px 10px'}}>
        <Message>
          <FormatQuoteIcon
            fontSize="large"
            style={{ margin: '0px 115px', color: 'purple' }}
          />
          <Typography variant="h3" align="center" style={{ fontSize: '20px' }}>
            {student.msg}
          </Typography>
        </Message>
        <Box style={{ margin: '2.3rem 8.2rem' }}>
          <Avatar
            alt={student.name}
            src="./quote.png"
            className={classes.large}
          />

          <Typography
            variant="h5"
            align="center"
            style={{ margin: '10px -5px' }}
          >
            {student.name}
          </Typography>
          <Typography
            variant="h7"
            align="center"
            style={{ margin: '10px' }}
          >
            {student.subName}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

const Message = styled.div`
  position: relative;
  height: 200px;
  width: 300px;
  max-width: 400px;
  background: white;

  padding: 40px 20px;
  box-sizing: box-order;
  &:after {
    position: absolute;
    width: 20px;
    height: 20px;
    border-top: 0px solid black;
   
    top: 100%;
    left: 50%;
    margin-left: -10px;
    content: '';
    transform: rotate(45deg);
    margin-top: -10px;
    background: white;
  }
  &:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export default TestimonialCard;
