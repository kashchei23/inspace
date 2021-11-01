import React from 'react';
import { Link } from 'react-router-dom';

import './DesktopMenu.scss';
const DesktopMenu = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0 });
	};

	return (
		<nav className='desktop-menu'>
			<Link to='/' onClick={scrollToTop}>
				HOME
			</Link>
			<Link to='/about' onClick={scrollToTop}>
				ABOUT
			</Link>
			<Link to='/developer' onClick={scrollToTop}>
				DEVELOPER
			</Link>
		</nav>
	);
};

export default DesktopMenu;
