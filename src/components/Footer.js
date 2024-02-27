// components/Footer.js
import React from 'react';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Typography variant="body1" align="center" color="inherit" gutterBottom>
        &copy; {new Date().getFullYear()} Your Website
      </Typography>
    </footer>
  );
}

export default Footer;
