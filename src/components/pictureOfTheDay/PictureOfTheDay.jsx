import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

//! Picture of the day
const PictureOfTheDay = ({ data, onClick }) => {
	let { url } = useRouteMatch();

	return (
		<>
			<p>Picture of the Day component</p>
			<p className='nasa-data-txt'>{data.explanation}</p>
			<Link to={url} onClick={onClick}>
				Back to list
			</Link>
		</>
	);
};

export default PictureOfTheDay;
