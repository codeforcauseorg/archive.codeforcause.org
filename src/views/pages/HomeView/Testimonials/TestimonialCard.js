import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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
      <Box style={{ margin: '80px 10px' }}>
        <Message>
          <FormatQuoteIcon
            fontSize="large"
            style={{ margin: '0px 80px', color: 'purple' }}
          />
          <Typography variant="h3" align="center" style={{ fontSize: '20px' }}>
            {student.msg}
          </Typography>
          </Message>
        <Box style={{ margin: '2rem 7rem' }}>
          <Avatar alt="Student 1" src="./quote.png" className={classes.small} />
      
        <Typography variant="h6" align="center" style={{margin: '0px -10px'}}>
          {student.name}
        </Typography>
        </Box>
      </Box>
    </div>
  );
}

const Message = styled.div`
position: relative;
height: 200px;
width: 250px;
max-width: 400px;
background: white;
border: 0.5px solid black;
padding: 40px 20px;
box-sizing: box-order;
&:after {
  position: absolute;
  width: 20px;
  height: 20px;
  border-top: 0px solid black;
  border-right: 0.5px solid black;
  border-bottom: 0.5px solid black;
  border-left: 0px solid black;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  content: "";
  transform: rotate(45deg);
  margin-top: -10px;
  background: white;
}
&:hover {
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.2);
}
`


export default TestimonialCard;
