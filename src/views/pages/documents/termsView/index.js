import React, { lazy, Suspense } from 'react';
import Page from 'src/components/Page';

const Content = lazy(() => import('!babel-loader!mdx-loader!./Content.mdx'));

function termsView() {
  return (
    <Page title="Terms of Use">
      <Suspense fallback={null}>
        <Content />
      </Suspense>
    </Page>
  );
}

export default termsView;
