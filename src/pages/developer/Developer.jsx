import React from 'react';

const Developer = () => {
	return (
		<>
			<h1>Developer</h1>
			<img
				src='https://res.cloudinary.com/obkidz/image/upload/v1610063693/Portfolio/images/main-image-flip_hq12t0.png'
				alt='Daniel Brown'
				className='developer-img'
			/>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo
				ligula, semper id lorem sed, ullamcorper vehicula ante. Praesent
				ultricies velit vel lorem ornare euismod. Pellentesque rhoncus nunc quis
				pretium sodales.
			</p>
			<a
				href='mailto:kashchei23@gmail.com?subject=InSpace App'
				className='styled-link'
			>
				Let's work together
			</a>
		</>
	);
};

export default Developer;
