import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import Search from './components/Search';
import { Route, BrowserRouter , Switch } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import React, { Fragment , useState, useEffect } from 'react'
import { ProtectedRoute } from "./components/auth/protectedRoute";



export default function Index() {
 
  
  console.log(window.location.pathname)

  return (
    <div>
       <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/app" component={App} />
        <ProtectedRoute exact path="/logout" component={Logout} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  )
}



ReactDOM.render( <BrowserRouter><Index /></BrowserRouter>, document.getElementById('root'));