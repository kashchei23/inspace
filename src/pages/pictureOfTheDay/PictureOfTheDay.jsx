import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Button from '../../components/button/Button';
import './PictureOfTheDay.scss';
import '../../styles/_utilities.scss';

const PictureOfTheDay = () => {
	const { nasaData, navState } = useContext(AppContext);

	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
	const openAccordion = () => {
		setIsAccordionOpen(true);
	};

	const param = useParams();
	const selectedPicture = nasaData.find((e) => e.date === param.date);

	useEffect(() => {
		navState.setIsBackButtonVisible(true);
		return () => {
			navState.setIsBackButtonVisible(false);
		};
	}, []);

	return (
		<div className='page'>
			{nasaData && (
				<>
					<h1 className='picture-title'>{selectedPicture.title}</h1>
					<figure>
						{selectedPicture.media_type === 'image' ? (
							<img
								src={selectedPicture.url}
								alt={selectedPicture.title}
								className='picture-image'
							/>
						) : (
							selectedPicture.media_type === 'video' && (
								<iframe
									width='420'
									height='315'
									src={selectedPicture.url}
									title={selectedPicture.title}
									className='picture-video'
								/>
							)
						)}
						<figcaption className='animate-content-text'>
							<span>{selectedPicture.date}</span>

							<span>
								Copyright:
								{selectedPicture.copyright ? selectedPicture.copyright : 'N/A'}
							</span>
						</figcaption>
					</figure>
					<div
						className={`expandable-text-wrapper ${
							isAccordionOpen ? 'expand-text' : 'contract-text'
						}`}
					>
						<div
							className={`expandable-text-wrapper-shadow ${
								isAccordionOpen ? 'hide' : 'show'
							}`}
						/>
						<p className='animate-content-text'>
							{selectedPicture.explanation}
						</p>
					</div>
					<Button
						type='button'
						className={`button read-more-button ${
							isAccordionOpen ? 'hide' : 'animate-fadeIn'
						}`}
						innerText='Read more'
						onClick={openAccordion}
					/>
					<div
						className={`brightness-shadow ${
							navState.isPageShadowOn && 'brightness-shadow-show slow-fade'
						}`}
					/>
				</>
			)}
		</div>
	);
};

export default PictureOfTheDay;
