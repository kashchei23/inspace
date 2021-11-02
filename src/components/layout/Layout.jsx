import React, { useContext, useState, useEffect } from 'react';

import './Layout.scss';
import '../../styles/_utilities.scss';
import TopNav from '../navigation/TopNav';
import BottomNav from '../navigation/BottomNav';
import Footer from '../footer/Footer';
import Splash from '../../pages/splash/Splash';

import { AppContext } from '../../context/AppContext';

const Layout = ({ children }) => {
	const { navState } = useContext(AppContext);
	const [isSplashPlaying, setIsSplashPlaying] = useState(true);
	const [splashClass, setSplashClass] = useState('');

	const closeSearchAndMenu = () => {
		navState.setIsSearchActive(false);
		navState.setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		setIsSplashPlaying(true);
		setTimeout(() => {
			setIsSplashPlaying(false);
		}, 3000);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setSplashClass('splash-fade');
		}, 2800);
	}, []);

	return (
		<>
			{isSplashPlaying ? (
				<Splash splashClass={splashClass} />
			) : (
				<>
					<TopNav />
					<div className='main-wrapper'>
						<main className='main-container'>
							<div
								className={`page-shadow ${
									(navState.isMenuOpen || navState.isSearchActive) &&
									'page-shadow-show'
								}`}
								onClick={closeSearchAndMenu}
							/>
							{children}
						</main>
						<Footer />
					</div>
					<BottomNav />
				</>
			)}
		</>
	);
};
export default Layout;
