import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../context/AppContext';
import MobileSearchForm from '../form/MobileSearchForm';
import TheaterViewButton from '../button/theaterViewButton/TheaterViewButton';
import FullscreenButton from '../button/fullscreenButton/FullscreenButton';
import SearchButton from '../button/searchButton/SearchButton';
import HomeStyledLink from '../styledLink/homeStyledLink/HomeStyledLink';
import './BottomNav.scss';

const BottomNav = ({ isSearchActive, setIsSearchActive }) => {
	const { navState } = useContext(AppContext);
	return (
		<>
			<nav className={`bottomNav ${isSearchActive ? 'bottomNav-active' : ''}`}>
				<div
					className={`bottomNav-tab bottomNav-tab-gradient ${
						navState.isPageShadowOn ? 'bottomNav-tab-theater-mode' : ''
					}`}
				>
					<div className='bottomNav-tab-chevron' />
				</div>
				<HomeStyledLink />
				<SearchButton
					isSearchActive={isSearchActive}
					setIsSearchActive={setIsSearchActive}
				/>
				<TheaterViewButton />
				<FullscreenButton />
				<div
					className={`bottomNav-border ${
						isSearchActive && 'bottomNav-border-fade'
					}`}
				/>
			</nav>
			{isSearchActive && (
				<MobileSearchForm
					isSearchActive={isSearchActive}
					setIsSearchActive={setIsSearchActive}
				/>
			)}
		</>
	);
};

export default BottomNav;
