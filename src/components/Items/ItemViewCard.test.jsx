import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ItemViewCard from './ItemViewCard';

const item = {
  itemId: '2',
  photoId: '#1112',
  provideUserId: '1',
  collectUserId: '3',
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

test('renders ItemViewCard Component', () => {
  const { getByText } = render(<ItemViewCard item={item} />);
  const linkExpiry = getByText(/Expiry Date/i);
  const linkCategory = getByText(/Category/i);

  expect(linkExpiry).toBeInTheDocument();
  expect(linkCategory).toBeInTheDocument();
});
