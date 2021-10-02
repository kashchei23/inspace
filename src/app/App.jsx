import React, { useState, useEffect } from 'react'; //  { useState }
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../styles/global.scss';
import './App.scss';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Developer from '../pages/developer/Developer';
import Layout from '../layout/Layout';
import List from '../pages/list/List';
import PictureOfTheDay from '../pages/pictureOfTheDay/PictureOfTheDay';

import { NasaDataProvider } from '../context/NasaContext';
import { useFetch } from '../controller/useFetch';

const App = () => {
	const initialQueryState = { fromDate: '', toDate: '' };
	const [query, setQuery] = useState(initialQueryState);

	const [isDateEntered, setIsDateEntered] = useState(false);
	const [endpoint, setEndpoint] = useState('');

	const fetchProps = { query, isDateEntered, setIsDateEntered };

	const getEndpoint = (e) => {
		setEndpoint(e.target.name);
	};

	const paths = {
		home: '/',
		about: '/about',
		developer: '/developer',
		list: '/picture-list',
		potd: `/picture-of-the-day/${endpoint}`,
	};

	//* Nav methods and state
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchIsActive, setSearchIsActive] = useState(false);

	const toggleSearchForm = () => {
		setSearchIsActive((prevSearchIsActive) => !prevSearchIsActive);
		setIsMenuOpen(false);
	};

	// //* Fetch API data in custom hook
	const fetchedData = useFetch(fetchProps);

	const navState = {
		isMenuOpen,
		setIsMenuOpen,
		searchIsActive,
		setSearchIsActive,
	};

	const queryState = {
		query,
		setQuery,
		isDateEntered,
		setIsDateEntered,
	};

	const state = {
		queryState,
		navState,
		fetchedData,
	};

	useEffect(() => {
		console.log('app open?', isMenuOpen);
	}, [isMenuOpen]);

	return (
		<NasaDataProvider value={state}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path={paths.home}>
							<Home />
						</Route>
						<Route path={paths.about}>
							<About />
						</Route>
						<Route path={paths.developer}>
							<Developer />
						</Route>
						<Route path={paths.list}>
							<List getEndpoint={getEndpoint} />
						</Route>
						<Route path={paths.potd}>
							<PictureOfTheDay endpoint={endpoint} />
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		</NasaDataProvider>
	);
};

export default App;
