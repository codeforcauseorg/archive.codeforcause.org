import React from 'react';
import HeaderItem from '../../../components/HeaderItems';

// eslint-disable-next-line react/prop-types
const Item = ({ title, link, ...props }) => {
  return (
    <>
      <HeaderItem title={title} link={link} {...props} />
    </>
  );
};

export default Item;
