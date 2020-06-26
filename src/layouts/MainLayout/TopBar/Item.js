import React from 'react';
import HeaderItem from '../../../components/HeaderItems';

// eslint-disable-next-line react/prop-types
const Item = ({ title, ...props }) => {
  return (
    <>
      <HeaderItem title={title} {...props} />
    </>
  );
};

export default Item;
