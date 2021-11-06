import React from 'react';

const IconButton = ({ type, label, className, onClick, disabled }) => {
	return (
		<button
			type={type}
			className={className}
			onClick={onClick}
			disabled={disabled}
		>
			<div className='icon-text'>{label}</div>
		</button>
	);
};

export default IconButton;
