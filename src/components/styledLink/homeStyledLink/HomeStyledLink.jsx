import React from 'react';

import IconLink from '../iconLink/IconLink';
import './HomeStyledLink.scss';

const HomeStyledLink = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<IconLink
			to='/'
			className='link-icon-home'
			label='HOME'
			title='Navigate home'
			onClick={scrollToTop}
		/>
	);
};

export default HomeStyledLink;
