import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="h5" gutterBottom>
        Contact No: +91 7305938076
      </Typography>
      <Typography variant="h5" gutterBottom>
        Email: <Link href="mailto:pmananthababu@gmail.com" target="_blank" rel="noopener">pmananthababu@gmail.com</Link>
      </Typography>
      <Typography variant="h5" gutterBottom>
        LinkedIn: <Link href="https://www.linkedin.com/in/anantha-babu-7b7116216" target="_blank" rel="noopener">www.linkedin.com/in/anantha-babu-7b7116216</Link>
      </Typography>
      <Typography variant="h5" gutterBottom>
        GitHub: <Link href="https://github.com/AnanthaBabuP" target="_blank" rel="noopener">https://github.com/AnanthaBabuP</Link>
      </Typography>
    </Container>
  );
}

export default Contact;
