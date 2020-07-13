import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import {
  Link,
  Box,
  Button,
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
    position: 'relative',
  },
  cardMedia: {
    paddingTop: '61.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  extraPadding: {
    padding: '32px !important',
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
  },
}));
const events = [
  {
    id: '1',
    img: '/static/images/open-source.png',
    title: 'Machine Learning',
    type: 'Webinar',
    description: 'Machine learning ki kahani likhni hai badi wali',
    date_time: 'Today, 9pm IST'
  },
  {
    id: '2',
    img: '/static/images/open-source.png',
    title: 'Machine Learning',
    type: 'Webinar',
    description: 'Machine learning ki kahani likhni hai badi wali',
    date_time: 'Today, 9pm IST'
  },
  {
    id: '3',
    img: '/static/images/open-source.png',
    title: 'Machine Learning',
    type: 'Webinar',
    description: 'Machine learning ki kahani likhni hai badi wali',
    // date_time: 'Today, 9pm IST'
  }
];

function Events({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant="h1" align="center" color="textPrimary">
          Our Online Events
        </Typography>
        <Grid container spacing={4} className={classes.extraMargin}>
          {events.map((event, index) => (
            <Grid
              className={classes.extraPadding}
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
            >
              <Card className={classes.card}>
                {
                  event.date_time ? (
                    <div className={classes.eventdate}>
                      <Typography
                        variant="caption"
                        style={{
                          padding: '0px 12px',
                          fontWeight: 500
                        }}
                      >
                        {event.date_time}
                      </Typography>
                    </div>
                  )
                    : <></>
                }
                <CardMedia
                  className={classes.cardMedia}
                  image={event.img}
                  title={event.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    display="inline"
                    style={{ paddingRight: '15px' }}
                    gutterBottom
                  >
                    {event.title}
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
                      marginTop: '5px',
                      lineHeight: '1.3'
                    }}
                  >
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={12}>
            <div className={classes.box2}>
              <Box
                display="flex"
                justifyContent="center"
                className={classes.btn}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <Button
                    component={RouterLink}
                    to="/"
                    variant="contained"
                    size="small"
                    className={classes.icon}
                  >
                    Subscribe
                  </Button>
                </Grid>
              </Box>
              <Typography className={classes.secondaryText}>
                Our Youtube Channel For
                <Link color="error" component={RouterLink} to="#">
                  {` Previous Webinars`}
                </Link>
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
