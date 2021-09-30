import React, { useState, useEffect } from 'react';

import './About.scss';
const About = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('click', () => {
			setIsVisible(false);
		});
		setTimeout(() => {
			setIsVisible(true);
		}, 8000);
		return () => {
			window.removeEventListener('click', () => {
				setIsVisible(false);
			});
		};
	}, []);

	return (
		<>
			{isVisible && (
				<>
					<div className='tooltip'>Begin your search here</div>
					<div className={`page-shadow ${isVisible && 'fade-in'}`} />
				</>
			)}
			<h1>About</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque leo
				ligula, semper id lorem sed, ullamcorper vehicula ante. Praesent
				ultricies velit vel lorem ornare euismod. Pellentesque rhoncus nunc quis
				pretium sodales.
			</p>
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>
					Quisque Leo ligula, semper id lorem sed, ullamcorper vehicula ante.
				</li>
				<li>Praesent ultricies velit vel lorem ornare euismod. </li>
			</ul>
		</>
	);
};

export default About;
