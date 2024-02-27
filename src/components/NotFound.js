// components/NotFound.js
import React from 'react';
import { Typography } from '@mui/material';

const NotFound = () => {
  return (
    <div>
      <Typography variant="h2" align="center" gutterBottom>
        404 Not Found
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Sorry, the page you are looking for does not exist.
      </Typography>
    </div>
  );
}

export default NotFound;
