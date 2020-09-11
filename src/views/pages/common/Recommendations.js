import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Hidden,
  GridList,
  GridListTile
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { recommendations } from 'src/data/recommendations';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    padding: theme.spacing(10, 10, 10),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(10, 3, 10)
    }
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  gridList: {
    flexWrap: 'nowrap',
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.1)'
  },
  cardMedia: {
    width: '100%',
    height: 'auto'
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1
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
  root: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    '& dt': {
      marginTop: theme.spacing(2)
    },
    color: '#FFF'
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
    color: '#000'
  },
  textHighlight: {
    color: '#A60000'
  },
  avatarLarge: {
    width: '50px',
    height: '50px',
    marginRight: theme.spacing(2)
  },
  recommenderTitle: {
    color: '#A60000'
  },
  recommenderDetail: {
    color: '#9C9C9C',
    textAlign: 'center'
  }
}));

export default function Recommendations({ recommendationsImages }) {
  const classes = useStyles();

  const large = useMediaQuery('(min-width:1100px)');
  const medium = useMediaQuery('(min-width:900px)');
  const small = useMediaQuery('(min-width:600px)');

  return (
    <Grid container className={classes.heroContent}>
      {/* Hero unit */}

      <Grid
        container
        style={{
          marginBottom: '50px'
        }}
      >
        <Grid item lg={11} md={11} sm={12}>
          <Typography variant="h2" gutterBottom>
            <Box className={classes.text}>What Do Our Students Say</Box>
            <Box className={classes.textHighlight}>About Us</Box>
          </Typography>
        </Grid>

        <Hidden smDown>
          <Grid item lg={1} md={1} sm={1}>
            <img alt="" width="150px" src="/static/reviews/top.png" />
          </Grid>
        </Hidden>
      </Grid>

      <Grid container spacing={4}>
        <GridList
          className={classes.gridList}
          cols={large ? 4 : medium ? 3.5 : small ? 2.7 : 1.4}
        >
          {recommendations.map((recommendation, index) => {
            return (
              <GridListTile
                key={index}
                style={{
                  margin: '20px',
                  borderRadius: '5px',
                  height: 'auto',
                  overflow: 'hidden',
                  boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <img
                      alt=""
                      width="70px"
                      src={
                        index % 2 === 0
                          ? '/static/reviews/high.png'
                          : '/static/reviews/low.png'
                      }
                    />
                  </CardContent>

                  <CardContent className={classes.cardContent}>
                    <Box display="flex" justifyContent="center">
                      <Typography
                        variant="body2"
                        className={classes.recommenderDetail}
                      >
                        <Box m={1}>{recommendation.text}</Box>
                      </Typography>
                    </Box>
                  </CardContent>

                  <CardContent className={classes.cardContent}>
                    <Box display="flex" alignItems="center">
                      <img
                        className={classes.avatarLarge}
                        alt=""
                        width="50px"
                        src={recommendation['avatar']}
                      />
                      <Box display="flex" flexDirection="column">
                        <Typography>
                          <Box fontWeight="fontWeightBold">
                            {recommendation.name}
                          </Box>
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </GridListTile>
            );
          })}
        </GridList>
      </Grid>
    </Grid>
  );
}
