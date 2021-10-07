import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../styles/global.scss';
import './App.scss';

import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact.jsx';
import Developer from '../pages/developer/Developer';
import PictureList from '../pages/pictureList/PictureList';
import PictureOfTheDay from '../pages/pictureOfTheDay/PictureOfTheDay';
import { NasaDataProvider } from '../context/NasaContext';
import { useFetch } from '../api/useFetch';

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchIsActive, setSearchIsActive] = useState(false);
	const navState = {
		isMenuOpen,
		setIsMenuOpen,
		searchIsActive,
		setSearchIsActive,
	};

	//* Query state
	const initialQueryState = { fromDate: '', toDate: '' };
	const [query, setQuery] = useState(initialQueryState);
	const [isDateEntered, setIsDateEntered] = useState(false);
	const queryState = {
		query,
		setQuery,
		isDateEntered,
		setIsDateEntered,
	};

	// //* Fetch API data in custom hook
	const fetchProps = { query, isDateEntered, setIsDateEntered };
	const fetchedData = useFetch(fetchProps);

	const [endpoint, setEndpoint] = useState('');
	const endpointState = { endpoint, setEndpoint };

	const state = {
		queryState,
		navState,
		fetchedData,
		endpointState,
	};

	return (
		<NasaDataProvider value={state}>
			<BrowserRouter>
				<Layout>
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
						<Route path='/picture-list'>
							<PictureList />
						</Route>
						<Route path={`/picture-of-the-day/${endpoint}`}>
							<PictureOfTheDay endpoint={endpoint} />
						</Route>
						<Route path='/contact'>
							<Contact />
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		</NasaDataProvider>
	);
};

export default App;
