import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ItemListPage from './ItemListPage';

const item = {
  itemId: 2,
  photoId: '#1112',
  provideUserId: 1,
  collectUserId: 3,
  category: 'Nuts',
  description: 'Bag of Cashew Nuts',
  expiryDate: '24/10/2020',
  location: 'SR5 4TQ',
  preferredProvideStartTime: '24/10/2020 10:30AM',
  preferredProvideEndTime: '24/10/2020 5:50PM',
  preferredCollectStartTime: null,
  preferredCollectEndTime: null,
  reservedItem: 'false',
};

test('renders ItemListPage', () => {
  const { getByText } = render(
    <ItemListPage key={item.ItemId} type='collect' myitems={[item]} />
  );

  const linkMyListings = getByText(/TabListings/i);
  expect(linkMyListings).toBeInTheDocument();
});
