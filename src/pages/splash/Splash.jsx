import React, { useEffect, useState } from 'react';

import './Splash.scss';

const Splash = ({ handleOnEnded }) => {
	const [splashClass, setSplashClass] = useState('');
	const [isPlaying, setIsPlaying] = useState(null);

	const handleOnPlay = () => {
		setIsPlaying(true);
	};
	useEffect(() => {
		if (isPlaying) {
			setTimeout(() => {
				setSplashClass('splash-fade-out');
			}, 2600);
		}
	}, [isPlaying]);

	return (
		<div className={`splash ${splashClass}`}>
			<video
				className='splash-vid'
				onPlay={handleOnPlay}
				onEnded={handleOnEnded}
				autoPlay
				muted
				playsinline
			>
				<source
					src='https://res.cloudinary.com/obkidz/video/upload/v1635840510/inspace/splash_hdv52c.mp4'
					type='video/mp4'
				/>
			</video>
			{isPlaying && (
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1635873782/inspace/inspace-gradient-white_ezuh4w.png'
					alt='InSpace logo'
					className='splash-img'
				/>
			)}
		</div>
	);
};

export default Splash;
