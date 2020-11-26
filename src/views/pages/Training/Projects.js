import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import HexagonSvg from './HexagonSvg';
import ProjectSwipes from './ProjectSwipes';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    padding: theme.spacing(10),
    textAlign: 'center',
    zIndex: 0,
    position: 'relative',
    backgroundColor: '#F4F4F4',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(10, 3)
    }
  },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: '8vw',
    paddingRight: '8vw'
  },
  box: {
    border: '2px solid #29005E',
    boxShadow: 'inset 0px 0px 1px rgba(0, 133, 255, 0.6)',
    filter: 'drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.14))',
    marginRight: '18px',
    marginTop: '60px',
    color: '#000',
    padding: '12px 24px',
    borderRadius: '4px',
    display: 'inline-block',
    whiteSpace: 'no-wrap'
  }
}));

export default function Projects() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ zIndex: -1 }}>
        <HexagonSvg
          fill="#B1ECFF"
          style={{
            width: 160,
            height: 160,
            position: 'absolute',
            left: '10%',
            top: '25%',
            zIndex: -1
          }}
        />
        {/* <HexagonSvg fill="#FFE1E1" style={{width: 90, height: 90, position: 'absolute', left: '80%', top: '15%',zIndex: -1, transform: 'rotate(30deg)'}} /> */}
        <HexagonSvg
          fill="#B1ECFF"
          style={{
            width: 150,
            height: 150,
            position: 'absolute',
            left: '-4%',
            top: '90%',
            zIndex: -1,
            transform: 'rotate(30deg)'
          }}
        />
        <HexagonSvg
          fill="#FFE1E1"
          style={{
            width: 200,
            height: 200,
            position: 'absolute',
            left: '82%',
            top: '88%',
            zIndex: -1
          }}
        />
      </div>
      <Typography variant="h2">
        Projects In Portfolio After this course
      </Typography>
      <OutlinedButtons boldText="6" normalText="Months" />
      <OutlinedButtons boldText="20" normalText="Awesome Projects" />
      <OutlinedButtons boldText="24*7" normalText="Obstacle Assist" />
      <Typography
        align="left"
        style={{
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '30px',
          margin: '40px 0px 0px'
        }}
      >
        Amazing Projects
      </Typography>
      <ProjectSwipes />
    </div>
  );
}

function OutlinedButtons({ boldText, normalText }) {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Typography display="inline" noWrap variant="h4" color="primary">
        {boldText} {'  '}
      </Typography>
      <Typography
        display="inline"
        noWrap
        style={{ fontWeight: 500, fontSize: '18px' }}
      >
        {normalText}
      </Typography>
    </Box>
  );
}
