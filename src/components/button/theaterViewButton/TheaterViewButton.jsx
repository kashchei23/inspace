import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { AppContext } from '../../../context/AppContext';
import { TheaterContext } from '../../../context/TheaterContext';
import IconButton from '../iconButton/IconButton';
import './TheaterViewButton.scss';

const TheaterViewButton = () => {
	const { navState } = useContext(AppContext);
	const { setIsTheaterOn } = useContext(TheaterContext);

	const [theaterButtonClass, setTheaterButtonClass] = useState(
		'button-icon-theater'
	);
	const [isButtonDisabled, setIsButtonDisabled] = useState(null);
	const location = useLocation();

	const toggleTheaterView = () => {
		setIsTheaterOn((prevIsTheaterOn) => !prevIsTheaterOn);
	};

	const closeTheaterView = (e) => {
		if (e.target.dataset.name !== 'theater') setIsTheaterOn(false);
	};
	useEffect(() => {
		document.addEventListener('click', closeTheaterView);
		return () => {
			document.removeEventListener('click', closeTheaterView);
		};
	});
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
			dataName='theater'
		/>
	);
};

export default TheaterViewButton;
