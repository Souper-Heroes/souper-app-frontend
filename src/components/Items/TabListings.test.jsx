import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import TabListings from './TabListings';

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

const userProfile = {
  userId: '1',
  photoId: '#9111',
  userName: 'Doctor Strange',
  userFullName: 'Benedict Cumberbatch',
  address: '63 Rose Way',
  postCode: 'EN4 5TQ',
  email: 'dstrange@gmailx.com',
  password: 'dfsssD@02sda',
  preferredItemDistance: '2 miles',
  preferredProvideStartTime: '9:30AM',
  preferredProvideEndTime: '2:30AM',
};

test('renders TabListings with Listings', () => {
  const { getByText } = render(
    <TabListings userProfile={userProfile} userItems={[item]} />
  );

  const linkText = getByText(/Listings/i);
  expect(linkText).toBeInTheDocument();
});

test('renders TabListings with Collections', () => {
  const { getByText } = render(
    <TabListings userProfile={userProfile} userItems={[item]} />
  );

  const linkText = getByText(/Collections/i);
  expect(linkText).toBeInTheDocument();
});
