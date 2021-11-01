import React, { useContext } from 'react';

import './About.scss';
import Button from '../../components/button/Button';
import { AppContext } from '../../context/AppContext';

const About = () => {
	const { navState } = useContext(AppContext);

	const handleClick = () => {
		navState.setSearchIsActive(true);
		navState.setIsMenuOpen(false);
	};

	return (
		<div className='about'>
			<h1 data-testid='about'>About</h1>
			<p>
				InSpace brings the wonderous imagery from the NASA Astronomy Picture of
				the Day API to your browser for a user friendly experience. Each day, a
				new image or video with a brief description is featured and displayed on
				the home page. For past pictures dating as far back as June 16, 1995,
				simply use the search feature and a gallery will populate with your
				chosen images.
			</p>
			<ul>
				<li>
					This application was developed using React, Javascript, HTML, and
					SCSS.
				</li>
				<li>
					Visit the{' '}
					<a
						href='https://github.com/kashchei23/inspace'
						target='_blank'
						rel='noreferrer'
						className='external-link '
					>
						{' '}
						GitHub repository
					</a>{' '}
					for information on the development of this app.
				</li>
				<li>
					You can find out more about the{' '}
					<a
						href='https://api.nasa.gov/'
						target='_blank'
						rel='noreferrer'
						className='external-link'
					>
						NASA API portal
					</a>{' '}
					here.
				</li>
			</ul>
			<Button
				type='button'
				className='button about-cta-button'
				innerText='Begin your search'
				onClick={handleClick}
			/>
		</div>
	);
};

export default About;
