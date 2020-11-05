import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ParallaxSlide from '@mui-treasury/components/slide/parallax';
import React from 'react';
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
    margin: '12px',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.13)'
  },
  cardMedia: {
    width: '100%',
    height: 'auto'
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    padding: '16px 0px 16px 16px'
  },
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
  },
  gridList: {
    flexWrap: 'nowrap',
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  bottomCardContent: {
    margin: '0px 8px 18px 0px',
    padding: '4px 8px',
    border: '1px solid',
    borderColor: '#A6A6A6',
    borderRadius: '5px',
    width: 'min-content'
  }
}));

export default function CourseCard({ course }) {
  const classes = useStyles();
  return (
    <Box>
      <Card
        className={classes.card}
        display="flex"
        style={{
          maxWidth: '320px'
        }}
      >
        <CardContent>
          <Box display="flex" flexDirection="column">
            <Typography
              align="left"
              variant="h5"
              style={{
                color: '#0085FF',
                paddingTop: '14px'
              }}
            >
              {course.difficulty}
            </Typography>
            <Typography
              align="left"
              variant="h6"
              color="secondary"
              style={{
                margin: '12px 0'
              }}
            >
              {course.domain}
            </Typography>

            <Typography variant="h4" align="left" style={{ fontWeight: 500 }}>
              {course.title}
            </Typography>
          </Box>
        </CardContent>

        <ParallaxCarousel slides={course.slides} />

        <CardContent className={classes.cardContent}>
          <Box
            mt={0}
            mr={0}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            style={{ width: '102%' }}
          >
            {course.tags.slice(0, 3).map((tag, index) => (
              <div className={classes.bottomCardContent} variant="outlined">
                <Typography
                  style={{ color: '#a6a6a6', fontWeight: 500 }}
                  variant="caption"
                  noWrap={true}
                >
                  {tag}
                </Typography>
              </div>
            ))}
          </Box>

          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              style={{
                marginBottom: '8px'
              }}
            >
              <Typography
                variant="caption"
                style={{
                  marginRight: '8px',
                  color: '#A3A3A3'
                }}
              >
                Duration
              </Typography>
              <Typography variant="caption">{course.duration}</Typography>
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              style={{
                marginTop: '4px'
              }}
            >
              <Typography
                variant="caption"
                style={{
                  marginRight: '8px',
                  marginBottom: '8px',
                  color: '#A3A3A3'
                }}
              >
                Upcoming
              </Typography>
              <Typography variant="caption">{course.upcoming}</Typography>
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
            textDecoration: 'none',
            marginBottom: '16px'
          }}
        >
          <Box m={1}>
            <Typography
              align="center"
              variant="h6"
              style={{
                color: '#fff',
                padding: '8px 0px'
              }}
            >
              Check Details
            </Typography>
          </Box>
        </Link>
      </Card>
    </Box>
  );
}

const ParallaxCarousel = ({ slides }) => {
  const renderChildren = () =>
    slides.map((slide, index) => {
      return (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="bottom"
          style={{
            height: '160px',
            width: '100%',
            color: '#FFFFFF'
          }}
        >
          <img
            src={slide.image}
            alt=""
            style={{
              height: '160px',
              width: '100%',
              color: '#FFFFFF',
              padding: '8px 0px'
            }}
          />
        </Box>
      );
    });
  return <ParallaxSlide>{renderChildren}</ParallaxSlide>;
};
