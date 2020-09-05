import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ParallaxSlide from '@mui-treasury/components/slide/parallax';
import PropTypes from 'prop-types';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Chip
} from '@material-ui/core';

import coursesContent from 'src/data/courses';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  root: {
    padding: theme.spacing(10, 10, 10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10)
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    margin: '12px'
  },
  cardMedia: {
    width: '100%',
    height: 'auto'
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {},
  chipActions: {
    display: 'block'
  },
  chip: {
    margin: '8px 0 3px 8px'
  },
  extraMargin: {
    marginTop: '15px',
    marginBottom: '0'
  },
  btn: {
    textTransform: 'none'
  },
  paddingCls: {
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  paddingClsxs: {
    padding: 0
  },
  iconSize: {
    fontSize: '32px'
  },
  text: {
    color: '#FFFFFF'
  },
  avatarLarge: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    margin: theme.spacing(4, 0, 2)
  },

  avatarGrid: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px'
  },

  slide: {
    perspective: 0, // create perspective
    overflow: 'hidden',
    // relative is a must if you want to create overlapping layers in children
    position: 'relative'
  },
  background: {
    width: '100%',
    height: 'auto',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover'
  }
}));

export default function CourseRecommendations() {
  const classes = useStyles();

  const foundation = coursesContent.foundation;

  return (
    <Grid container className={classes.root}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant="h3"
          align="left"
          color="textPrimary"
          style={{
            marginBottom: '20px'
          }}
        >
          See More Courses recommended for You
        </Typography>
      </Grid>

      <Grid container
          align="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {Object.entries(foundation).map(([cname, course], index) => {
            return (
              <Grid id={course.id} item xs={12} sm={6} md={4} lg={4}>
                <CourseCard course={course} />
              </Grid>
            );
          })}
      </Grid>
    </Grid>
  );
}

const CourseCard = ({ course }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      style={{
        background: '#FFFCFB',
        maxWidth: '350px'
      }}
    >
      <CardContent className={classes.cardContent}>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="row"
            style={{
              margin: '8px 0px 0px'
            }}
          >
            <Typography
              align="left"
              variant="body2"
              style={{
                width: '50%',
                color: '#0085FF'
              }}
            >
              {course.difficulty}
            </Typography>
            <Typography
              align="right"
              variant="body2"
              style={{
                width: '50%'
              }}
            >
              <Box fontWeight={600}>{course.level}</Box>
            </Typography>
          </Box>

          <Typography
            variant="h5"
            align="left"
            style={{
              marginBottom: '16px',
              color: '#FF4C00'
            }}
          >
            {course.domain}
          </Typography>

          <Typography variant="h4" align="left">
            {course.title}
          </Typography>
        </Box>
      </CardContent>

      <ParallaxCarousel slides={course.slides} />

      <CardContent className={classes.cardContent}>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="row"
            style={{
              marginTop: '4px 0px'
            }}
          >
            <Typography
              style={{
                marginRight: '8px',
                color: '#A3A3A3'
              }}
            >
              Duration
            </Typography>
            <Typography>{course.duration}</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            style={{
              marginTop: '4px 0px'
            }}
          >
            <Typography
              style={{
                marginRight: '8px',
                color: '#A3A3A3'
              }}
            >
              Upcoming
            </Typography>
            <Typography>No upcoming</Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            style={{
              marginTop: '16px'
            }}
          >
            {course.tags.map((tag, index) => (
              <Chip
                label={
                  <Typography
                    variant="body2"
                    style={{
                      color: '#A6A6A6'
                    }}
                  >
                    {tag}
                  </Typography>
                }
                variant="outlined"
                style={{
                  margin: '4px'
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>

      <Link
        display="flex"
        justifyContent="center"
        to={course.link}
        style={{
          background: '#A60000',
          color: '#FF4C00',
          textDecoration: 'none'
        }}
      >
        <Typography
          align="center"
          style={{
            color: '#FFFFFF'
          }}
        >
          <Box m={1} fontWeight={600}>
            Check Details
          </Box>
        </Typography>
      </Link>
    </Card>
  );
};

const ParallaxCarousel = ({ slides }) => {
  const renderChildren = () =>
    slides.map((slide, index) => {
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="bottom"
          style={{
            height: '141px',
            width: '100%',
            color: '#FFFFFF',
            padding: '8px',
            backgroundImage: `url(${slide.image})`
          }}
        >
          <Typography variant="h4" align="left">
            <Box>{slide.heading}</Box>
          </Typography>
          <Typography variant="h6" align="left">
            <Box fontWeight={600}>{slide.subheading}</Box>
          </Typography>
        </Box>
      );
    });
  return <ParallaxSlide>{renderChildren}</ParallaxSlide>;
};

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div role="tabpanel" hidden={value !== index}>
      <Grid container>{children}</Grid>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
