import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Fragment } from 'react';
import Menu from './components/Layout/Navbar';
import { Landing } from './components/Layout/Landing';
import Register from './components/Auth/Register';
import Login from "./components/Auth/Login"
import Alert from './components/Layout/Alert'
import 'bootstrap/dist/css/bootstrap.min.css';
import {loadUser} from './action/auth'
import setAuthToken from './helper/setAuthToken'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/Routing/PrivateRoute'
//Redux
import {Provider} from 'react-redux'
import store from './store'


if(localStorage.token){
  setAuthToken(localStorage.token)
}


const  App = () => {
  useEffect(() =>{
    store.dispatch(loadUser())
  },[])
  return (
<Provider store={store}>
  <Router>
    <Fragment>
    <Menu/>
    <Route  path="/" exact component ={Landing} />
    <section className="container">
      <Alert/>
        <Switch>
        <Route path="/Register" exact component = {Register}/>
        <Route path="/Login" exact component = {Login}/>
        <PrivateRoute path="/dashboard" exact component = {Dashboard}/>
        </Switch>


    </section>
    </Fragment>
    </Router>
    </Provider>

)}

export default App;
