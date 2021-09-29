import React from 'react';
import { Link } from 'react-router-dom';

const DesktopMenu = () => {
	return (
		<div className='desktop-menu'>
			<div className='desktop-menu-links'>
				<Link to='/'>Home</Link>
				<a href='/#features'>Features</a>
				<Link to='/signup' className='styled-link' id='styled-link-desktop'>
					SIGN UP
				</Link>
			</div>
			<div className='nav-border' />
		</div>
	);
};

export default DesktopMenu;
