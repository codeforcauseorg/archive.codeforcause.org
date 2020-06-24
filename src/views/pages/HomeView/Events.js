import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router-dom';

import {
  Link,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.LIGHT,
    paddingTop: '30px',
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  extraMargin: {
    marginTop: theme.spacing(6)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
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
    padding: '12px !important'
  }
}));
const cards = [1, 2, 3];

function Events({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Typography variant="h1" align="center" color="textPrimary">
          Our Online Events
        </Typography>
        {/* End hero unit */}
        <Grid container spacing={4} className={classes.extraMargin}>
          {cards.map(card => (
            <Grid
              className={classes.extraPadding}
              item
              key={card}
              xs={12}
              sm={6}
              md={4}
            >
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Machine Learning
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={6}>
            <Button size="small" color="primary" variant="contained">
              Subscribe
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              className={classes.extraPaddingLink}
              variant="body2"
              display="inline"
            >
              Our Youtube Channel For
              <Link
                color="textPrimary"
                component={RouterLink}
                to="#"
                variant="h6"
              >
                {` Previous Webinars`}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Events.propTypes = {
  className: PropTypes.string
};

export default Events;
