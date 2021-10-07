import React, { useContext } from 'react';
import MobileNavLink from './MobileNavLink';
import { NasaDataContext } from '../../context/NasaContext';

const MobileMenu = () => {
	const { navState } = useContext(NasaDataContext);
	return (
		<>
			<div className={`mobile-menu ${navState.isMenuOpen && 'show'}`}>
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
