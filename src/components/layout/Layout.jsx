import React, { useContext } from 'react';

import NavBar from '../navigation/NavBar';
import BottomNav from '../navigation/BottomNav';
import './Layout.scss';
import Footer from '../footer/Footer';
import { AppContext } from '../../context/AppContext';

const Layout = ({ children }) => {
	const { navState } = useContext(AppContext);

	const closeSearchAndMenu = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div>
			<NavBar />
			<div className='main-container'>
				<div
					className={`menu-search-shadow ${
						(navState.isMenuOpen || navState.searchIsActive) && 'fade-in'
					}`}
					onClick={closeSearchAndMenu}
				/>
				{children}
			</div>
			<Footer />
			<BottomNav />
		</div>
	);
};
export default Layout;
