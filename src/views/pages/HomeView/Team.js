import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import {
  Avatar,
  Box,
  Link,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.LIGHT,
    paddingTop: '30px',
    paddingLeft: 70,
    paddingRight: 70,
    textAlign: 'center'
    //write css for small screen
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  extraMargin: {
    marginTop: theme.spacing(6)
  },
  extraMarginTop: {
    marginTop: theme.spacing(2)
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
  }
}));
const cards = [1, 2, 3];

function Team({ mentors, className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant="h1" align="center" color="textPrimary">
          Our Team
        </Typography>
        {/* End hero unit */}
        <Grid container spacing={4} className={classes.extraMargin}>
          {mentors.map(mentor => (
            <Grid item key={mentor.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    textAlign="center"
                  >
                    <Avatar className={classes.avatar} src={mentor.avatar} />

                    <Typography
                      className={classes.extraMarginTop}
                      color="textPrimary"
                      variant="h5"
                    >
                      {mentor.name}
                    </Typography>
                    {/* <Typography color="textSecondary" variant="body2">
                      {mentor.designation}
                    </Typography> */}
                  </Box>
                </CardContent>
                <CardActions>
                  <Typography
                    align="justify"
                    color="textSecondary"
                    variant="body2"
                  >
                    {mentor.description}
                  </Typography>
                </CardActions>
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
