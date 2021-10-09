import React from 'react';

import './Button.scss';

const Button = ({ type, className, innerText, onClick }) => {
	return (
		<button
			type={type}
			className={className}
			onClick={onClick}
			// data-clicked={clicked}
		>
			{innerText}
		</button>
	);
};

export default Button;
