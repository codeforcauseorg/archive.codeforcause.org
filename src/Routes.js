/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import DocsLayout from 'src/layouts/DocsLayout';
import HomeView from 'src/views/pages/HomeView';
import CAView from 'src/views/pages/CLView';
import EventsView from 'src/views/pages/EventsView';
import LoadingScreen from 'src/components/LoadingScreen';
import MachineLearningView from 'src/views/pages/Courses/MachineLearningView'
import AlgoJavaView from 'src/views/pages/Courses/AlgoJavaView'
import AlgoPythonView from 'src/views/pages/Courses/AlgoPythonView'
import WebFullStakView from 'src/views/pages/Courses/WebFullStakView'
import CompetitiveJavaView from 'src/views/pages/Courses/CompetitiveJavaView'
import PythonDevelopmentView from 'src/views/pages/Courses/PythonDevelopmentView'
import CoursesView from 'src/views/pages/CoursesView';
import ProfileView from 'src/views/pages/ProfileView'
import ApplicationsView from 'src/views/pages/ApplicationsView'

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
    layout: MainLayout,
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
    path: '/courses',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/courses',
        component: CoursesView
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '/profile',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/profile',
        component: ProfileView
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '/applications',
    layout: MainLayout,
    routes: [
      {
        path: '/applications',
        component: ApplicationsView
      },
      {
        component: () => <Redirect to="/404" />
      }
    ]
  },
  {
    path: '/machine-learning-using-python',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/machine-learning-using-python',
        component: MachineLearningView
      }
    ]
  },
  {
    path: '/ds-algo-with-java',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/ds-algo-with-java',
        component: AlgoJavaView
      }
    ]
  },
  {
    path: '/ds-algo-with-python',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/ds-algo-with-python',
        component: AlgoPythonView
      }
    ]
  },
  {
    path: '/fullstack-webdev-with-js',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/fullstack-webdev-with-js',
        component: WebFullStakView
      }
    ]
  },
  {
    path: '/competitive-programming-using-java',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/competitive-programming-using-java',
        component: CompetitiveJavaView
      }
    ]
  },
  {
    path: '/application-dev-using-python',
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: '/application-dev-using-python',
        component: PythonDevelopmentView
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
