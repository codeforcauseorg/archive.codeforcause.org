import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Card, Button } from '@material-ui/core';
import DetailsBottom from './partials/DetailsBottom';

import ApplyModal from './ApplyModal';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  root: {
    padding: theme.spacing(10, 10, 10),
    background: '#F5F6FF',
    display: 'flex',
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
  chip: {
    colorPrimary: '#B20000'
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

export default function FinalAction({ course, batch }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        xs={12}
        sm={8}
        md={9}
        lg={9}
        align="center"
        display="flex"
        justifyContent="center"
      >
        <DetailsBottom course={course} batch={batch} bottom={true} />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={3}
        lg={3}
        align="center"
        display="flex"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          style={{
            width: '100%'
          }}
        >
          <Card
            style={{
              padding: '16px',
              width: '100%'
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              style={{
                margin: '8px 0px 0px',
                color: '#A60000'
              }}
            >
              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                style={{
                  width: '100%'
                }}
              >
                <Box
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                  flexDirection="row"
                >
                  <img
                    src="/static/images/icons/calendar.png"
                    alt="Calender"
                    style={{
                      height: '24px',
                      paddingRight: '12px'
                    }}
                  />
                  <Typography
                    variant="h4"
                    style={{
                      width: '100%'
                    }}
                  >
                    {batch.dates}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  style={{
                    width: '100%',
                    marginTop: '12px'
                  }}
                >
                  <Box fontWeight={500}>{batch.timing}</Box>
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    width: '100%'
                  }}
                >
                  <Box fontWeight={500}>{batch.days}</Box>
                </Typography>

                <Typography
                  variant="h3"
                  style={{
                    width: '100%',
                    marginTop: '12px',
                    color: '#939393',
                    textDecoration: 'line-through'
                  }}
                >
                  <Box fontWeight={500}>{batch.priceCut}</Box>
                </Typography>

                <Typography
                  variant="h2"
                  style={{
                    width: '100%',
                    marginTop: '12px'
                  }}
                >
                  <Box fontWeight={500}>{batch.price}</Box>
                </Typography>
              </Box>
            </Box>
          </Card>
          
          <ApplyModal />
          
        </Box>
      </Grid>
    </Grid>
  );
}
