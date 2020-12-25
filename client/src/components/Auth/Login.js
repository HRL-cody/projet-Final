import React, { useState, Fragment } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../../action/auth'
import {Redirect} from 'react-router-dom'







const Login = ({login , isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

   login(email, password)
  };
      //redirect if Auth
      if(isAuthenticated){
        return <Redirect to='/dashboard' />
      }
  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </Fragment>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
 isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {login}) (Login);
