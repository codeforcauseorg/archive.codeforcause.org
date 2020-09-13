import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Collapse,
  IconButton,
  Button
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  root: {
    padding: theme.spacing(0, 10, 10),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3, 10)
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
  }
}));

export default function Schedule({ course }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(0);

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        align="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
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
            >
              {batch.dates}
            </Typography>

            <Typography
              align="left"
              variant="body2"
              style={{
                width: '100%'
              }}
            >
              <Box fontWeight={300}>Applications Open</Box>
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
                  setExpanded(-1);
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

            <Box mb={1} display="flex" flexDirection="row">
              <Typography
                style={{
                  marginRight: '12px'
                }}
                variant="body2"
              >
                Duration
              </Typography>
              <Typography variant="body2">{course.duration}</Typography>
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
              <Typography
                align="left"
                variant="body2"
              >
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

            <Typography
              style={{
                color: '#636363',
                fontSize: '12px',
                marginBottom: '4px'
              }}
              align="left"
            >
              You will need to pay only after your application have been
              accepted.
            </Typography>
          </Box>

          <Box
            flexDirection="row"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{
              padding: '4px 16px',
              background: '#000000',
              borderRadius: '5px'
            }}
          >
            <Button
              color="secondary"
              variant="contained"
              style={{
                textTransform: 'capitalize'
              }}
            >
              <Typography>
                <Box fontWeight={500}>Apply</Box>
              </Typography>
            </Button>
            <Button
              variant="contained"
              style={{
                background: '#FFFFFF',
                marginLeft: '16px',
                textTransform: 'capitalize'
              }}
              onClick={() => {
                setExpanded(-1);
              }}
            >
              <Typography>
                <Box fontWeight={500}>Cancel</Box>
              </Typography>
            </Button>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}
