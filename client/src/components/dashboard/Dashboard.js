/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../action/profile";
import Loader from "../Layout/Loader";

import { Fragment } from "react";
//Try to capitalize 'app' like
const Dashboard = ({
  getCurrentProfile,
  auth:{user},
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading && profile === null ? (<Loader />) : (<Fragment><h1 className="large text-primary"></h1><p className="lead">{" "}<i className="fas fa-user">Welcome {user && user.name}</i>{" "}</p>
  {profile !== null ? (<Fragment>has</Fragment>) : (<Fragment> <p>You hav no profile, please add some info</p>
  <Link to='/creat-profile' className='btn btn-primary my-1'>Creat Profile</Link>
   </Fragment>)}
  </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
