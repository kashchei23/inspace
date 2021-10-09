import React, { useState, useEffect, useContext } from 'react';

import './About.scss';
import Button from '../../components/button/Button';
import { NasaDataContext } from '../../context/NasaContext';

const About = () => {
	const [isVisible, setIsVisible] = useState(false);
	const { navState } = useContext(NasaDataContext);

	let timeoutId;

	const checkClick = () => {
		timeoutId = setTimeout(() => {
			setIsVisible(true);
		}, 2000);
	};

	const handleClick = (e) => {
		navState.setSearchIsActive(true);
		navState.setIsMenuOpen(false);
		console.log(navState.searchIsActive, navState.isMenuOpen);
		clearTimeout(timeoutId);
		setIsVisible(false);
	};

	useEffect(() => {
		// if (navState.searchIsActive || navState.isMenuOpen) {
		// 	console.log(isVisible);
		// 	clearTimeout(timeoutId);
		// 	setIsVisible(false);
		// }
		checkClick();
		return () => {
			clearTimeout(timeoutId);
		};
	}, []);

	return (
		<div className='about page'>
			<div className={`tooltip ${isVisible && 'fade-in'}`}>
				<i className='fas fa-long-arrow-alt-up fa-2x tooltip-arrow' />
				<Button
					className='button tooltip-button'
					innerText='Begin your search here'
					onClick={handleClick}
					type='button'
				/>
				<div className='tooltip-page-shadow' />
			</div>
			<h1 data-testid='about'>About</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo
				ligula, semper id lorem sed, ullamcorper vehicula ante. Praesent
				ultricies velit vel lorem ornare euismod. Pellentesque rhoncus nunc quis
				pretium sodales.
			</p>
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>
					Quisque Leo ligula, semper id lorem sed, ullamcorper vehicula ante.
				</li>
				<li>Praesent ultricies velit vel lorem ornare euismod. </li>
			</ul>
			<Button
				type='button'
				className='button about-cta-button'
				innerText='Begin your search'
				onClick={handleClick}
			/>
		</div>
	);
};

export default About;
