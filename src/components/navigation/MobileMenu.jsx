import React, { useEffect } from 'react';
import MobileNavLink from './MobileNavLink';

import './MobileMenu.scss';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, setIsSearchActive }) => {
	const handleSearchClick = () => {
		setIsSearchActive(true);
	};
	const closeMenu = (e) => {
		if (e.target.dataset.name !== 'mobile-menu') setIsMenuOpen(false);
	};
	useEffect(() => {
		window.addEventListener('click', closeMenu);
		return () => {
			window.removeEventListener('click', closeMenu);
		};
	});

	return (
		<nav
			data-name='mobile-menu'
			className={`mobile-menu ${isMenuOpen && 'mobile-menu-open'}`}
		>
			<nav className='mobile-menu-links' data-name='mobile-menu'>
				<MobileNavLink to='/' text='HOME' />
				<MobileNavLink to='/about' text='ABOUT' />
				<MobileNavLink to='/developer' text='DEVELOPER' />
				<button
					onClick={handleSearchClick}
					className='mobile-menu-search-button'
				>
					SEARCH
				</button>
			</nav>
			<div className='mobile-menu-border' />
		</nav>
	);
};

export default MobileMenu;
