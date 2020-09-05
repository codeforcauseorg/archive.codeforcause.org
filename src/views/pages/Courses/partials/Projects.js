import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Typography,
  makeStyles,
  Box,
  GridList,
  GridListTile
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#F2F7FF',
    paddingTop: theme.spacing(1),
    borderRadius: '5px'
  },

  centerCls: {
    paddingLeft: '5px',
    paddingRight: '5px'
  }
}));

function Projects({ projects, flat }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{
        width: flat ? "100%" :'360px',
      }}>
        <GridList
          style={{
            flexWrap: flat ? "nowrap" :'wrap',
          }}
        >
          {projects.map((project, index) => {
            return <Project project={project} />;
          })}
        </GridList>
      </Container>
    </div>
  );
}

function Project({ project }) {
  return (
    <GridListTile>
      <Box
        display="inline-flex"
        flexDirection="column"
        width="300px"
        style={{
          margin: '8px',
          padding: '8px 0px'
        }}
      >
        <img
          alt={project.title}
          src={project.img}
          style={{
            width: '100%',
            height: '100%',
            boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.18)',
            marginBottom: '8px'
          }}
        />
        <Typography>{project.title}</Typography>
      </Box>
    </GridListTile>
  );
}

Projects.propTypes = {
  className: PropTypes.string
};

export default Projects;
