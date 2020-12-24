import React from "react";
import { Link } from "react-router-dom";
export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">STUDENTS AND COMPANY CONNECTOR</h1>
          <p className="lead">START YOUR PROFESSIONAL TRAINNING HERE</p>
          <div className="buttons">
            <Link to="/Register" className="btn btn-cool-blues">
              Sign Up
            </Link>
            <Link to="/Login" className="btn btn-dark-blue">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
