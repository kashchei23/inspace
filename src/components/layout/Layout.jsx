import React, { useContext, useState, useEffect } from 'react';

import './Layout.scss';
import '../../styles/_utilities.scss';
import TopNav from '../navigation/TopNav';
import BottomNav from '../navigation/BottomNav';
import Footer from '../footer/Footer';
import Splash from '../../pages/splash/Splash';

const Layout = ({ children }) => {
	//! navstate use context from here
	//! state changes should happen on mount/unmount
	// mobile menu
	// search form
	// mobile navlink
	// About

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchActive, setIsSearchActive] = useState(false);

	const [splashPlayed, setSplashPlayed] = useState(
		sessionStorage.getItem('splashPlayed')
	);
	const [isSplashAnimationEnded, setIsSplashAnimationEnded] = useState(false);

	const closeSearchAndMenu = () => {
		setIsSearchActive(false);
		setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleOnEnded = () => {
		sessionStorage.setItem('splashPlayed', 'true');
		setIsSplashAnimationEnded(true);
	};

	useEffect(() => {
		if (isSplashAnimationEnded) {
			setSplashPlayed(sessionStorage.getItem('splashPlayed'));
			sessionStorage.setItem('splashPlayed', 'true');
		}
	}, [isSplashAnimationEnded, splashPlayed]);

	return (
		<>
			{!splashPlayed ? (
				<Splash
					handleOnEnded={handleOnEnded}
					isSplashAnimationEnded={isSplashAnimationEnded}
				/>
			) : (
				<>
					<TopNav
						isMenuOpen={isMenuOpen}
						setIsMenuOpen={setIsMenuOpen}
						setIsSearchActive={setIsSearchActive}
					/>
					<div className='main-wrapper'>
						<main className='main-container'>
							<div
								className={`page-shadow ${
									(isMenuOpen || isSearchActive) && 'page-shadow-show'
								}`}
								onClick={closeSearchAndMenu}
							/>
							{children}
						</main>
						<Footer />
					</div>
					<BottomNav
						isSearchActive={isSearchActive}
						setIsSearchActive={setIsSearchActive}
					/>
				</>
			)}
		</>
	);
};
export default Layout;
