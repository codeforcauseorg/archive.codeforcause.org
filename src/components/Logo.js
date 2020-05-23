import React from 'react';

function Logo(props) {
  return (
    <img
      alt="Logo"
      width="42px"
      height="43px"
      src="/static/logo.jpg"
      {...props}
    />
  );
}

export default Logo;
