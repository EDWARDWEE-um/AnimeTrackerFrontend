import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Container from './Components/Container'
import Header from './Components/Header'
import Footer from './Components/Footer'

const routing = (
	<Router>
		<React.StrictMode>
			<Header />
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/projects" component={Container} />
			</Switch>
      		<Footer/>
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
