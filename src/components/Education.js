// Education.js
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Education = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Education
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Bachelor of Science in Computer Science
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          JP Collage of Arts And Science, Tenkasi
        </Typography>
        <Typography variant="body1" gutterBottom>
          Manonmaniam Sundaranar University (MS University) Tirunelveli
        </Typography>
      </Paper>
      {/* Add additional Paper components for other education experiences */}
    </Container>
  );
}

export default Education;
