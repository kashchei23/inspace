import React from 'react';

import './Splash.scss';

const SplashStill = ({ setIsSplashPlaying }) => {
	const handlePlay = () => {
		setIsSplashPlaying(true);
	};

	return <div className='splash-still' onAnimationEnd={handlePlay} />;
};

export default SplashStill;
