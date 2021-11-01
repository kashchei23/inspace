import React from 'react';

import './IconButton.scss';

const IconButton = ({ type, className, onClick }) => {
	return <button type={type} className={className} onClick={onClick}></button>;
};

export default IconButton;
