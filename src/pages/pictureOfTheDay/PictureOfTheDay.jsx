import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { NasaDataContext } from '../../context/NasaContext';

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
			<Link to='/list' onClick={onClick}>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1633031774/icons/chevron-off-white_f9t997.png'
					alt='navigate back chevron'
					className='back-icon'
				/>
			</Link>
			<p>Picture of the Day</p>
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
