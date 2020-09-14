import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CoursesView from '../CoursesView';

import MachineLearningView from 'src/views/pages/Courses/MachineLearningView'
import AlgoJavaView from 'src/views/pages/Courses/AlgoJavaView'
import AlgoPythonView from 'src/views/pages/Courses/AlgoPythonView'
import WebFullStakView from 'src/views/pages/Courses/WebFullStakView'
import CompetitiveJavaView from 'src/views/pages/Courses/CompetitiveJavaView'
import PythonDevelopmentView from 'src/views/pages/Courses/PythonDevelopmentView'


function ApplicationsView({ match }) {
  console.log('Matched in routing', match);

  return (
    <Router>
      <Switch> 
        <Route path={`${match.path}/machine-learning-using-python`} component={MachineLearningView} />
        <Route path={`${match.path}/ds-algo-with-java`} component={AlgoJavaView} />
        <Route path={`${match.path}/ds-algo-with-python`} component={AlgoPythonView} />
        <Route path={`${match.path}/fullstack-webdev-with-js`} component={WebFullStakView} />
        <Route path={`${match.path}/competitive-programming-using-java`} component={CompetitiveJavaView} />
        <Route path={`${match.path}/application-dev-using-python`} component={PythonDevelopmentView} />
        <Route path={`${match.path}/`} component={CoursesView} />
      </Switch>
    </Router>
  );
}

export default ApplicationsView;
