import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ onClick, menuIsOpen }) => {
	const handleMenuClick = () => {
		onClick();
	};

	return (
		<>
			<div className={`mobile-menu ${menuIsOpen && 'show'}`}>
				<div className='mobile-menu-links'>
					<Link to='/' onClick={handleMenuClick}>
						Today's Picture
					</Link>
					<Link to='/about' onClick={handleMenuClick}>
						About
					</Link>
					<Link to='/developer' onClick={handleMenuClick}>
						Developer
					</Link>
					<a href='#contact' onClick={handleMenuClick}>
						Contact
					</a>
				</div>
				<div className='nav-border' />
			</div>
		</>
	);
};

export default MobileMenu;
