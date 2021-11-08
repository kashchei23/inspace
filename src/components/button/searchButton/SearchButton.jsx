import React, { useContext } from 'react';

import { AppContext } from '../../../context/AppContext';
import IconButton from '../iconButton/IconButton';
import './SearchButton.scss';

const SearchButton = ({ isSearchActive, setIsSearchActive }) => {
	const { navState } = useContext(AppContext);

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
		/>
	);
};

export default SearchButton;
