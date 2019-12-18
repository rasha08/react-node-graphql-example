import React from 'react';
import { map } from 'ramda';

import { useSocialItemsContext } from './context/social-items';
import { SocialEntity } from './shared/models';
import { BaseLayout, Card, Filters } from './components';
import { useInfiniteScroll } from './shared/hooks';

const App: React.FC = () => {
  const {
    state: { items, currentPage },
    setCurrentPage,
  } = useSocialItemsContext();

  const loadMore = () => setCurrentPage(currentPage + 1);

  useInfiniteScroll(loadMore);

  return (
    <BaseLayout>
      <Filters />
      {map(
        (item: SocialEntity) => (
          <Card item={item} key={item.title} />
        ),
        items
      )}
    </BaseLayout>
  );
};

export default App;
