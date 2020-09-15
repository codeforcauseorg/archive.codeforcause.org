import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListApplications } from './ListApplications';
import { PreviewApplication } from './PreviewApplication';
import { EditApplication } from './EditApplication';

function ApplicationsView({ match }) {
  console.log('Matched in routing', match);

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/:id/edit`} component={EditApplication} />
        <Route
          path={`${match.path}/:id/preview`}
          component={PreviewApplication}
        />
        <Route path={`${match.path}/`} component={ListApplications} />
      </Switch>
    </Router>
  );
}

export default ApplicationsView;
