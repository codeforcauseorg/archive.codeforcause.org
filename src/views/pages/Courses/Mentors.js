import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Avatar,
  Box,
  Link,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { members } from 'src/data/Members';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 10, 0),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0, 3, 0)
    }
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  teamName: {
    marginTop: theme.spacing(2),
    textDecoration: 'none'
  },
  card: {
    padding: ''
  },
  cardMedia: {
    paddingTop: '61.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  extraPadding: {
    padding: '32px !important'
  },
  extraPaddingLink: {
    paddingLeft: '32px !important'
  },
  avatar: {
    height: 122,
    width: 122
  },
  member: {
    border: 'none',
    boxShadow: 'none'
  },
  pointer: {
    cursor: 'pointer'
  }
}));

function Mentors({ mentors, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" flexDirection="column" className={classes.cardGrid}>
        <Typography variant="h3" align="left" color="textPrimary">
        Meet Our Mentors
        </Typography>
        {/* End hero unit */}
        <Grid
          container
          spacing={2}
          alignItems="center"
          style={{
            marginTop: '40px'
          }}
        >
          {mentors.map(mentorName => {
            const mentor = members[mentorName];

            return (
              <Grid item xs={6} sm={4} md={4} lg={2}>
                <Card className={classes.card + ' ' + classes.member}>
                  <CardContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      flexDirection="column"
                      textAlign="center"
                    >
                      <Avatar
                        className={classes.avatar}
                        component="a"
                        target="_blank"
                        href={mentor.linkedin}
                        src={mentor.avatar}
                      />
                      <Link
                        component="a"
                        className={classes.teamName}
                        color="textPrimary"
                        variant="h6"
                        underline="never"
                        href={mentor.linkedin}
                        target="_blank"
                      >
                        {mentor.name}
                      </Link>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}

Mentors.propTypes = {
  className: PropTypes.string
};

export default Mentors;
