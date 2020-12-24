import React from 'react';
import {Link} from "react-router-dom"
import {Navbar , Nav} from "react-bootstrap"

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">STAGI TN</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
        </Nav>
        <Link className="LOG" to="/Register">Sign Up</Link>
          <Link to="/Login">Login</Link>
      </Navbar>
    
    )
}

export default Menu

