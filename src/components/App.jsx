import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';
import DeleteThisComponent from './DeleteThisComponent ';
import DataContextWrapper from './dataContextWrapper/DataContextWrapper';
import Home from './home/Home';
import About from './about/About';
import Footer from './footer/Footer';
import Developer from './developer/Developer';

import '../styles/global.scss';
import './App.scss';

const App = () => {
	const initialQueryState = { fromDate: '', toDate: '' };

	const [isDateEntered, setIsDateEntered] = useState(false);

	const [query, setQuery] = useState(initialQueryState);

	return (
		<div>
			<BrowserRouter>
				<NavBar setQuery={setQuery} setIsDateEntered={setIsDateEntered} />
				<DeleteThisComponent />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/developer'>
						<Developer />
					</Route>
					<Route path='/list'>
						<DataContextWrapper
							query={query}
							isDateEntered={isDateEntered}
							setIsDateEntered={setIsDateEntered}
						/>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
