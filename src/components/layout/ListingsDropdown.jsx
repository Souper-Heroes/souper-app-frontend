import React, { useState } from 'react';

import CustomDropdown from 'components/MaterialKitComponents/CustomDropdown/CustomDropdown';

export default function ListingsDropdown({ sortItems }) {
  const [sortBy, setSortBy] = useState('Sort By');
  const [menuItem, setMenuItem] = useState('');

  const handleOnClickDropdown = (menuItem) => {
    console.log(menuItem);
    setMenuItem(menuItem);
    setSortBy(`Sorted By ${menuItem}`);
    sortItems(menuItem);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <CustomDropdown
      hoverColor='rose'
      dropdownHeader='Sort By'
      buttonText={sortBy}
      onClick={(menuItem) => handleOnClickDropdown(menuItem)}
      buttonProps={{
        round: true,
        color: 'rose',
      }}
      dropdownList={[
        'Expiry Date',
        'Category',
        //{ divider: true },
        //'Separated link',
        //{ divider: true },
        //'One more separated link',
      ]}
    />
  );
}
