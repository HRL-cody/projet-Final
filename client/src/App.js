import React, { Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom' 
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import Alert from "./components/layout/Alert"
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import ProfileForm from './components/profile-forms/ProfileForm'
import EditProfile from './components/profile-forms/EditProfile'
import './App.css';
//Redux
import {Provider} from 'react-redux'
import store from "./store"

if(localStorage.token){
  setAuthToken(localStorage.token)
}
const App = () => { 
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return(
  <Provider store={store} >
  <Router>
    <Fragment >
    <Navbar/>
    <Route exact path="/" component={Landing} />
    <section className='container'>
      <Alert/>
      <Switch>
        <Route  path="/register" exact component={Register}/>
        <Route  path="/login" exact component={Login}/>
        <PrivateRoute  path="/Dashboard" exact component={Dashboard}/>
        <PrivateRoute  path="/create-profile" exact component={ProfileForm}/>
        <PrivateRoute  path="/edit-profile" exact component={EditProfile}/>

      </Switch>
    </section>
    </Fragment>
    </Router>
    </Provider>
)};
export default App;
