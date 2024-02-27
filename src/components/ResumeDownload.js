import React from 'react';
import { Button } from '@mui/material';

const ResumeDownload = () => {
  // Define the file URL
  const resumeUrl = '../../public/Ananthababu_periyasamy.pdf';

  // Function to handle the download process
  const handleDownload = () => {
    // Create a new anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Your_Name_Resume.pdf'); // Set the download attribute with the desired file name
    document.body.appendChild(link);
    link.click(); // Simulate a click event to trigger the download
    document.body.removeChild(link); // Clean up: remove the anchor element from the DOM
  };

  return (
    <Button variant="contained" color="primary" onClick={handleDownload}>
      Download Resume
    </Button>
  );
};

export default ResumeDownload;
