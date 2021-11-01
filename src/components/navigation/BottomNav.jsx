import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import IconButton from '../../components/button/iconButton/IconButton';
import MobileSearchForm from '../form/MobileSearchForm';
import './BottomNav.scss';

import { AppContext } from '../../context/AppContext';

const BottomNav = () => {
	const { navState } = useContext(AppContext);

	const handleSearchClick = () => {
		navState.setSearchIsActive((prevSearchIsActive) => !prevSearchIsActive);
		navState.setIsMenuOpen(false);
	};

	const closeSearchAndMenu = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen(false);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const toggleTextBrightness = () => {
		navState.setIsShadowOn((prevIsShadowOn) => !prevIsShadowOn);
	};

	return (
		<>
			<nav className='bottomNav'>
				<Link to='/' onClick={closeSearchAndMenu} className='home-button' />
				<IconButton
					type='button'
					className={`search-button ${
						navState.searchIsActive && 'search-button-active'
					}`}
					onClick={handleSearchClick}
				></IconButton>
				<IconButton
					type='button'
					className={`brightness-button ${
						navState.isShadowOn && 'brightness-button-active'
					}`}
					onClick={toggleTextBrightness}
				/>

				<div
					className={`bottomNav-border ${
						navState.searchIsActive && 'bottomNav-border-fade'
					}`}
				/>
			</nav>
			{!navState.isMenuOpen && <MobileSearchForm />}
		</>
	);
};

export default BottomNav;
