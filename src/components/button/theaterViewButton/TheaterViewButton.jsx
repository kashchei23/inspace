import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { AppContext } from '../../../context/AppContext';
import IconButton from '../iconButton/IconButton';
import './TheaterViewButton.scss';

const TheaterViewButton = () => {
	const { navState } = useContext(AppContext);

	const [theaterButtonClass, setTheaterButtonClass] = useState('');
	const [isButtonDisabled, setIsButtonDisabled] = useState(null);
	const location = useLocation();

	const toggleTheaterView = () => {
		navState.setIsPageShadowOn((previsPageShadowOn) => !previsPageShadowOn);
		console.log('yaga');
		//! turn on page shadow
		//! blur background
		//! unhide full image
	};

	useEffect(() => {
		const handleButtonDisable = () => {
			if (
				location.pathname === '/about' ||
				location.pathname === '/developer'
			) {
				setIsButtonDisabled(true);
				setTheaterButtonClass(
					'button-icon-theater button-icon-theater-disabled'
				);
			} else {
				setIsButtonDisabled(false);
				setTheaterButtonClass(
					`button-icon-theater ${
						navState.isPageShadowOn ? 'button-icon-theater-active' : ''
					}`
				);
			}
		};

		handleButtonDisable();
	}, [location, navState]);

	return (
		<IconButton
			type='button'
			className={theaterButtonClass}
			onClick={toggleTheaterView}
			label='THEATER VIEW'
			disabled={isButtonDisabled}
		/>
	);
};

export default TheaterViewButton;
