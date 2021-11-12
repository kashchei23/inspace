import React from 'react';

import './Button.scss';

const Button = ({ type, className, innerText, onClick, dataName }) => {
	return (
		<button
			type={type}
			className={className}
			onClick={onClick}
			data-name={dataName}
		>
			<div className='button-background' />
			<div className='button-animated-background' />
			<div className='button-text'>{innerText}</div>
		</button>
	);
};

export default Button;
