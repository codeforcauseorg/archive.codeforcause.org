import React, { lazy, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import HomeView from 'src/views/pages/HomeView';
import LoadingScreen from 'src/components/LoadingScreen';
import GuestRoute from 'src/components/GuestRoute';

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          exact
          path="/404"
          component={lazy(() => import('src/views/pages/Error404View'))}
        />
        <GuestRoute
          exact
          path="/login"
          component={lazy(() => import('src/views/auth/LoginView'))}
        />
        <Route
          exact
          path="/login-unprotected"
          component={lazy(() => import('src/views/auth/LoginView'))}
        />
        <GuestRoute
          exact
          path="/register"
          component={lazy(() => import('src/views/auth/RegisterView'))}
        />
        <Route
          exact
          path="/register-unprotected"
          component={lazy(() => import('src/views/auth/RegisterView'))}
        />

        <Route
          path="*"
          render={props => (
            <MainLayout {...props}>
              <Switch>
                <Route exact path="/home" component={HomeView} />
                <Redirect to="/404" />
              </Switch>
            </MainLayout>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
