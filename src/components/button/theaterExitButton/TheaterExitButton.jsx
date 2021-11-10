import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { AppContext } from '../../../context/AppContext';
import { TheaterContext } from '../../../context/TheaterContext';
import IconButton from '../iconButton/IconButton';
import './TheaterExitButton.scss';

const TheaterExitButton = () => {
	const { navState } = useContext(AppContext);
	const { setIsTheaterOn } = useContext(TheaterContext);

	const [theaterButtonClass, setTheaterButtonClass] = useState(
		'button-icon-theater'
	);
	const [isButtonDisabled, setIsButtonDisabled] = useState(null);
	const location = useLocation();

	const toggleTheaterExit = () => {
		setIsTheaterOn((prevIsTheaterOn) => !prevIsTheaterOn);
	};

	const closeTheaterExit = (e) => {
		if (e.target.dataset.name !== 'theater') setIsTheaterOn(false);
	};
	useEffect(() => {
		document.addEventListener('click', closeTheaterExit);
		return () => {
			document.removeEventListener('click', closeTheaterExit);
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
			onClick={toggleTheaterExit}
			label='THEATER Exit'
			disabled={isButtonDisabled}
			dataName='theater'
		/>
	);
};

export default TheaterExitButton;
