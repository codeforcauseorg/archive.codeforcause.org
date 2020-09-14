import React from 'react';
import { EditApplication } from './EditApplication';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function ApplicationsView({ match }) {

  console.log("Matched in routing", match);

  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/edit`} component={EditApplication}/>
      </Switch>
    </Router>
  );
}

export default ApplicationsView;
