import React from 'react';

import './Button.scss';

const Button = ({ type, className, innerText, onClick }) => {
	return (
		<button type={type} className={className} onClick={onClick}>
			<div className='button-background' />
			<div className='button-animated-background' />
			<div className='button-text'>{innerText}</div>
		</button>
	);
};

export default Button;
