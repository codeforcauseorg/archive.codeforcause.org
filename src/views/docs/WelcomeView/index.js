import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('!babel-loader!mdx-loader!./Content.mdx'));

function WelcomeView() {
  return (
    <Page title="Welcome">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default WelcomeView;
