import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { saveAs } from 'file-saver'; // Import the saveAs function from the file-saver library

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Define the file URL
  const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';

  // Function to handle the download process
  const handleDownload = () => {
    // Trigger the download using the saveAs function
    saveAs(resumeUrl, 'AnanthBabu_periyasamy.pdf'); // Pass the resume URL and the desired file name
  };

  // Function to handle navigation to the contact page
  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the '/contact' route
  };

  return (
    <Container className="home-container">
      <Typography variant="h3" gutterBottom>
        Welcome to Anantha Babu's Portfolio
      </Typography>
      <Typography variant="h4" gutterBottom>
        Software Developer | Web Developer | Full Stack Developer
      </Typography>
      <div className="cta-section">
        <Typography variant="body1" gutterBottom>
          Ready to collaborate or hire me for your next project?
        </Typography>
        <Button variant="contained" color="primary" onClick={handleContactClick} style={{ marginRight: '10px' }}>
          Contact Me
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDownload}>
          Download Resume
        </Button>
      </div>
    </Container>
  );
}

export default Home;
