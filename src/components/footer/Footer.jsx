import React from 'react';

import '../../styles/global.scss';

import './Footer.scss';
const Footer = () => {
	const socials = {
		email: 'mailto:kashchei23@gmail.com?subject=FRONT END DEV PORTFOLIO',
		github: 'https://github.com/kashchei23/inspace',
		linkedin: 'https://www.linkedin.com/in/danielrbrown/',
		portfolio: 'https://portfolio-52086.firebaseapp.com/',
	};

	return (
		<footer data-testid='footer' className='footer'>
			<div className='footer-logo'>
				<div className='footer-logo-mark-transparent'>
					<div className='footer-logo-mark'>In</div>
				</div>
				<div className='footer-logo-text'>Space</div>
			</div>
			<h4>Astronomy Picture of the Day</h4>
			<div className='footer-socials'>
				<a
					className='footer-socials-icon'
					target='_blank'
					rel='noreferrer'
					href={socials.email}
				>
					<i className='fas fa-envelope fa-3x'></i>
				</a>
				<a
					className='footer-socials-icon'
					target='_blank'
					rel='noreferrer'
					href={socials.github}
				>
					<i className='fab fa-github fa-3x' />
				</a>
				<a
					className='footer-socials-icon'
					target='_blank'
					rel='noreferrer'
					href={socials.linkedin}
				>
					<i className='fab fa-linkedin fa-3x' />
				</a>
				<a
					className='footer-socials-icon'
					target='_blank'
					rel='noreferrer'
					href={socials.portfolio}
				>
					<i className='fas fa-briefcase fa-3x' />
				</a>
			</div>
			<p className='footer-footnote'>&copy; Daniel Brown 2021</p>
		</footer>
	);
};

export default Footer;
