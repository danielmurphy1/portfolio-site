import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
      <Navbar collapseOnSelect expand="lg" className="navigation">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto nav-link">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    );
};

export default Navigation;