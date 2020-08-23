import React from 'react';

import { Typography } from '@material-ui/core';
// import authService from 'src/services/authService';

const OpenSource = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 64,
      backgroundColor: '#A60000'
    }}
  >
    <div
      style={{
        padding: '10% 10px',
        whiteSpace: 'nowrap'
      }}
    >
      <Typography variant="h6">Open Source</Typography>
    </div>
  </div>
);

export default OpenSource;
