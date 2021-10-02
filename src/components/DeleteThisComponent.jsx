import React from 'react';
import { Link } from 'react-router-dom';

import './delete.scss';
const DeleteThisComponent = () => {
	const resetWindow = () => {
		localStorage.clear();
	};

	return (
		<div className='delete'>
			<Link to='/' onClick={resetWindow}>
				Reset Storage
			</Link>
		</div>
	);
};

export default DeleteThisComponent;
