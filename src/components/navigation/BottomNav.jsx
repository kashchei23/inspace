import React, { useContext, useEffect } from 'react';

import MobileSearchForm from '../form/MobileSearchForm';
import './BottomNav.scss';

import { AppContext } from '../../context/AppContext';
import TheaterViewButton from '../button/theaterViewButton/TheaterViewButton';
import FullscreenButton from '../button/fullscreenButton/FullscreenButton';
import SearchButton from '../button/searchButton/SearchButton';
import HomeStyledLink from '../styledLink/homeStyledLink/HomeStyledLink';

const BottomNav = () => {
	const { navState } = useContext(AppContext);

	const bottomNavClass = `bottomNav ${
		navState.isSearchActive ? 'bottomNav-active' : ''
	}`;

	const bottomNavTabClass = `bottomNav-tab bottomNav-tab-gradient ${
		navState.isPageShadowOn ? 'bottomNav-tab-theater-mode' : ''
	}`;

	useEffect(() => {
		console.log(navState.isSearchActive);
	}, [navState]);

	const toggleBottomNav = () => {};
	return (
		<>
			<nav className={bottomNavClass}>
				<button className={bottomNavTabClass} onClick={toggleBottomNav}>
					<div className='bottomNav-tab-chevron'></div>
				</button>
				<HomeStyledLink />
				<SearchButton />
				<TheaterViewButton />
				<FullscreenButton />
				<div
					className={`bottomNav-border ${
						navState.isSearchActive && 'bottomNav-border-fade'
					}`}
				/>
			</nav>
			{!navState.isMenuOpen && <MobileSearchForm />}
		</>
	);
};

export default BottomNav;
