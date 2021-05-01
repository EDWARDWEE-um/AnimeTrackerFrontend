import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
  <Router>
  <React.StrictMode>
    <Header />
			<Switch>
				<Route exact path="/" component={App} />
			</Switch>
  </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));