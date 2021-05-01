import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import Search from './components/Search';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';

const routing = (
  <Router>
  <React.StrictMode>
    <Header />
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/search" component={Search} />
        <Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />

			</Switch>
  </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));