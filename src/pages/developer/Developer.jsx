import React from 'react';

import './Developer.scss';
import StyledLink from '../../components/styledLink/StyledLink';

const Developer = () => (
	<>
		<div className='page'>
			<main className='developer'>
				<div className='developer-text'>
					<h1>Daniel Brown</h1>
					<h2>Front End UI/UX Developer</h2>
					<p>
						I like to build things that are easy to use, and easy on the eyes.
						In addition to React, Javascript, and SCSS, I use tools such as
						Adobe Illustrator, XD, and After Effects to bring designs to life.
						Always curious, always learning, and always searching for ways to
						solve problems.
					</p>
					<p>
						This app was inspired by my children, in particular my son, who
						dreams of becoming an astronaut when he grows up. Next stop,
						Jupiter!
					</p>
					<StyledLink
						className='styled-link'
						href='mailto:kashchei23@gmail.com?subject=InSpace App'
						innerText="Let's work together!"
					/>
				</div>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/c_scale,w_400/v1610063693/Portfolio/images/main-image-flip_hq12t0.png'
					width='400'
					height='444'
					alt='Daniel Brown'
					className='developer-img'
				/>
			</main>
		</div>
	</>
);

export default Developer;
