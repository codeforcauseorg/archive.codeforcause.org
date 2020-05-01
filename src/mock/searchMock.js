import mock from 'src/utils/mock';

mock.onGet('/api/search').reply(() => new Promise(((resolve) => {
  setTimeout(() => {
    resolve([200, {
      results: [
        {
          title: 'What does Algolia do?',
          description: 'Algolia broadly consists of two parts: search implementation and search analytics. We provide tools that make it easy for your developers...'
        },
        {
          title: 'Search as a feedback loop',
          description: 'To be clear, search doesn’t know the direction that your business should take. However, it can help you gather information on what your customers want...'
        },
        {
          title: 'What can Algolia do for my users?',
          description: 'Algolia provides your users with a fast and rich search experience. Your Algolia search interface can contain a search bar, filters, infinite scrolling...'
        }
      ]
    }]);
  }, 1500);
})));
