import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { AppContext } from '../../context/AppContext';

const NavBar = () => {
	const { navState, queryState } = useContext(AppContext);

	const menuBars = ['bar1', 'bar2', 'bar3', 'bar4'];

	const handleMenuClick = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	const closeSearchAndMenu = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const hideBackButtonAndNavigateBack = () => {
		navState.setIsPictureMounted(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<nav className='navBar'>
				<Link
					to={`/gallery/start_date=${queryState.fromDate}&end_date=${queryState.toDate}`}
					onClick={hideBackButtonAndNavigateBack}
					className={` navBar-back-icon ${
						navState.isPictureMounted && 'slide-animation'
					}`}
				>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1633031774/icons/chevron-off-white_f9t997.png'
						alt='navigate back chevron'
					/>
				</Link>
				<Link to='/' onClick={closeSearchAndMenu}>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1632785985/inspace/inspace-gradient-white_jzyn7s.png'
						alt='buzztraq logo'
						className='navBar-logo'
					/>
				</Link>
				<DesktopMenu />
				<button
					className={`menu-button ${navState.isMenuOpen && 'menu-button-open'}`}
					onClick={handleMenuClick}
				>
					{menuBars.map((bar) => {
						return (
							<div
								key={bar}
								className={`menu-button-bars ${
									navState.isMenuOpen && 'open-menu'
								}`}
							/>
						);
					})}
				</button>
				<div
					className={`nav-border ${
						(navState.isMenuOpen || navState.searchIsActive) &&
						'nav-border-fade'
					}`}
				/>
			</nav>
			<nav className='mobileNav' aria-label='Mobile navigation'>
				{!navState.searchIsActive && <MobileMenu />}
			</nav>
		</>
	);
};

export default NavBar;
