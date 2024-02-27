// Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Anantha babu's Portfolio</h1>
      <h3>Software Developer | Web Developer | Full Stack Developer.</h3>
      <h4 className='text-align: center'>Skils :</h4>
      <p>
        React JS
        <br></br>Spring Boot
        <br></br>Java Script
        <br></br>MY SQL
        <br></br>Spring Freamework
      </p>
      <div className="cta-section">
        <p>Ready to collaborate or hire me for your next project?</p>
        <button>Contact Me</button>
      </div>
    </div>
  );
}

export default Home;
