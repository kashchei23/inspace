import React, { useRef, useEffect } from 'react';

import './Splash.scss';

const SplashVideo = ({ setIsSplashPlaying }) => {
	const handleOnPlay = () => {
		setIsSplashPlaying(true);
	};

	const vidRef = useRef(null);

	const setSplashSrc = () => {
		const displayStyle = window.getComputedStyle(vidRef.current).display;
		if (displayStyle === 'block') {
			vidRef.current.src =
				'https://res.cloudinary.com/obkidz/video/upload/v1635840510/inspace/splash_hdv52c.mp4';
		} else if (displayStyle === 'none') {
			vidRef.current.src = null;
		}
		console.log(vidRef.current.src);
	};

	useEffect(() => {
		setSplashSrc();
	}, []);
	return (
		<video
			playsInline
			autoPlay
			muted
			className='splash-vid'
			onPlay={handleOnPlay}
			ref={vidRef}
		>
			<source type='video/mp4' />
		</video>
	);
};

export default SplashVideo;
