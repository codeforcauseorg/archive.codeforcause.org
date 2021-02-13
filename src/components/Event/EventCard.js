import { Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: '10px',
    color: '#000',
    '&:hover': {
      color: '#B20000',
      boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.12)'
    }
  },
  cardMedia: {
    paddingTop: '55.75%', // 16:9
    borderBottom: '1px solid #eee'
  },
  cardContent: {
    flexGrow: 1,
    width: '104%'
  },
  gridCls: {
    padding: '32px !important',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      padding: '15px !important'
    }
  },
  icon: {
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '20px'
    },
    '&:hover': {
      backgroundColor: '#000',
      opacity: '0.8'
    }
  },
  titleDesc: {
    fontWeight: '500',
    marginTop: '5px',
    lineHeight: '1.3'
  },
  eventdate: {
    position: 'absolute',
    top: 18,
    zIndex: 1,
    borderRadius: '0px 5px 5px 0px',
    color: 'white',
    backgroundColor: '#000000'
  }
}));

function Eventcard({ className, event, index, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.gridCls}
      component="a"
      href={event.link}
      target="_blank"
      item
      key={index}
      xs={12}
      sm={6}
      md={4}
    >
      <Card elevation={0} className={classes.card} {...rest}>
        {event.time ? (
          <div className={classes.eventdate}>
            <Typography
              variant="caption"
              style={{
                padding: '0px 12px',
                fontWeight: 500
              }}
            >
              {event.time}
            </Typography>
          </div>
        ) : (
          <></>
        )}
        <CardMedia
          className={classes.cardMedia}
          image={event.image}
          title={event.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            display="inline"
            style={{
              paddingRight: '15px',
              color: '#000'
            }}
            gutterBottom
          >
            {event.domain}
          </Typography>
          <Typography
            display="inline"
            style={{
              fontWeight: 500,
              background: '#1D006E',
              color: '#fff',
              padding: '0px 8px',
              fontSize: '14px',
              borderRadius: '2px'
            }}
            gutterBottom
          >
            {event.type}
          </Typography>
          {event.timeBelow ? (
            <Typography
              display="inline"
              style={{
                marginLeft: '5px',
                fontWeight: 500,
                background: '#A60000',
                color: '#fff',
                padding: '0px 8px',
                fontSize: '14px',
                borderRadius: '2px'
              }}
              gutterBottom
            >
              {event.timeBelow}
            </Typography>
          ) : (
            ''
          )}
          <Typography variant="subtitle1" className={classes.titleDesc}>
            {event.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

Eventcard.propTypes = {
  className: PropTypes.string
};

export default Eventcard;
