/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import CLLayout from 'src/layouts/CLLayout';
import DocsLayout from 'src/layouts/DocsLayout';
import HomeView from 'src/views/pages/HomeView';
import CAView from 'src/views/pages/CLView';
import EventsView from 'src/views/pages/EventsView';
import LoadingScreen from 'src/components/LoadingScreen';

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/home" />
  },
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/pages/Error404View'))
  },
  {
    path: '/privacy',
    layout: DocsLayout,
    routes: [
      {
        exact: true,
        path: '/privacy',
        component: lazy(() => import('src/views/pages/documents/privacyView'))
      }
    ]
  },
  {
    path: '/terms',
    layout: DocsLayout,
    routes: [
      {
        exact: true,
        path: '/terms',
        component: lazy(() => import('src/views/pages/documents/termsView'))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '/refundpolicies',
    layout: DocsLayout,
    routes: [
      {
        exact: true,
        path: '/refundpolicies',
        component: lazy(() => import('src/views/pages/documents/refundView'))
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '/campusLeaders',
    layout: CLLayout,
    routes: [
      {
        exact: true,
        path: '/campusLeaders',
        component: CAView
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '/events',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/events',
        component: EventsView
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '*',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/home',
        component: HomeView
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  }
];

const renderRoutes = routes =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                        <Component {...props} />
                      )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
