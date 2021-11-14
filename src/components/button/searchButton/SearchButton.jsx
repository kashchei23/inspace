import React from 'react';

import IconButton from '../iconButton/IconButton';
import './SearchButton.scss';

const SearchButton = ({ isSearchActive, setIsSearchActive }) => {
	const handleSearchClick = () => {
		setIsSearchActive((previsSearchActive) => !previsSearchActive);
	};

	return (
		<IconButton
			type='button'
			className={`button-icon-search ${
				isSearchActive ? 'button-icon-search-active' : ''
			}`}
			onClick={handleSearchClick}
			label='SEARCH'
			data-name='search-form'
			title='Search button'
		/>
	);
};

export default SearchButton;
