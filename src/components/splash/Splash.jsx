import React, { useEffect, useState } from 'react';

import './Splash.scss';
import SplashVideo from './SplashVideo';
import SplashStill from './SplashStill';

const Splash = ({ setSplashPlayed }) => {
	const [splashClass, setSplashClass] = useState('');

	const [isSplashPlaying, setIsSplashPlaying] = useState(null);

	useEffect(() => {
		if (isSplashPlaying) {
			setTimeout(() => {
				setSplashClass('splash-fade-out');
			}, 2600);
		} else {
		}
	}, [isSplashPlaying]);

	useEffect(() => {
		if (isSplashPlaying) {
			setTimeout(() => {
				sessionStorage.setItem('splashPlayed', 'true');
				setSplashPlayed(sessionStorage.getItem('splashPlayed'));
			}, 3000);
		}
	}, [isSplashPlaying, setSplashPlayed]);

	return (
		<div className={`splash ${splashClass}`}>
			<SplashStill setIsSplashPlaying={setIsSplashPlaying} />
			<SplashVideo setIsSplashPlaying={setIsSplashPlaying} />
			{isSplashPlaying && (
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1636490565/inspace/inspace-gradient-white_uv7qc1.png'
					alt='InSpace logo'
					className='splash-logo'
				/>
			)}
		</div>
	);
};

export default Splash;
