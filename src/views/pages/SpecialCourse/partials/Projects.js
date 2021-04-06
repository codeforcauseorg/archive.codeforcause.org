import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, makeStyles, Box } from '@material-ui/core';

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
      <Container
        maxWidth="lg"
        style={{
          width: flat ? '100%' : '360px'
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          style={{
            flexWrap: flat ? 'nowrap' : 'wrap'
          }}
        >
          <Typography
            variant="h4"
            style={{
              margin: '12px 0px 12px 8px'
            }}
          >
            You'll make in this course
          </Typography>
          {projects.map((project, index) => {
            return <Project project={project} />;
          })}
        </Box>
      </Container>
    </div>
  );
}

function Project({ project }) {
  return (
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
          marginBottom: '8px'
        }}
      />
      <Typography>{project.title}</Typography>
    </Box>
  );
}

Projects.propTypes = {
  className: PropTypes.string
};

export default Projects;
