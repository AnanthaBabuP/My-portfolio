import React, { useState } from 'react';
import { Container, Typography, Paper, Button, List, ListItem, ListItemText } from '@mui/material';

const Experience = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMoreRexess, setShowMoreRexess] = useState(false);
  const [showMoreTrainee, setShowMoreTrainee] = useState(false);
  

  const handleWaterlinks = () => {
    setShowMore(!showMore);
  };

  const handleRexess = () => {
    setShowMoreRexess(!showMoreRexess);
  };

  const handleTrainee = () => {
    setShowMoreTrainee(!showMoreTrainee);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Experience
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Software Trainne
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sathish System pvt Ltd., Tirunelveli
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          6 Months
        </Typography>
        <Typography variant="body1" gutterBottom>
         <strong>Objective: </strong>
         To learn and acquire skills in software development through hands-on training, mentorship, and exposure to real-world projects.
        </Typography>
        <Typography variant="body1" gutterBottom>
         <strong>Objective: </strong>
         To learn and acquire skills in software development through hands-on training, mentorship, and exposure to real-world projects.
        </Typography>
        {showMoreTrainee && (<>
            <Typography variant="h4" gutterBottom>
                Core Java
            </Typography>
            <List>
                <ListItem>
                <ListItemText primary="Basic Syntax and Structure: Understanding how to write Java code, including declarations, statements, and control flow structures." />
                </ListItem>
                <ListItem>
                <ListItemText primary="Object-Oriented Programming (OOP): Learning the principles of OOP such as classes, objects, inheritance, polymorphism, and encapsulation." />
                </ListItem>
                <ListItem>
                <ListItemText primary="Data Types and Variables: Understanding different data types (primitive and reference) and variable declaration, initialization, and usage." />
                </ListItem>
                {/* Other list items */}
            </List>

            <Typography variant="h4" gutterBottom>
                Advanced Java
            </Typography>
            <List>
                <ListItem>
                <ListItemText primary="Java Collections Framework: Understanding the different collection interfaces (List, Set, Map) and their implementations, and working with collections efficiently." />
                </ListItem>
                <ListItem>
                <ListItemText primary="Multithreading and Concurrency: Creating and managing multiple threads, synchronizing access to shared resources, and ensuring thread safety." />
                </ListItem>
                <ListItem>
                <ListItemText primary="JDBC and Database Connectivity: Establishing connections to databases, executing SQL queries, handling transactions, and managing database resources." />
                </ListItem>
                {/* Other list items */}
            </List>

            <Typography variant="h4" gutterBottom>
                Struts Framework
            </Typography>
            <List>
                <ListItem>
                <ListItemText primary="MVC Architecture: Understanding the separation of concerns in web applications into Model, View, and Controller components." />
                </ListItem>
                <ListItem>
                <ListItemText primary="Struts Configuration: Configuring actions, results, interceptors, and other components using XML configuration files (struts.xml)." />
                </ListItem>
                <ListItem>
                <ListItemText primary="Tag Libraries: Using Struts tag libraries to generate HTML forms, handle user input, and interact with server-side components." />
                </ListItem>
                
            </List>

        </>)}
        <Button onClick={handleTrainee} variant="text" color="primary">
          {showMoreTrainee ? 'Show Less' : 'Show More'}
        </Button>
      </Paper>

        {/* Cargo Shipping Management System Project */}
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Software Developer, Water Links
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sathish System pvt Ltd., Tirunelveli
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          6 Months
        </Typography>
        <Typography variant="body1" gutterBottom>
          Waterlinks is a comprehensive web application designed to streamline water management processes for municipalities and water utilities.
          Leveraging Spring Framework on the backend and React.js on the frontend, Waterlinks offers a robust and user-friendly platform for managing various aspects of water distribution, consumption, and infrastructure maintenance.
        </Typography>
        {showMore && (
         <Typography variant="body1" gutterBottom>
            <strong>Technologies Used:</strong><br />
            <strong>Backend:</strong> <br />Spring Framework (including Spring Boot, Spring Security, Spring Data), Hibernate ORM (Object-Relational Mapping), RESTful APIs.<br />
            <strong>Frontend:</strong> <br />React.js, Material-UI (for UI components), Axios (for HTTP requests).<br />
            <strong>Database:</strong> <br />MySQL, PostgreSQL (for relational data storage).<br />
            <strong>Deployment:</strong> <br />Docker containers, Visual Studio Code, AWS (Amazon Web Services), or similar cloud platforms.
        </Typography>
        )}
        <Button onClick={handleWaterlinks} variant="text" color="primary">
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      </Paper>


      

      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Software Developer, SUN REXASS
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sathish System pvt Ltd., Tirunelveli
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          12 Months
        </Typography>
        <Typography variant="body1" gutterBottom>
          The Cargo Shipping Management System is a comprehensive web application designed to streamline cargo shipping operations for logistics companies and freight carriers.
        </Typography>
        {showMoreRexess && (<>
        <Typography variant="body1" gutterBottom>
          <strong>Key Features:</strong>
          <ul>
            <li>Management of cargo shipments, including tracking, scheduling, and documentation.</li>
            <li>Integration with shipping carriers and logistics partners for real-time tracking and status updates.</li>
            <li>Inventory management for warehouses and distribution centers.</li>
            <li>Customer portal for booking shipments, accessing shipment history, and generating invoices.</li>
          </ul>
        </Typography>
        
        <Typography variant="body1" gutterBottom>
          <strong>Technologies Used:</strong>
          <ul>
            <li><strong>Backend:</strong> Spring Framework (including Spring Boot, Spring MVC, Spring Data), providing a robust and scalable architecture for handling business logic and data access.</li>
            <li><strong>Frontend:</strong> JSP (JavaServer Pages) for dynamic web page generation, allowing for the presentation of data and user interactions.</li>
            <li><strong>Database:</strong> PostgreSQL, a powerful open-source relational database management system, used for storing and managing cargo shipment data.</li>
            <li><strong>Reporting:</strong> JasperReports, an open-source reporting library, utilized for generating and presenting shipment reports, invoices, and analytics.</li>
          </ul>
        </Typography>
        <Typography variant="body1" gutterBottom>
          The Cargo Shipping Management System provides a seamless and efficient solution for managing the complexities of cargo shipping operations. Leveraging the Spring Framework, JSP, PostgreSQL, and JasperReports, it offers a scalable, customizable, and user-friendly platform for logistics companies to optimize their shipping processes and enhance customer satisfaction.
        </Typography>
        </>)}
         <Button onClick={handleRexess} variant="text" color="primary">
           {showMoreRexess ? 'Show Less' : 'Show More'}
         </Button>
      </Paper>
    </Container>
  );
}

export default Experience;
