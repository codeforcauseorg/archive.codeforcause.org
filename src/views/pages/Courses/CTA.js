import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    padding: theme.spacing(10, 10, 10),
    backgroundImage: `url("/static/images/backs/cta.png")`,
    backgroundSize: 'cover',
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
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '5px'
  },
  cardMedia: {
    width: '100%',
    height: 'auto'
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
  input: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: '4px',
    height: '30px',
    width: '250px',
    padding: '0px 10px',
    marginRight: theme.spacing(1)
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
    color: '#FFFFFF'
  },
  background: {
    width: '100%',
    backgroundPosition: 'bottom center',
    backgroundSize: 'cover'
  },
  btn: {
    width: '100px',
    textTransform: 'none',
    marginTop: '8px'
  },
  textField: {
    marginBottom: '16px',
    '& label.Mui-focused': {
      color: '#1D006E'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#717171'
      },
      '&:hover fieldset': {
        borderColor: '#000000'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1D006E'
      }
    }
  }
}));
export default function CTA() {
  const classes = useStyles();

  return (
    <Grid container className={classes.heroContent}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography
          variant="h2"
          className={classes.text}
          displayInline
          align="center"
          style={{
            marginBottom: '48px'
          }}
        >
          <Box fontWeight="fontWeightBold">
            Can’t Choose What’s Best For Junior?
          </Box>
        </Typography>
      </Grid>

      <Grid container>
        <Grid item lg={6} md={6} sm={12}>
          <Card
            className={classes.card}
            style={{
              margin: '16px',
              padding: '32px',
              borderRadius: '5px'
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                gutterBottom
                style={{
                  marginBottom: '32px'
                }}
              >
                <Box fontWeight="fontWeightBold">Request a Consultation</Box>
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                style={{
                  color: '#717171',
                  marginBottom: '24px'
                }}
              >
                <Box>
                  Setup a Consultation call with our counsellor and figure out
                  what’s best for your champion.
                </Box>
              </Typography>

              <form noValidate autoComplete="off">
                <TextField
                  id="1"
                  className={classes.textField}
                  label="Parent’s Email"
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  id="1"
                  className={classes.textField}
                  label="Parent’s Name"
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  id="1"
                  className={classes.textField}
                  label="Junior’s Name"
                  variant="outlined"
                  fullWidth
                />

                <TextField
                  id="1"
                  className={classes.textField}
                  label="Your Mobile No."
                  variant="outlined"
                  fullWidth
                />

                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  target="_blank"
                >
                  <Typography variant="body1">Submit</Typography>
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={6} md={6} sm={12} display="flex" flexDirection="column">
          <Card
            className={classes.card}
            style={{
              margin: '16px 16px 32px',
              padding: '32px',
              borderRadius: '5px',
              background: '#FFFFFF',
              color: '#000000'
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                style={{
                  marginBottom: '32px'
                }}
              >
                <Box fontWeight="fontWeightBold">Where To Start?</Box>
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                style={{
                  color: '#717171',
                  marginBottom: '24px'
                }}
              >
                <Box>
                  Let your junior take a basic test with interest, preference,
                  logic and reasoning based questions and Get Course
                  Recommendation.
                </Box>
              </Typography>

              <Typography
                variant="body1"
                color= "secondary"
              >
                <Box fontWeight="fontWeightBold" color="secondary">
                  Take a Test
                </Box>
              </Typography>
            </CardContent>
          </Card>
          <Card
            className={classes.card}
            style={{
              margin: '16px',
              padding: '32px',
              borderRadius: '5px',
              background: '#000000',
              color: '#FFFFFF'
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                style={{
                  marginBottom: '32px'
                }}
              >
                <Box fontWeight="fontWeightBold">Wanna Try A Free Class ?</Box>
              </Typography>

              <Typography
                variant="body1"
                gutterBottom
                style={{
                  color: '#BABABA',
                  marginBottom: '24px'
                }}
              >
                <Box>
                  Get an overview of Coding Juniors with the orientation and a 3
                  days class trial. Let your junior decide the rythm.
                </Box>
              </Typography>

              <Typography
                variant="body1"
                color= "secondary"
              >
                <Box fontWeight="fontWeightBold">Try Now !</Box>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
