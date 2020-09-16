/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/pages/HomeView';
import CAView from 'src/views/pages/CLView';
import EventsView from 'src/views/pages/EventsView';
import LoadingScreen from 'src/components/LoadingScreen';
import CoursesView from 'src/views/pages/CoursesView';
import ProfileView from 'src/views/pages/ProfileView';
import ApplicationsView from 'src/views/pages/ApplicationsView';

import MachineLearningView from 'src/views/pages/Courses/MachineLearningView';
import AlgoJavaView from 'src/views/pages/Courses/AlgoJavaView';
import AlgoPythonView from 'src/views/pages/Courses/AlgoPythonView';
import WebFullStakView from 'src/views/pages/Courses/WebFullStakView';
import CompetitiveJavaView from 'src/views/pages/Courses/CompetitiveJavaView';
import PythonDevelopmentView from 'src/views/pages/Courses/PythonDevelopmentView';

const renderRoutes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <MainLayout>
            <HomeView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path="/applications"
        exact
        render={props => (
          <MainLayout>
            <ApplicationsView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path="/events"
        exact
        render={props => (
          <MainLayout>
            <EventsView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path="/profile"
        exact
        render={props => (
          <MainLayout>
            <ProfileView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path="/courses"
        render={props => (
          <MainLayout>
            <CoursesView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path="/campusLeaders"
        exact
        render={props => (
          <MainLayout>
            <CAView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path={`/machine-learning-using-python`}
        exact
        render={props => (
          <MainLayout>
            <MachineLearningView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path={`/ds-algo-with-java`}
        exact
        render={props => (
          <MainLayout>
            <AlgoJavaView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path={`/ds-algo-with-python`}
        exact
        render={props => (
          <MainLayout>
            <AlgoPythonView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path={`/fullstack-webdev-with-js`}
        exact
        render={props => (
          <MainLayout>
            <WebFullStakView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path={`/competitive-programming-using-java`}
        exact
        render={props => (
          <MainLayout>
            <CompetitiveJavaView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path={`/application-dev-using-python`}
        exact
        render={props => (
          <MainLayout>
            <PythonDevelopmentView {...props} />
          </MainLayout>
        )}
      />
    </Switch>
  </Suspense>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
