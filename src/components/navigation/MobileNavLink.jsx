import React from 'react';
import { Link } from 'react-router-dom';

const MobileNavLink = ({ to, text }) => {
	const toggleMenu = () => {
		window.scrollTo({ top: 0 });
	};

	return (
		<Link to={to} onClick={toggleMenu} data-testid='link'>
			{text}
		</Link>
	);
};

export default MobileNavLink;
