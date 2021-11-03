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
	const [splashPlayed, setSplashPlayed] = useState(
		sessionStorage.getItem('splashPlayed')
	);
	const [isSplashAnimationEnded, setIsSplashAnimationEnded] = useState(false);

	const closeSearchAndMenu = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen(false);
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
					<TopNav />
					<div className='main-wrapper'>
						<main className='main-container'>
							<div
								className={`page-shadow ${
									(navState.isMenuOpen || navState.searchIsActive) &&
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
