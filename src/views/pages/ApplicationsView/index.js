import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { ListApplications } from './ListApplications';
import { PreviewApplication } from './PreviewApplication';
import { EditApplication } from './EditApplication';

function ApplicationsView({ match }) {
  console.log('Matched in routing', match);

  return (
      <Switch>
        <Route path={`${match.path}/:id/edit`} component={EditApplication} />
        <Route
          path={`${match.path}/:id/preview`}
          component={PreviewApplication}
        />
        <Route path={`${match.path}/`} component={ListApplications} />
      </Switch>
  );
}

export default ApplicationsView;
