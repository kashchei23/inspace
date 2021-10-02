import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NasaDataContext } from '../../context/NasaContext';

export const MobileNavLink = ({ to, text, onClick }) => {
	const { navState } = useContext(NasaDataContext);

	const toggleMenu = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	return (
		<Link to={to} onClick={toggleMenu}>
			{text}
		</Link>
	);
};
