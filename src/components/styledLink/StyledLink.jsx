import React from 'react';

import './StyledLink.scss';

const StyledLink = ({ href, className, innerText, onClick }) => {
	return (
		<a
			href={href}
			className={className}
			onClick={onClick}
			target='_blank'
			rel='noreferrer'
		>
			<div className='styled-link-background' />
			<div className='styled-link-animated-background' />
			<div className='styled-link-text'>{innerText}</div>
		</a>
	);
};

export default StyledLink;
