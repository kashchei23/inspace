import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { NasaDataContext } from '../dataContextWrapper/NasaContext';

const PictureOfTheDay = ({ endpoint, onClick }) => {
	const nasaData = useContext(NasaDataContext);

	const [chosenImage, setChosenImage] = useState('');

	useEffect(() => {
		for (let i = 0; i < nasaData.length; i++) {
			const entry = nasaData[i];
			if (endpoint === entry.date) {
				setChosenImage(entry);
			}
		}
	}, [nasaData, endpoint]);

	return (
		<>
			<p>Picture of the Day component</p>
			{nasaData && (
				<>
					<h1 className='nasa-data-txt'>{chosenImage.title}</h1>
					<p className='nasa-data-txt'>{chosenImage.explanation}</p>
					<p>{chosenImage.date}</p>
					<Link to='/list' onClick={onClick}>
						Back to list
					</Link>
				</>
			)}
		</>
	);
};

export default PictureOfTheDay;
