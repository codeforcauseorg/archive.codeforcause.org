import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Grid,
  makeStyles
} from '@material-ui/core';
import Brief from './Brief';
import Holder from './Holder';
import Members from './Members';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Overview({ project, className, ...rest }) {
  const classes = useStyles();

  return (
    <Grid
      className={clsx(classes.root, className)}
      container
      spacing={3}
      {...rest}
    >
      <Grid
        item
        lg={8}
        xl={9}
        xs={12}
      >
        <Brief project={project} />
      </Grid>
      <Grid
        item
        lg={4}
        xl={3}
        xs={12}
      >
        <Members members={project.members} />
        <Box mt={3}>
          <Holder project={project} />
        </Box>
      </Grid>
    </Grid>
  );
}

Overview.propTypes = {
  className: PropTypes.string,
  project: PropTypes.object.isRequired
};

export default Overview;
