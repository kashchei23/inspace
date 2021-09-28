import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';
import Form from './form/Form';
import Delete from './Delete';
import './App.scss';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route exact path='/'>
						<Delete />
					</Route>
					<Route path='/apod'>
						<Form />
						<Delete />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
