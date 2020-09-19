import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Avatar,
  Box,
  Link,
  Grid,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const backgroundColor = '#F2F7FF';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor,
    paddingTop: '30px',
    paddingLeft: 70,
    paddingRight: 70,
    textAlign: 'center',
    //write css for small screen
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
    backgroundColor,
    border: 'none',
    boxShadow: 'none'
  },
  pointer: {
    cursor: 'pointer'
  }
}));

function Team({ mentors, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant="h1" align="center" color="textPrimary">
          Our Team
        </Typography>
        {/* End hero unit */}
        <Grid container spacing={2} className={classes.extraMargin}>
          {mentors.map(mentor => (
            <Grid item key={mentor.id} xs={6} sm={4} md={4} lg={2}>
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
                      variant="h5"
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
          ))}
        </Grid>
      </Container>
    </div>
  );
}

Team.propTypes = {
  className: PropTypes.string
};

export default Team;
