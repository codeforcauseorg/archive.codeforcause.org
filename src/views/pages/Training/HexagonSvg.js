import React from 'react';

export default function HexagonSvg({ fill, ...rest }) {
  return (
    <svg
      width="52"
      height="59"
      viewBox="0 0 52 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M26 0L51.9808 14.75V44.25L26 59L0.0192375 44.25V14.75L26 0Z"
        fill={fill}
      />
    </svg>
  );
}
