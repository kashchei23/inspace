import React, { useContext } from 'react';

import IconButton from '../../components/button/iconButton/IconButton';
import IconLink from '../../components/styledLink/iconLink/IconLink';
import MobileSearchForm from '../form/MobileSearchForm';
import './BottomNav.scss';

import { AppContext } from '../../context/AppContext';

const BottomNav = () => {
	const { navState } = useContext(AppContext);

	const handleSearchClick = () => {
		navState.setIsSearchActive((previsSearchActive) => !previsSearchActive);
		navState.setIsMenuOpen(false);
	};

	const closeSearchAndMenu = () => {
		navState.setIsSearchActive(false);
		navState.setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const toggleTextBrightness = () => {
		navState.setIsPageShadowOn((previsPageShadowOn) => !previsPageShadowOn);
	};

	return (
		<>
			<nav className='bottomNav'>
				<IconLink
					to='/'
					onClick={closeSearchAndMenu}
					className='link-icon-home'
					label='HOME'
				/>
				<IconButton
					type='button'
					className={`button-icon-search ${
						navState.isSearchActive ? 'button-icon-search-active' : ''
					}`}
					onClick={handleSearchClick}
					label='SEARCH'
				/>
				<IconButton
					type='button'
					className={`button-icon-brightness ${
						navState.isPageShadowOn ? 'button-icon-brightness-active' : ''
					}`}
					onClick={toggleTextBrightness}
					label='BRIGHTNESS'
				/>

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
