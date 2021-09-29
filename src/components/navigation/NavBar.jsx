import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import MobileMenu from './MobileMenu';
import MobileSearchForm from './MobileSearchForm';
// import DesktopMenu from './DesktopMenu';

const NavBar = () => {
	const [searchIsActive, setSearchIsActive] = useState(false);
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const handleSearchClick = () => {
		setSearchIsActive(!searchIsActive);
		setMenuIsOpen(false);
	};

	const handleMenuClick = () => {
		setSearchIsActive(false);
		setMenuIsOpen(!menuIsOpen);
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
						className={`menu-button ${menuIsOpen && 'menu-button-open'}`}
						onClick={handleMenuClick}
						id='menu-button'
					>
						<div className={`menu-button-bars ${menuIsOpen && 'open-menu'}`} />
						<div className={`menu-button-bars ${menuIsOpen && 'open-menu'}`} />
						<div className={`menu-button-bars ${menuIsOpen && 'open-menu'}`} />
						<div className={`menu-button-bars ${menuIsOpen && 'open-menu'}`} />
					</button>
				</div>
				<div
					className={`nav-border ${
						(menuIsOpen || searchIsActive) && 'nav-border-fade'
					}`}
				/>
			</nav>
			<nav className='mobileNav' aria-label='Mobile navigation'>
				{!menuIsOpen && (
					<MobileSearchForm
						onClick={handleSearchClick}
						searchIsActive={searchIsActive}
					/>
				)}
				{!searchIsActive && (
					<MobileMenu onClick={handleMenuClick} menuIsOpen={menuIsOpen} />
				)}
			</nav>

			<div
				className={`page-shadow ${
					!menuIsOpen || !searchIsActive ? '' : 'fade-in'
				}`}
				onClick={handleMenuClick}
			/>
		</>
	);
};

export default NavBar;
