import React, { useContext, useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Button from '../../components/button/Button';
import '../../styles/feature-picture.scss';
const PictureOfTheDay = () => {
	const { nasaData, navState } = useContext(AppContext);

	const potdRef = useRef(null);

	const [isAccordionOpen, setIsAccordionOpen] = useState(false);

	const toggleAccordion = () => {
		setIsAccordionOpen((prevIsAccordionOpen) => !prevIsAccordionOpen);
	};

	const param = useParams();
	const selectedPicture = nasaData.find((e) => e.date === param.date);

	useEffect(() => {
		navState.setIsPictureMounted(true);
		return () => {
			navState.setIsPictureMounted(false);
		};
	}, []);

	return (
		<div className='page' ref={potdRef}>
			{/* <h1>Picture of the Day</h1> */}
			{nasaData && (
				<>
					<h1 className='nasa-data-title'>{selectedPicture.title}</h1>
					<figure>
						{selectedPicture.media_type === 'image' ? (
							<img
								src={selectedPicture.url}
								alt={selectedPicture.title}
								className='nasaImg-full'
							/>
						) : (
							selectedPicture.media_type === 'video' && (
								<iframe
									width='420'
									height='315'
									src={selectedPicture.url}
									title={selectedPicture.title}
								/>
							)
						)}
						<span className='date'>{selectedPicture.date}</span>
						<span className='copyright-text'>
							Copyright: {selectedPicture.copyright}
						</span>
					</figure>
					<div
						className={`text-wrapper ${
							isAccordionOpen ? 'show-text' : 'hide-text'
						}`}
					>
						<div
							className={`text-shadow ${isAccordionOpen ? 'hide' : 'show'}`}
						/>
						<p className='nasa-data-text'>{selectedPicture.explanation}</p>
					</div>
					<Button
						type='button'
						className={`button read-button ${
							isAccordionOpen && 'read-button-less'
						}`}
						innerText={isAccordionOpen ? 'Read less' : 'Read more'}
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
