import React, { useState } from 'react';

import './Splash.scss';

const Splash = ({ splashClass }) => {
	const [videoIsLoaded, setVideoIsLoaded] = useState(false);

	const handleOnPlay = () => {
		setVideoIsLoaded(true);
	};

	return (
		<div className={`splash ${splashClass}`}>
			<video className='splash-vid' onPlay={handleOnPlay} autoPlay muted>
				<source
					src='https://res.cloudinary.com/obkidz/video/upload/v1635840510/inspace/splash_hdv52c.mp4'
					type='video/mp4'
				/>
			</video>
			{videoIsLoaded && (
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1632785985/inspace/inspace-gradient-white_jzyn7s.png'
					alt='InSpace logo'
					className='splash-img'
				/>
			)}
		</div>
	);
};

export default Splash;
