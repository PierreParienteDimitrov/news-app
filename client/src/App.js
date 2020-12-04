import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Profile from './Pages/Profile';

function App() {
	return (
		<Router>
			<div className='App'>
				<Route exact path='/' component={Home} />
				<Route path='/profile' component={Profile} />
			</div>
		</Router>
	);
}

export default App;
