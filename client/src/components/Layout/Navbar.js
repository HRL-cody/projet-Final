import React from 'react';
import {Link} from "react-router-dom"
import {Navbar , Nav} from "react-bootstrap"
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../action/auth'
import { Fragment } from 'react';
const Menu = ({auth: {isAuthenticated, loading} , logout}) => {
  const authLinks = (
    <Nav className="mr-auto">
    <Link onClick={logout} to="/"> <i className="fas fa-sign-out-alt"></i>{' '}
      <span className="hide-sm">Logout</span> 
    </Link>
  </Nav>
  )

  const guestLinks = (
   <Navbar>
     <Nav className="mr-auto">
    <Link to="/">Home</Link>
  </Nav>
  <Nav>
  <Link className="LOG" to="/Register">Sign Up</Link>
    <Link to="/Login">Login</Link>
    </Nav>
   </Navbar>
  )
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">STAGI TN</Navbar.Brand>
        {! loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>) }
      </Navbar>
    
    )
}

Menu.propTypes ={
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToprops = state => ({
  auth: state.auth
})

export default connect(mapStateToprops, {logout})(Menu)

