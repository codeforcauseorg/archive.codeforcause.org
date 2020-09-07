import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.LIGHT,
    padding: '30px 0',
    paddingLeft: 70,
    paddingRight: 70,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 15,
      paddingRight: 15
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  extraMargin: {
    marginTop: theme.spacing(6)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  },
  cardMedia: {
    paddingTop: '55.75%', // 16:9
    borderBottom: '1px solid #eee'
  },
  cardContent: {
    flexGrow: 1
  },
  gridCls: {
    padding: '32px !important',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      padding: '15px !important'
    }
  },
  extraPaddingLink: {
    paddingLeft: '32px !important'
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
  btn: {
    padding: '0 20px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  box2: {
    verticalAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  eventdate: {
    position: 'absolute',
    top: 18,
    zIndex: 1,
    borderRadius: '0px 5px 5px 0px',
    color: 'black',
    backgroundColor: '#00FF75'
  }
}));

function Events({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [events, setEvents] = useState(null);

  const getEvents = useCallback(() => {
    axios
      .get(
        'https://us-central1-codeforcauseorg.cloudfunctions.net/widgets/events'
      )
      .then(response => {
        if (isMountedRef.current) {
          setEvents(response.data);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  if (!events) {
    return null;
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" flexDirection="column">
        <Container className={classes.cardGrid} maxWidth="lg">
          <Typography variant="h1" align="center" color="textPrimary">
            Live Or Upcoming Events
          </Typography>
          <EventCards events={events} upcoming={'true'} />
        </Container>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Typography variant="h1" align="center" color="textPrimary">
            Streamed Online Events
          </Typography>
          <EventCards events={events} upcoming={'false'} />
        </Container>
      </Box>
    </div>
  );
}

function EventCards({ events, upcoming }) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.extraMargin}>
      {events.slice(Math.max(events.length - 3, 0)).map((event, index) => {
        if (event.upcoming !== upcoming) {
          return null;
        }

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
            <Card className={classes.card}>
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
                  style={{ paddingRight: '15px' }}
                  gutterBottom
                >
                  {event.domain}
                </Typography>
                <Typography
                  variant="span"
                  display="inline"
                  style={{
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
                <Typography
                  variant="subtitle1"
                  style={{
                    color: '#A60000',
                    fontWeight: '500',
                    marginTop: '5px',
                    lineHeight: '1.3'
                  }}
                >
                  {event.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

Events.propTypes = {
  className: PropTypes.string
};

export default Events;
