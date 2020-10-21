import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ItemListPage from './ItemListPage';

const item = {
  _id: '2',
  user_uid: '323234',
  c_user_uid: '3234',
  photo: '#1112',
  category: 'Nuts',
  description: 'Bag of Cashew Nuts',
  expiry: '24/10/2020',
  postcode: 'SR5 4TQ',
  location: { type: 'Point', coordinates: [51.562908, 0.21727] },
  availability: '23rd Oct 2020 3-4PM'
};

test('renders ItemListPage', () => {
  const { getByText } = render(
    <ItemListPage myitems={[item]} />
  );

  const linkMyListings = getByText(/MyItemListings/i);
  expect(linkMyListings).toBeInTheDocument();
});
