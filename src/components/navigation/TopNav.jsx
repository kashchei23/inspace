import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './TopNav.scss';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { AppContext } from '../../context/AppContext';

const TopNav = ({ isMenuOpen, setIsMenuOpen, setIsSearchActive }) => {
	const { navState, queryState } = useContext(AppContext);

	const menuBars = ['bar1', 'bar2', 'bar3', 'bar4'];

	const handleMenuClick = () => {
		setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	const closeSearch = () => {
		setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const hideBackButtonAndNavigateBack = () => {
		navState.setIsBackButtonVisible(false);
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
				<Link to='/' onClick={closeSearch}>
					<div className='topNav-logo'>
						<div className='topNav-logo-mark'>In</div>
						<div className='topNav-logo-text'>Space</div>
					</div>
				</Link>
				<DesktopMenu setIsSearchActive={setIsSearchActive} />
				<button
					className={`menu-button ${isMenuOpen && 'menu-button-open'}`}
					onClick={handleMenuClick}
					data-name='mobile-menu'
				>
					{menuBars.map((bar) => {
						return (
							<div
								key={bar}
								className={`menu-button-bars ${isMenuOpen && 'open-menu'}`}
							/>
						);
					})}
				</button>
				<div
					className={`topNav-border ${isMenuOpen && 'topNav-border-fade'}`}
				/>
			</nav>
			{isMenuOpen && (
				<MobileMenu
					isMenuOpen={isMenuOpen}
					setIsMenuOpen={setIsMenuOpen}
					setIsSearchActive={setIsSearchActive}
				/>
			)}
		</>
	);
};

export default TopNav;
