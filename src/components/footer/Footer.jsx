import React from 'react';

const Footer = () => {
	return (
		<footer id='contact'>
			<h1>Footer</h1>
			<img
				src='https://res.cloudinary.com/obkidz/image/upload/v1633024282/inspace/inspace-off-white_m0qqfo.png'
				alt='InSpace logo off-white'
				className='developer-logo'
			/>
			<p>Astronomy Picture of the Day</p>
			<div className='footer-socials'>
				<a
					className='footer-socials-icon'
					href='https://github.com/kashchei23/buzztraq'
				>
					<i className='fas fa-envelope fa-3x'></i>
				</a>
				<a
					className='footer-socials-icon'
					href='https://github.com/kashchei23/buzztraq'
				>
					<i className='fab fa-github fa-3x' />
				</a>
				<a
					className='footer-socials-icon'
					href='https://www.linkedin.com/in/danielrbrown/'
				>
					<i className='fab fa-linkedin fa-3x' />
				</a>
				<a
					className='footer-socials-icon'
					href='https://portfolio-52086.firebaseapp.com/'
				>
					<i className='fas fa-briefcase fa-3x' />
				</a>
			</div>
			<p className='footer-footnote'>&copy; Daniel Brown 2021</p>
		</footer>
	);
};

export default Footer;
