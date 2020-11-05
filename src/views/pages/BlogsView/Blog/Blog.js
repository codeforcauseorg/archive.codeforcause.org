import {
  Avatar,
  Box,
  Grid,
  makeStyles,
  Paper,
  Typography
} from '@material-ui/core';
import React from 'react';
import blogAuthors from '../../../../data/blogAuthors';

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
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: '90%'
      }
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
  },
  author: {
    marginBottom: 0,
    [theme.breakpoints.down('md')]: {
      margin: '20px 0px'
    }
  },
  avatarLarge: {
    width: '62px',
    height: '62px',
    margin: '12px 0px',
    marginRight: theme.spacing(2),
    '& img': {
      width: '100%'
    }
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
        {rawHtml.categories[0]}
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
      <Grid container justify="space-between" alignItems="center">
        <Grid
          item
          className={classes.author}
          justify="flex-end"
          alignContent="flex-end"
          alignItems="flex-end"
        >
          <Box display="flex" alignItems="center">
            <Avatar
              className={classes.avatarLarge}
              alt=""
              width="20px"
              src={blogAuthors[rawHtml.author].avatar}
            />
            <Box display="flex" flexDirection="column">
              <Box fontWeight="fontWeightBold">
                <Typography variant="h6">{rawHtml.author}</Typography>
                <Typography variant="caption">Learner</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid>
          <Grid row container alignItems="center">
            <Typography
              display="inline"
              variant="caption"
              style={{ fontSize: '14px' }}
            >
              Share this Article
            </Typography>
            <Grid>
              <Grid container style={{ marginLeft: '12px' }}>
                <Grid>
                  <img
                    alt=""
                    src="/static/images/icons/social/fb.svg"
                    style={{ height: '34px', display: 'inline' }}
                  />
                </Grid>
                <Grid>
                  <img
                    alt=""
                    src="/static/images/icons/social/ins.svg"
                    style={{ height: '34px', display: 'inline' }}
                  />
                </Grid>
                <Grid>
                  <img
                    alt=""
                    src="/static/images/icons/social/tw.svg"
                    style={{ height: '34px', display: 'inline' }}
                  />
                </Grid>
                <Grid>
                  <img
                    alt=""
                    src="/static/images/icons/social/yt.svg"
                    style={{ height: '34px', display: 'inline' }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div
        dangerouslySetInnerHTML={{
          __html: rawHtml.description.replace(/\n/g, '<br />')
        }}
      />
    </Paper>
  );
}
