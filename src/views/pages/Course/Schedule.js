import React, { useState } from 'react';
import { Grid, Typography, Box, Collapse, IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

import ApplyModal from './ApplyModal';

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
  boxCover: {
    margin: theme.spacing(3, 3),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(3, 1)
    }
  },
  content: {
    borderRadius: '14px',
    background: '#F1F4FE'
  },
  marginBottom: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    }
  }
}));

export default function Schedule({ course }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(course.default);

  return (
    <Grid container className={classes.root}>
      <LimitedTimeBookNow />

      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        align="center"
        display="flex"
        justify="center"
        alignItems="stretch"
        direction="column"
      >
        <Box display="flex" flexDirection="column" className={classes.content}>
          <Typography
            variant="h2"
            align="center"
            style={{
              marginBottom: '16px',
              marginTop: '40px'
            }}
          >
            Select a Batch that Fits Your Schedule
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            className={classes.boxCover}
          >
            {course.schedule.map((batch, batchIndex) => {
              return (
                <BatchDropBox
                  key={batchIndex}
                  course={course}
                  batch={batch}
                  batchIndex={batchIndex}
                  expanded={expanded}
                  setExpanded={setExpanded}
                />
              );
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

function BatchDropBox({ course, batch, batchIndex, expanded, setExpanded }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      m={2}
      style={{
        background: '#FFFFFF',
        borderRadius: '5px'
      }}
    >
      <Box
        style={{
          display: 'flex',
          padding: '0px 16px',
          margin: '8px 0px',
          flexDirection: 'column'
        }}
        onClick={() => {
          setExpanded(batchIndex);
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          style={{
            margin: '8px 0px 0px',
            color: batchIndex === expanded ? '#A60000' : '#000000'
          }}
        >
          <Box>
            <img
              src="/static/images/icons/calendar.png"
              alt="Calender"
              style={{
                height: '24px',
                paddingRight: '12px'
              }}
            />
          </Box>

          <Box
            alignItems="center"
            display="flex"
            flexDirection="column"
            style={{
              width: '100%'
            }}
          >
            <Typography
              align="left"
              variant="h5"
              style={{
                width: '100%'
              }}
              component={'span'}
            >
              {batch.dates}
            </Typography>

            <Typography
              align="left"
              variant="body2"
              style={{
                width: '100%'
              }}
              component={'span'}
            >
              <Box fontWeight={300}>
                {batch.active ? 'Applications Open' : 'Applications Closed'}
              </Box>
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            style={{
              width: '80px',
              color: '#A60000'
            }}
          >
            {batchIndex === expanded ? (
              <IconButton
                onClick={() => {
                  batchIndex = !batchIndex;
                }}
              >
                <ExpandLessIcon />
              </IconButton>
            ) : (
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>
      <Collapse in={batchIndex === expanded}>
        <Box
          flexDirection="column"
          display="flex"
          style={{
            margin: '0px 16px 16px'
          }}
        >
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h5"
              align="left"
              color="secondary"
              style={{
                marginBottom: '8px'
              }}
            >
              {course.domain}
            </Typography>

            <Typography
              variant="h4"
              align="left"
              style={{
                marginBottom: '8px'
              }}
            >
              {course.title}
            </Typography>

            {batch.mentor ? (
              <Box mb={1} display="flex" flexDirection="row">
                <Typography
                  style={{
                    marginRight: '12px'
                  }}
                  variant="body2"
                >
                  Mentors
                </Typography>
                <Typography variant="body2">{batch.mentor}</Typography>
              </Box>
            ) : (
              ''
            )}

            <Box mb={1} display="flex" flexDirection="row">
              <Typography
                style={{
                  marginRight: '12px'
                }}
                variant="body2"
              >
                Duration
              </Typography>
              <Typography variant="body2">
                {batch.duration}
                {batch.language ? (
                  <span>
                    {' '}
                    <span style={{ fontWeight: 900 }}> &#183; </span>{' '}
                    {batch.language}
                  </span>
                ) : (
                  ''
                )}
              </Typography>
            </Box>

            <Box mb={2} display="flex" flexDirection="row">
              <Typography
                style={{
                  marginRight: '12px'
                }}
                variant="body2"
              >
                Schedule
              </Typography>
              <Typography align="left" variant="body2">
                {`${batch.days} (${batch.timing})`}
              </Typography>
            </Box>

            <Box mb={1} display="flex" flexDirection="row">
              <Typography
                style={{
                  marginRight: '24px',
                  color: '#939393',
                  textDecoration: 'line-through'
                }}
                variant="h4"
              >
                {batch.priceCut}
              </Typography>

              <Typography
                style={{
                  color: '#A60000'
                }}
                variant="h4"
              >
                {batch.price}
              </Typography>
            </Box>
            {batch.active?(
            <Typography
            style={{
              color: '#000000'
            }}
            variant="body2"
          >
            Apply coupon <strong>EARLYSAVE60</strong> to get this course in{' '}
            <strong>
              ₹{' '}
              {parseInt(
                course.schedule[course.default].price.match(/\d+/g).join('')
              ) * 0.4}
            </strong>
          </Typography>
          ) : undefined}

          </Box>

         
          <Box
            flexDirection="row"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              marginTop: '12px',
              padding: '4px 16px',
              background: '#282828',
              borderRadius: '5px'
            }}
          >
            <ApplyModal course={course} batch={batch} />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}

function LimitedTimeBookNow() {
  const classes = useStyles();

  return (
    <div
      className={classes.marginBottom}
      style={{
        textAlign: 'center',
        backgroundImage: 'url(/static/images/courses/limitedTimeBookNow.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        width: '100%',
        borderRadius: '14px'
      }}
    >
      <Typography variant="h2" color="secondary" style={{ marginTop: '80px' }}>
        Book your Seat Now{' '}
      </Typography>
      <Typography
        variant="h3"
        color="primary"
        style={{ margin: '40px 0px 80px' }}
      >
        Limited Seats Hurry!
      </Typography>
    </div>
  );
}
