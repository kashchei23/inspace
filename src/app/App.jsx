import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../styles/global.scss';
import Layout from '../components/layout/Layout';
import Home from '../pages/home/Home';
import { AppContextProvider } from '../context/AppContext';
import { useFetch } from '../api/useFetch';
import TheaterViewProvider from '../context/TheaterViewProvider';

const About = lazy(() => import('../pages/about/About'));
const Developer = lazy(() => import('../pages/developer/Developer'));
const Gallery = lazy(() => import('../pages/gallery/Gallery'));
const PictureOfTheDay = lazy(() =>
	import('../pages/pictureOfTheDay/PictureOfTheDay')
);

const App = () => {
	const [isPageShadowOn, setIsPageShadowOn] = useState(false);
	const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);

	const navState = {
		isPageShadowOn,
		setIsPageShadowOn,
		isBackButtonVisible,
		setIsBackButtonVisible,
	};

	const initialQueryState = { fromDate: '', toDate: '' };
	const [galleryQuery, setGalleryQuery] = useState(initialQueryState);
	const [isDateEntered, setIsDateEntered] = useState(false);
	const queryState = {
		galleryQuery,
		setGalleryQuery,
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

	useEffect(() => {
		return () => {
			localStorage.clear();
		};
	}, []);

	return (
		<AppContextProvider value={state}>
			<TheaterViewProvider>
				<BrowserRouter>
					<Layout>
						<Suspense fallback={<></>}>
							<Switch>
								<Route exact component={Home} path='/' />
								<Route component={About} path='/about' />
								<Route component={Developer} path='/developer' />
								<Route component={Gallery} path='/gallery/:query' />
								<Route
									component={PictureOfTheDay}
									path={`/picture-of-the-day/:date`}
								/>
							</Switch>
						</Suspense>
					</Layout>
				</BrowserRouter>
			</TheaterViewProvider>
		</AppContextProvider>
	);
};

export default App;
