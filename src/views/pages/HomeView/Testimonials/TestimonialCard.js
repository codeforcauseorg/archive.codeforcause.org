import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

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

function TestimonialCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box style={{ margin: '40px' }}>
        <Paper elevation={3} style={{ padding: '40px 0px' }}>
          <FormatQuoteIcon
            fontSize="large"
            style={{ margin: '0px 50px', color: 'purple' }}
          />
          <Typography variant="h3" align="center" style={{ fontSize: '20px' }}>
            Some review
          </Typography>
        </Paper>
        <Box style={{ margin: '10px 47px' }}>
          <Avatar alt="Student 1" src="./quote.png" className={classes.small} />
        </Box>
        <Typography variant="h6" align="center">
          Name
        </Typography>
      </Box>
    </div>
  );
}

export default TestimonialCard;
