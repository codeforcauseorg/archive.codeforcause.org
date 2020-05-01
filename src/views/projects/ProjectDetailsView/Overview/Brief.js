import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Chip,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Markdown from 'react-markdown/with-html';

const useStyles = makeStyles((theme) => ({
  root: {},
  markdown: {
    fontFamily: theme.typography.fontFamily,
    '& p': {
      marginBottom: theme.spacing(2)
    }
  }
}));

function Brief({ project, className, ...rest }) {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={6}
          >
            <Typography
              variant="subtitle2"
              color="textSecondary"
            >
              Project Name
            </Typography>
            <Typography
              variant="h6"
              color="textPrimary"
            >
              {project.title}
            </Typography>
            <Box mt={3}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
              >
                Technology Stack
              </Typography>
              <Box mt={1}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    variant="outlined"
                    label={tag}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography
            variant="subtitle2"
            color="textSecondary"
          >
            Description
          </Typography>
          <Markdown
            source={project.brief}
            className={classes.markdown}
          />
        </Box>
      </CardContent>
    </Card>
  );
}

Brief.propTypes = {
  project: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default Brief;
