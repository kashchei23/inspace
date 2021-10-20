import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { NasaDataContext } from '../../context/NasaContext';
import Button from '../../components/button/Button';
import '../../styles/feature-picture.scss';
const PictureOfTheDay = ({ onClick }) => {
	const { fetchedData, endpointState, navState } = useContext(NasaDataContext);

	const [chosenImage, setChosenImage] = useState('');

	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};
	useEffect(() => {
		for (let i = 0; i < fetchedData.length; i++) {
			const entry = fetchedData[i];
			if (endpointState.endpoint === entry.date) {
				setChosenImage(entry);
			}
		}
	}, [fetchedData, endpointState.endpoint]);

	return (
		<div className='page'>
			<Link to='/picture-list' onClick={onClick} className='navigate-back-icon'>
				<img
					src='https://res.cloudinary.com/obkidz/image/upload/v1633031774/icons/chevron-off-white_f9t997.png'
					alt='navigate back chevron'
				/>
			</Link>
			{fetchedData && (
				<>
					<h2 className='nasa-data-title'>{chosenImage.title}</h2>
					<figure>
						<img
							src={chosenImage.url}
							className='nasaImg-full'
							alt={chosenImage.title}
						/>
						<span className='date'>{chosenImage.date}</span>
						<span className='copyright-text'>
							Copyright: {chosenImage.copyright}
						</span>
					</figure>
					<div className={`text-wrapper ${isOpen ? 'show-text' : 'hide-text'}`}>
						<div className={`text-shadow ${isOpen ? 'hide' : 'show'}`} />
						<p className='nasa-data-text'>{chosenImage.explanation}</p>
					</div>
					<Button
						type='button'
						className={`button read-button ${isOpen && 'read-button-less'}`}
						innerText={isOpen ? 'Read less' : 'Read more'}
						onClick={toggleAccordion}
					/>
					<div
						className={`brightness-shadow ${
							navState.isShadowOn && 'fade-in slow-fade'
						}`}
					/>
				</>
			)}
		</div>
	);
};

export default PictureOfTheDay;
