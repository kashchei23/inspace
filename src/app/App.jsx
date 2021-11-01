import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../styles/global.scss';

import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Developer from '../pages/developer/Developer';
import Gallery from '../pages/gallery/Gallery';
import PictureOfTheDay from '../pages/pictureOfTheDay/PictureOfTheDay';
import { AppContextProvider } from '../context/AppContext';
import { useFetch } from '../api/useFetch';

const App = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [searchIsActive, setSearchIsActive] = useState(false);
	const [isShadowOn, setIsShadowOn] = useState(false);
	const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);

	const navState = {
		isMenuOpen,
		setIsMenuOpen,
		searchIsActive,
		setSearchIsActive,
		isShadowOn,
		setIsShadowOn,
		isBackButtonVisible,
		setIsBackButtonVisible,
	};

	//* Query state
	const initialQueryState = { fromDate: '', toDate: '' };
	const [galleryQuery, setQuery] = useState(initialQueryState);
	const [isDateEntered, setIsDateEntered] = useState(false);
	const queryState = {
		galleryQuery,
		setQuery,
		isDateEntered,
		setIsDateEntered,
	};

	const { nasaData, isLoading, error } = useFetch(
		galleryQuery,
		isDateEntered,
		setIsDateEntered
	);

	const state = {
		queryState,
		navState,
		nasaData,
		isLoading,
		error,
	};

	return (
		<AppContextProvider value={state}>
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
						<Route path='/gallery/:query'>
							<Gallery />
						</Route>
						<Route path={`/picture-of-the-day/:date`}>
							<PictureOfTheDay />
						</Route>
					</Switch>
				</Layout>
			</BrowserRouter>
		</AppContextProvider>
	);
};

export default App;
