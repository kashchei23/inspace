import React, { useContext } from 'react';
import MobileNavLink from './MobileNavLink';
import { AppContext } from '../../context/AppContext';

const MobileMenu = () => {
	const { navState } = useContext(AppContext);
	return (
		<>
			<div className={`mobile-menu ${navState.isMenuOpen && 'show-nav-item'}`}>
				<div className='mobile-menu-links'>
					<MobileNavLink to='/' text='Home' />
					<MobileNavLink to='/about' text='About' />
					<MobileNavLink to='/developer' text='Developer' />
					<MobileNavLink to='/contact' text='Contact' />
				</div>
				<div className='nav-border' />
			</div>
		</>
	);
};

export default MobileMenu;
