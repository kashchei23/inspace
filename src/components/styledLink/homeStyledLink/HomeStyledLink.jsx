import React, { useContext } from 'react';

import { AppContext } from '../../../context/AppContext';
import IconLink from '../../styledLink/iconLink/IconLink';
import './HomeStyledLink.scss';

const HomeStyledLink = () => {
	const { navState } = useContext(AppContext);

	const closeSearchAndMenu = () => {
		navState.setIsSearchActive(false);
		navState.setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<IconLink
			to='/'
			onClick={closeSearchAndMenu}
			className='link-icon-home'
			label='HOME'
		/>
	);
};

export default HomeStyledLink;
