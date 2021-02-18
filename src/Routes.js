/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen'; //
import coursesContent from 'src/data/courses';
<<<<<<< HEAD
import Success from './views/pages/PaymentStatus/Success';
import Cancelled from './views/pages/PaymentStatus/Failure';
=======
import bootcampsContent from 'src/data/bootcamps';
import HomeView from 'src/views/pages/HomeView';
const MainLayout = lazy(() => import('src/layouts/MainLayout'));
const CAView = lazy(() => import('src/views/pages/CLView')); //
const CoursesView = lazy(() => import('src/views/pages/CoursesView')); //
const ProfileView = lazy(() => import('src/views/pages/ProfileView')); //
const ApplicationsView = lazy(() => import('src/views/pages/ApplicationsView')); //
const BlogsView = lazy(() => import('src/views/pages/BlogsView'));
const Blog = lazy(() => import('src/views/pages/BlogsView/Blog'));
const Error404View = lazy(() => import('src/views/pages/Error404View')); //
const StudentDashboardView = lazy(() =>
  import('src/views/pages/StudentDashboardView')
);
const EditProfileView = lazy(() =>
  import('src/views/pages/StudentDashboardView/EditProfile')
);
const CoursePage = lazy(() => import('src/views/pages/Course/CoursePage'));
const BootcampPage = lazy(() =>
  import('src/views/pages/Bootcamp/BootcampPage')
);
const TermsView = lazy(() => import('./views/pages/documents/termsView'));
const DocsLayout = lazy(() => import('./layouts/DocsLayout'));
const PrivacyView = lazy(() => import('./views/pages/documents/privacyView'));
const RefundView = lazy(() => import('./views/pages/documents/refundView'));
const ScrollReset = lazy(() => import('./components/ScrollReset'));
const Success = lazy(() => import('./views/pages/PaymentStatus/Success'));
const Cancelled = lazy(() => import('./views/pages/PaymentStatus/Failure'));
const EventsView = lazy(() => import('src/views/pages/EventsView')); //
const HireWithUsView = lazy(() => import('src/views/pages/HireWithUsView'));
>>>>>>> 4c2118ad64ad68602a613c55ea17d168c7b20f22

const renderRoutes = () => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      <Route
        path="/"
        exact
        render={props => (
          <>
            <ScrollReset />
            <MainLayout>
              <HomeView {...props} />
            </MainLayout>
          </>
        )}
      />
      <Route
        path="/home"
        exact
        render={props => (
          <>
            <ScrollReset />
            <MainLayout>
              <HomeView {...props} />
            </MainLayout>
          </>
        )}
      />
      <Route
        path="/courses"
        render={props => (
          <t>
            <ScrollReset />
            <MainLayout>
              <CoursesView {...props} />
            </MainLayout>
          </t>
        )}
      />
      <Route
        path="/events"
        exact
        render={props => (
          <MainLayout>
            <ScrollReset />
            <EventsView {...props} />
          </MainLayout>
        )}
      />

      <Route
        path="/campusLeaders"
        exact
        render={props => (
          <span>
            <MainLayout>
              <CAView {...props} />
            </MainLayout>
          </span>
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
        path="/profile"
        exact
        render={props => (
          <MainLayout>
            <ProfileView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path="/student"
        exact
        render={props => (
          <MainLayout>
            <StudentDashboardView {...props} />
          </MainLayout>
        )}
      />
      <Route path="/success" exact render={props => <Success />} />
      <Route path="/cancel" exact render={props => <Cancelled />} />
      <Route
        path="/editProfile"
        exact
        render={props => (
          <MainLayout>
            <EditProfileView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path="/blogs"
        exact
        render={props => (
          <MainLayout>
            <BlogsView {...props} />
          </MainLayout>
        )}
      />
      <Route
        path="/blog/:id"
        exact
        render={props => (
          <>
            <ScrollReset />
            <MainLayout>
              <Blog {...props} />
            </MainLayout>
          </>
        )}
      />
      <Route
        path={`/zomato-clone-with-react-js`}
        exact
        render={props => (
          <MainLayout>
            <BootcampPage course={bootcampsContent.js.zomatoClone} {...props} />
          </MainLayout>
        )}
      />
      <Route
        path={`/machine-learning-using-python`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.advanced.machineLearning}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/ds-algo-with-java`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.foundation.algoJava}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/ds-algo-with-python`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.foundation.algoPython}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/ds-algo-with-js`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage course={coursesContent.foundation.algoJS} {...props} />
          </MainLayout>
        )}
      />
      <Route
        path={`/fullstack-webdev-with-js`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.advanced.webDevelopment}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/competitive-programming-using-java`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.advanced.competitiveJava}
              {...props}
            />
          </MainLayout>
        )}
      />
      <Route
        path={`/application-dev-using-python`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.foundation.devPython}
              {...props}
            />
          </MainLayout>
        )}
      />

      <Route
        path={`/six-months-fullstack-webdev-with-js`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.training.webDevelopment}
              {...props}
            />
          </MainLayout>
        )}
      />

      <Route
        path={`/six-months-competitive-programming-with-java`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.training.competitiveJava}
              {...props}
            />
          </MainLayout>
        )}
      />

      <Route
        path={`/six-months-machine-learning-with-python`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.training.machineLearning}
              {...props}
            />
          </MainLayout>
        )}
      />

      {/* Privacy, refund policies, and terms and conditions routes */}
      <Route
        path={`/privacy`}
        exact
        render={props => (
          <DocsLayout>
            <PrivacyView />
          </DocsLayout>
        )}
      />
      <Route
        path={`/terms`}
        exact
        render={props => (
          <DocsLayout>
            <TermsView />
          </DocsLayout>
        )}
      />
      <Route
        path={`/refundpolicies`}
        exact
        render={props => (
          <DocsLayout>
            <RefundView />
          </DocsLayout>
        )}
      />
      <Route
        path={`/hirewithus`}
        exact
        render={props => (
          <MainLayout>
            <HireWithUsView />
          </MainLayout>
        )}
      />
      <Route component={Error404View} />
    </Switch>
  </Suspense>
);

function Routes() {
  return renderRoutes({});
}

export default Routes;
