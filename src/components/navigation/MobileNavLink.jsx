import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const MobileNavLink = ({ to, text }) => {
	const { navState } = useContext(AppContext);

	const toggleMenu = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Link to={to} onClick={toggleMenu} data-testid='link'>
			{text}
		</Link>
	);
};

export default MobileNavLink;
