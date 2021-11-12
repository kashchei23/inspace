import React from 'react';

import './About.scss';

const About = () => {
	return (
		<div className='about page'>
			<h1 data-testid='about'>About</h1>
			<p>
				InSpace brings the wonderous imagery from the NASA Astronomy Picture of
				the Day API to your browser for a user friendly experience. Each day, a
				new image or video with a brief description is featured and displayed on
				the home page.
			</p>
			<p>
				For past pictures dating as far back as June 16, 1995, click the search
				button and a gallery will populate with your chosen images. From there
				you can use the theater view button to expand selected images
				fullscreen.
			</p>
			<ul>
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
				<li>
					This application was developed using React, Javascript, HTML, and
					SCSS.
				</li>
			</ul>
			<div className='toolset'>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1636488596/logos/logo_js_cegsgn.png'
					alt='Javascript logo'
					className='toolset-logo'
				/>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1636487402/logos/logo_html_vkubkp.png'
					alt='HTML logo'
					className='toolset-logo'
				/>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1636487401/logos/logo_css_lgz2de.png'
					alt='CSS logo'
					className='toolset-logo'
				/>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1636487406/logos/logo_react_ecesvn.png'
					alt='React logo'
					className='toolset-logo'
				/>
			</div>
		</div>
	);
};

export default About;
