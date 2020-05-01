import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import ProjectCard from 'src/components/ProjectCard';

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main
    }
  },
  arrowIcon: {
    marginLeft: theme.spacing(1)
  }
}));

function Projects({ className, ...rest }) {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [projects, setProjects] = useState(null);

  const getProjects = useCallback(() => {
    axios
      .get('/api/projects/account/projects')
      .then((response) => {
        if (isMountedRef.current) {
          setProjects(response.data.projects);
        }
      });
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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography
          className={classes.title}
          variant="h5"
          color="textPrimary"
        >
          Active Projects
        </Typography>
        <Button
          component={RouterLink}
          to="/app/projects/browse"
        >
          See all
          <KeyboardArrowRightIcon className={classes.arrowIcon} />
        </Button>
      </Box>
      {projects.map((project) => (
        <Box
          mb={2}
          key={project.id}
        >
          <ProjectCard
            project={project}
          />
        </Box>
      ))}
    </div>
  );
}

Projects.propTypes = {
  className: PropTypes.string
};

export default Projects;
