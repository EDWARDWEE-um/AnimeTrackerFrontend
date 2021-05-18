import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import Search from './components/Search';
import AnimeList from './components/AnimeList';
import { Route, BrowserRouter , Switch } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import { ProtectedRoute } from "./components/auth/protectedRoute";
import Category from "./components/category/CategoryList"
import CategoryResults from "./components/category/CategoryResults"
import React, { Component } from 'react'

export default class Index extends Component {



  render() {
    return (
      <div>
         <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/app" component={App} />
        <ProtectedRoute exact path="/logout" component={Logout} />
        <ProtectedRoute exact path="/search" component={Search} />
        <ProtectedRoute exact path="/animelist" component={AnimeList} />
        <ProtectedRoute exact path="/category" component={Category} />
        <ProtectedRoute exact path="/categoryresult" component={CategoryResults} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
      </div>
    )
  }
}





ReactDOM.render( <BrowserRouter><Index /></BrowserRouter>, document.getElementById('root'));