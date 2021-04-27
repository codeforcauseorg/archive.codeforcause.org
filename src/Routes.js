/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import LoadingScreen from 'src/components/LoadingScreen';
import coursesContent from 'src/data/courses';
import specialContent from 'src/data/specialcourses';
import bootcampsContent from 'src/data/bootcamps';
import HomeView from 'src/views/pages/HomeView';
import MainLayout from 'src/layouts/MainLayout';
// import CoursesView from 'src/views/pages/CoursesView';

const CAView = lazy(() => import('src/views/pages/CLView'));
const ProfileView = lazy(() => import('src/views/pages/ProfileView'));
const ApplicationsView = lazy(() => import('src/views/pages/ApplicationsView'));
const CoursesView = lazy(() => import('src/views/pages/CoursesView'));

const BlogsView = lazy(() => import('src/views/pages/BlogsView'));
const Blog = lazy(() => import('src/views/pages/BlogsView/Blog'));
const Error404View = lazy(() => import('src/views/pages/Error404View'));
const StudentDashboardView = lazy(() =>
  import('src/views/pages/StudentDashboardView')
);
const EditProfileView = lazy(() =>
  import('src/views/pages/StudentDashboardView/EditProfile')
);
const CoursePage = lazy(() => import('src/views/pages/Course/CoursePage'));
const SpecialCoursePage = lazy(() =>
  import('src/views/pages/SpecialCourse/SpecialCoursePage')
);

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
          <sub>
            <ScrollReset />
            <MainLayout>
              <CoursesView {...props} />
            </MainLayout>
          </sub>
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
        path={`/special-practical-webdev-with-js`}
        exact
        render={props => (
          <MainLayout>
            <SpecialCoursePage
              course={specialContent.advanced.webDevelopment}
              {...props}
            />
          </MainLayout>
        )}
      />

      <Route
        path={`/six-weeks-of-dsa-with-cpp`}
        exact
        render={props => (
          <MainLayout>
            <SpecialCoursePage
              course={specialContent.foundation.cppBootcamp}
              {...props}
            />
          </MainLayout>
        )}
      />

      <Route
        path={`/whatsapp-clone-with-mern`}
        exact
        render={props => (
          <MainLayout>
            <BootcampPage
              course={bootcampsContent.js.whatsAppClone}
              {...props}
            />
          </MainLayout>
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
        path={`/ds-algo-with-cpp`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage course={coursesContent.foundation.algoCpp} {...props} />
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
        path={`/competitive-programming-using-cpp`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.advanced.competitiveCpp}
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

      <Route
        path={`/six-months-competitive-programming-with-cpp`}
        exact
        render={props => (
          <MainLayout>
            <CoursePage
              course={coursesContent.training.competitiveCpp}
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
