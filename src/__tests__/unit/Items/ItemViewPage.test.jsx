import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import ItemViewPage from 'components/Items/ItemViewPage';

const item = {
  itemId: '2',
  photoId: '#1112',
  provideUserId: '1',
  collectUserId: '3',
  category: ['Nuts'],
  description: 'Bag of Cashew Nuts',
  expiryDate: '24/10/2020',
  location: 'SR5 4ZQ',
  preferredProvideStartTime: '24/10/2020 10:30AM',
  preferredProvideEndTime: '24/10/2020 5:50PM',
  preferredCollectStartTime: null,
  preferredCollectEndTime: null,
  reservedItem: 'false',
};

test('renders ItemViewPage Component', () => {
  const { getByText } = render(<ItemViewPage item={item} />);
  const linkLocation = getByText(/Location/i);

  expect(linkLocation).toBeInTheDocument();
});
