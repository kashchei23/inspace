import React from 'react';

import './Button.scss';

const Button = ({ type, className, innerText, onClick }) => {
	return (
		<button type={type} className={className} onClick={onClick}>
			{innerText}
		</button>
	);
};

export default Button;
