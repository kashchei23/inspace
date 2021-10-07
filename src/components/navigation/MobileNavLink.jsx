import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NasaDataContext } from '../../context/NasaContext';

const MobileNavLink = ({ to, text }) => {
	const { navState } = useContext(NasaDataContext);

	const toggleMenu = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	return (
		<Link to={to} onClick={toggleMenu} data-testid='link'>
			{text}
		</Link>
	);
};

export default MobileNavLink;
