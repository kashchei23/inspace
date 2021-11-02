import React from 'react';
import { Link } from 'react-router-dom';

const IconLink = ({ to, label, className, onClick }) => {
	return (
		<Link to={to} className={className} onClick={onClick}>
			<div></div>
			<div className='icon-text'>{label}</div>
		</Link>
	);
};

export default IconLink;
