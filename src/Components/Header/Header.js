import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className="Header">
           <Navbar  expand="lg" className='navbar-dark'>
  <Container >
    <Navbar.Brand href="#home" className="fw-bold"><i className="fas fa-chalkboard-teacher"></i> EDU-POINT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Link to="/home" className='nav-link'>Home</Link>
        <Link to="/services" className='nav-link'>Services</Link>
         <Link to="/about" className='nav-link'>About US</Link>
         <Link to="/contact" className='nav-link'>Contact US</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className="Banner">
     <div className="banner-content">
                    <h1>We are ready to take the challenge</h1>
        <p>A learning community dedicated to building respectful and responsible citizens and empowering all learners.</p>            
     </div>
</div>
        </div>
    );
};

export default Header;