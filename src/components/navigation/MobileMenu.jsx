import React, { useContext } from 'react';
import MobileNavLink from './MobileNavLink';
import { AppContext } from '../../context/AppContext';

import './MobileMenu.scss';

const MobileMenu = () => {
	const { navState } = useContext(AppContext);
	return (
		<>
			<nav
				className={`mobile-menu ${navState.isMenuOpen && 'mobile-menu-open'}`}
			>
				<nav className='mobile-menu-links'>
					<MobileNavLink to='/' text='HOME' />
					<MobileNavLink to='/about' text='ABOUT' />
					<MobileNavLink to='/developer' text='DEVELOPER' />
				</nav>
				<div className='mobile-menu-border' />
			</nav>
		</>
	);
};

export default MobileMenu;
