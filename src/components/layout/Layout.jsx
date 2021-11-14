import React, { useState } from 'react';

import './Layout.scss';
import TopNav from '../navigation/TopNav';
import BottomNav from '../navigation/BottomNav';
import Footer from '../footer/Footer';
import Splash from '../splash/Splash';

const Layout = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSearchActive, setIsSearchActive] = useState(false);

	const [splashPlayed, setSplashPlayed] = useState(
		sessionStorage.getItem('splashPlayed')
	);

	const closeSearchAndMenu = () => {
		setIsSearchActive(false);
		setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			{!splashPlayed ? (
				<Splash setSplashPlayed={setSplashPlayed} />
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
