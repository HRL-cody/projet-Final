import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { Fragment } from 'react';
import Menu from './components/Layout/Navbar';
import { Landing } from './components/Layout/Landing';
import Register from './components/Auth/Register';
import Login from "./components/Auth/Login"

import 'bootstrap/dist/css/bootstrap.min.css';

//Redux
import {Provider} from 'react-redux'
import store from './store'
const  App = () => 
<Provider store={store}>
  <Router>
    <Fragment>
    <Menu/>
    <Route  path="/" exact component ={Landing} />
    <section className="container">
        <Switch>
        <Route path="/Register" exact component = {Register}/>
        <Route path="/Login" exact component = {Login}/>
        </Switch>


    </section>
    </Fragment>
    </Router>
    </Provider>

export default App;
