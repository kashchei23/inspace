import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './TopNav.scss';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { AppContext } from '../../context/AppContext';

const TopNav = () => {
	const { navState, queryState } = useContext(AppContext);

	const menuBars = ['bar1', 'bar2', 'bar3', 'bar4'];

	const handleMenuClick = () => {
		navState.setIsSearchActive(false);
		navState.setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	const closeSearchAndMenu = () => {
		navState.setIsSearchActive(false);
		navState.setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const hideBackButtonAndNavigateBack = () => {
		navState.setIsBackButtonVisible(false);
		window.scrollTo({ top: 0 });
	};

	return (
		<>
			<nav className='topNav'>
				<Link
					to={`/gallery/start_date=${queryState.fromDate}&end_date=${queryState.toDate}`}
					onClick={hideBackButtonAndNavigateBack}
					className={` topNav-back-icon ${
						navState.isBackButtonVisible && 'topNav-back-icon-show'
					}`}
				>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1633031774/icons/chevron-off-white_f9t997.png'
						alt='navigate back chevron'
					/>
				</Link>
				<Link to='/' onClick={closeSearchAndMenu}>
					<div className='topNav-logo'>
						<div className='topNav-logo-mark'>In</div>
						<div className='topNav-logo-text'>Space</div>
					</div>
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
					className={`topNav-border ${
						navState.isMenuOpen && 'topNav-border-fade'
					}`}
				/>
			</nav>
			{!navState.isSearchActive && <MobileMenu />}
		</>
	);
};

export default TopNav;
