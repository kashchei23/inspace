import React, { useEffect, useState } from 'react';

import IconButton from '../iconButton/IconButton';
import './FullscreenButton.scss';

const FullscreenButton = () => {
	const [fullscreenButtonClass, setFullscreenButtonClass] = useState(
		'button-icon-fullscreen'
	);
	const [isFullscreen, setIsFullscreen] = useState(false);

	const toggleFullScreen = () => {
		setIsFullscreen((prevIsFullscreen) => !prevIsFullscreen);
	};

	useEffect(() => {
		if (isFullscreen) {
			setFullscreenButtonClass(
				'button-icon-fullscreen button-icon-fullscreen-active'
			);
			console.log('fullscreen on');
		} else {
			setFullscreenButtonClass('button-icon-fullscreen');
			console.log('fullscreen off');
		}
	}, [isFullscreen]);

	return (
		<IconButton
			type='button'
			className={fullscreenButtonClass}
			onClick={toggleFullScreen}
			label='FULL SCREEN'
		/>
	);
};

export default FullscreenButton;
