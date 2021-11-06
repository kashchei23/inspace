import React, { useContext } from 'react';

import { AppContext } from '../../../context/AppContext';
import IconButton from '../iconButton/IconButton';
import './SearchButton.scss';

const SearchButton = () => {
	const { navState } = useContext(AppContext);

	const handleSearchClick = () => {
		navState.setIsSearchActive((previsSearchActive) => !previsSearchActive);
		navState.setIsMenuOpen(false);
	};

	return (
		<IconButton
			type='button'
			className={`button-icon-search ${
				navState.isSearchActive ? 'button-icon-search-active' : ''
			}`}
			onClick={handleSearchClick}
			label='SEARCH'
		/>
	);
};

export default SearchButton;
