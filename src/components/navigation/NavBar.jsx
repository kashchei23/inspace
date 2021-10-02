import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import MobileMenu from './MobileMenu';
import MobileSearchForm from '../form/MobileSearchForm';
// import DesktopMenu from './DesktopMenu';
import { NasaDataContext } from '../../context/NasaContext';

const NavBar = ({ setQuery, setIsDateEntered }) => {
	const { navState } = useContext(NasaDataContext);

	const [searchIsActive, setSearchIsActive] = useState(false);

	const handleSearchClick = () => {
		navState.setSearchIsActive((prevSearchIsActive) => !prevSearchIsActive);
		navState.setIsMenuOpen(false);
	};

	const toggleMenu = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<nav className='navBar' aria-label='Desktop navigation'>
				<Link to='/' onClick={scrollToTop}>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1632785985/inspace/inspace-gradient-white_jzyn7s.png'
						alt='buzztraq logo'
						className='navBar-logo'
					/>
				</Link>
				{/* <DesktopMenu /> */}
				<div className='navBar-icons'>
					<div className='search-icon' onClick={handleSearchClick}>
						<img
							src='https://res.cloudinary.com/obkidz/image/upload/v1632850751/icons/search-icon.png'
							alt='search icon'
							className='search-icon-img'
						/>
					</div>
					<button
						className={`menu-button ${
							navState.isMenuOpen && 'menu-button-open'
						}`}
						onClick={toggleMenu}
						id='menu-button'
					>
						<div
							className={`menu-button-bars ${
								navState.isMenuOpen && 'open-menu'
							}`}
						/>
						<div
							className={`menu-button-bars ${
								navState.isMenuOpen && 'open-menu'
							}`}
						/>
						<div
							className={`menu-button-bars ${
								navState.isMenuOpen && 'open-menu'
							}`}
						/>
						<div
							className={`menu-button-bars ${
								navState.isMenuOpen && 'open-menu'
							}`}
						/>
					</button>
				</div>
				<div
					className={`nav-border ${
						(navState.isMenuOpen || navState.searchIsActive) &&
						'nav-border-fade'
					}`}
				/>
			</nav>

			<nav className='mobileNav' aria-label='Mobile navigation'>
				{!navState.isMenuOpen && (
					<MobileSearchForm
						handleSearchClick={handleSearchClick}
						setQuery={setQuery}
						setIsDateEntered={setIsDateEntered}
						searchIsActive={searchIsActive}
					/>
				)}
				{!navState.searchIsActive && (
					<MobileMenu
						onClick={toggleMenu}
						// isMenuOpen={navState.isMenuOpen}
					/>
				)}
			</nav>

			<div
				className={`page-shadow ${
					!navState.isMenuOpen || !navState.searchIsActive ? '' : 'fade-in'
				}`}
				onClick={toggleMenu}
			/>
		</>
	);
};

export default NavBar;
