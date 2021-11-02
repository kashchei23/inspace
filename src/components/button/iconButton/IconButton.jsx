import React from 'react';

const IconButton = ({ type, label, className, onClick }) => {
	return (
		<button type={type} className={className} onClick={onClick}>
			<div className='icon-text'>{label}</div>
		</button>
	);
};

export default IconButton;
