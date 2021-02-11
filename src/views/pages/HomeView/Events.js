import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery
} from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import axios from 'src/utils/axios';
import SwiperCore, { Controller, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../assets/css/swiper-styles.css';
import EventCard from '../../../components/Event/EventCard';
import { bootcamps } from 'src/data/HomeViewData/HomeViewData';

SwiperCore.use([Navigation, Pagination, Controller]);

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
  titleDesc: {
    fontWeight: '500',
    marginTop: '5px',
    lineHeight: '1.3'
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
    color: 'white',
    backgroundColor: '#000000'
  },
  swiper: {
    padding: theme.spacing(2, 3, 5),
    marginBottom: theme.spacing(1)
  },
  loading: {
    position: 'relative',
    padding: '140px 49vw',
    width: '100%'
  }
}));

function Events({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [events, setEvents] = useState(null);

  const large = useMediaQuery('(min-width:1030px)');
  const medium = useMediaQuery('(min-width:640px)');
  const small = useMediaQuery('(min-width:400px)');

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

  const eventSlides = [];
  if (events) {
    bootcamps.map((event, index) => {
      return eventSlides.push(
        <SwiperSlide key={`slide-${index}`} tag="li">
          <EventCard event={event} index={index} style={{ height: 'auto' }} />
        </SwiperSlide>
      );
    });
  }

  if (!events) {
    return (
      <Container className={classes.loading}>
        <CircularProgress
          style={{ left: '50%', display: 'absolute' }}
        ></CircularProgress>
      </Container>
    );
  }

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant="h1" align="center" color="textPrimary">
          Our Bootcamps
        </Typography>
        <Grid container spacing={4} className={classes.extraMargin}>
          <Hidden xsDown>
            <Swiper
              id="main"
              navigation={true}
              pagination={{ clickable: true }}
              spaceBetween={70}
              slidesPerView={large ? 3 : medium ? 2 : small ? 1 : 1}
              slidesPerGroup={large ? 2 : medium ? 2 : small ? 1 : 1}
              className={classes.swiper}
            >
              {eventSlides}
            </Swiper>
          </Hidden>
          <Hidden smUp>
            {events
              .slice(Math.max(events.length - 3, 0))
              .map((event, index) => (
                <EventCard event={event} index={index} />
              ))}
          </Hidden>
          <Grid item xs={12} sm={12} md={12}>
            <div className={classes.box2}>
              <Box
                display="flex"
                justifyContent="center"
                className={classes.btn}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    component="a"
                    href="https://www.youtube.com/channel/UCfv8cds8AfIM3UZtAWOz6Gg?sub_confirmation=1"
                    target="_blank"
                    variant="contained"
                    size="small"
                    className={classes.icon}
                  >
                    Subscribe
                  </Button>
                </Grid>
              </Box>
              <Typography className={classes.secondaryText}>
                Our Youtube Channel for Upcoming Webinars
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Events.propTypes = {
  className: PropTypes.string
};

export default Events;
