/* eslint-disable react/no-array-index-key */
import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/pages/HomeView';
import CAView from 'src/views/pages/CLView';
import EventsView from 'src/views/pages/EventsView';
import LoadingScreen from 'src/components/LoadingScreen';
import Courses from 'src/views/pages/Courses';
import CoursesView from 'src/views/pages/CoursesView';
import ProfileView from 'src/views/pages/ProfileView';
import ApplicationsView from 'src/views/pages/ApplicationsView';

const renderRoutes = () =>

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
              <Courses {...props} />
            </MainLayout>
          )}
        />

        <Route
          path="/gallary"
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
      </Switch>
    </Suspense>

function Routes() {
  return renderRoutes({});
}

export default Routes;
