import React from 'react';

import { EditApplication } from './EditApplication';

function ApplicationsView({ match }) {
  console.log('Matched in routing', match);

  return (
        <EditApplication />
  );
}

export default ApplicationsView;
