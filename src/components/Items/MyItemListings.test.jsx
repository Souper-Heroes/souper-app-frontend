import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import MyItemListings from './MyItemListings';

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

test('renders MyItemListings with AddItem Button', () => {
  const { getByText } = render(
    <MyItemListings key={item.ItemId} type='provide' myitems={[item]} />
  );

  const linkAddItem = getByText(/Add Item/i);
  expect(linkAddItem).toBeInTheDocument();
});

//test('renders MyItemListings without Add Item Button', () => {
//  const { getByText } = render(
//    <MyItemListings key={item.ItemId} type='collect' myitems={[item]} />
//  );

//  const linkNoAddItem = getByText(/Add Item/i);
//  expect(linkNoAddItem).toHaveLength(0);
//});
