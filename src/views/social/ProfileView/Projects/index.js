import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, makeStyles } from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import ProjectCard from 'src/components/ProjectCard';

const useStyles = makeStyles(() => ({
  root: {}
}));

function Projects({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState(null);

  const getProjects = useCallback(() => {
    if (isMountedRef.current) {
      axios
        .get('/api/social/users/1/projects')
        .then((response) => setProjects(response.data.projects));
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  if (!projects) {
    return null;
  }

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid
        container
        spacing={3}
      >
        {projects.map((project) => (
          <Grid
            item
            key={project.id}
            lg={4}
            lx={4}
            md={6}
            xs={12}
          >
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

Projects.propTypes = {
  className: PropTypes.string
};

export default Projects;
