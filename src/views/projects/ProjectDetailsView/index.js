import React, {
  useCallback,
  useState,
  useEffect
} from 'react';
import {
  Box,
  Container,
  Divider,
  Tabs,
  Tab,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import Header from './Header';
import Overview from './Overview';
import Files from './Files';
import Activities from './Activities';
import Subscribers from './Subscribers';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

function ProjectDetailsView() {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [currentTab, setCurrentTab] = useState('overview');
  const [project, setProject] = useState(null);
  const tabs = [
    { value: 'overview', label: 'Overview' },
    { value: 'files', label: 'Files' },
    { value: 'activity', label: 'Activity' },
    { value: 'subscribers', label: 'Subscribers' }
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  const getProject = useCallback(() => {
    axios
      .get('/api/projects/projects/1')
      .then((response) => {
        if (isMountedRef.current) {
          setProject(response.data.project);
        }
      });
  }, [isMountedRef]);

  useEffect(() => {
    getProject();
  }, [getProject]);

  if (!project) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Project Details"
    >
      <Container maxWidth="lg">
        <Header project={project} />
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="secondary"
            value={currentTab}
            variant="scrollable"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box mt={3}>
          {currentTab === 'overview' && <Overview project={project} />}
          {currentTab === 'files' && <Files files={project.files} />}
          {currentTab === 'activity' && <Activities activities={project.activities} />}
          {currentTab === 'subscribers' && <Subscribers subscribers={project.subscribers} />}
        </Box>
      </Container>
    </Page>
  );
}

export default ProjectDetailsView;
