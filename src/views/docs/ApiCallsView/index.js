import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('!babel-loader!mdx-loader!./Content.mdx'));

function ApiCallsView() {
  return (
    <Page title="Api Calls">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default ApiCallsView;
