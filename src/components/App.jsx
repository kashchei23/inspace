import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';
import Delete from './Delete';
import DataContextWrapper from './dataContextWrapper/DataContextWrapper';

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
				<Delete />
				<Switch>
					<Route exact path='/'>
						<h3>Home</h3>
					</Route>
					<Route path='/list'>
						<DataContextWrapper
							query={query}
							isDateEntered={isDateEntered}
							setIsDateEntered={setIsDateEntered}
						/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
