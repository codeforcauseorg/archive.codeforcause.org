import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0px auto',
    backgroundColor: '#f2f2f2',
    '& p ': {
      color: '#000000',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '36px',
      margin: 0,
      padding: 0
    },
    '& h3': {
      color: '#000',
      fontFamily: 'Montserrat',
      fontStyle: 'bold',
      fontSize: '26px',
      // lineHeight: '39px',
      fontWeight: 600,
      padding: '30px 0px 0px 0px',
      margin: 0
    },

    '& h4': {
      color: '#000',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      // lineHeight: '30px',
      fontWeight: 600,
      padding: '30px 0px 0px 0px',
      margin: 0
    },
    '& img': {
      width: '70%',
      margin: 'auto'
    },
    '& ul,ol': {
      marginLeft: '50px',
      color: '#000000',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '19px',
      lineHeight: '30px'
    },
    '& figure': {
      textAlign: 'center',
      margin: '50px 0px'
    },
    '& a': {
      fontSize: '20px',
      lineHeight: '20px',
      color: '#000'
    }
  },
  extraPadding: {
    padding: '20px 0px'
  }
}));

export default function Blog({ rawHtml }) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={0}>
      <Typography
        className={classes.extraBottompadding}
        variant="h6"
        color="secondary"
      >
        Experience
      </Typography>
      <Typography className={classes.extraBottompadding} variant="h3">
        {rawHtml.title}
      </Typography>
      <Typography
        variant="body2"
        style={{ paddingTop: '12px', fontSize: '16px' }}
      >
        {rawHtml.pubDate.split(' ')[0].replaceAll('-', ' ')} | 7 min Read
      </Typography>
      <div
        dangerouslySetInnerHTML={{
          __html: rawHtml.description.replace(/\n/g, '<br />')
        }}
      />
    </Paper>
  );
}
