import React, { useState } from 'react';
import Form from '../form/Form';

const MobileSearchForm = ({ searchIsActive }) => {
	return (
		<>
			<div className={`search-menu ${searchIsActive && 'show'}`}>
				<Form />
				<div className='nav-border' />
			</div>
		</>
	);
};

export default MobileSearchForm;
