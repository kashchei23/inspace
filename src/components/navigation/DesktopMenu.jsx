import React from 'react';
import { Link } from 'react-router-dom';

import './DesktopMenu.scss';
const DesktopMenu = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0 });
	};

	return (
		<div className='desktop-menu'>
			<Link to='/' onClick={scrollToTop}>
				Home
			</Link>
			<Link to='/about' onClick={scrollToTop}>
				About
			</Link>
			<Link to='/developer' onClick={scrollToTop}>
				Developer
			</Link>
			<Link to='/contact' onClick={scrollToTop}>
				Contact
			</Link>
		</div>
	);
};

export default DesktopMenu;
