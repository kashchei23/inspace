import React, { useContext, useRef, useState } from 'react';
import { getCurrentDate } from '../../helpers/getCurrentDate';
import { useFetchCurrent } from '../../api/useFetchCurrent';
import { NasaDataContext } from '../../context/NasaContext';

import './Home.scss';
import Button from '../../components/button/Button';

const Home = () => {
	const { navState } = useContext(NasaDataContext);

	const [currentPicture, setCurrentPicture] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const currentDate = getCurrentDate();

	const queryRef = useRef('');
	const toggleAccordion = (e) => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
		console.log('click', isOpen);
	};

	queryRef.current = { fromDate: currentDate, toDate: currentDate };

	useFetchCurrent(queryRef.current, setCurrentPicture);

	return (
		<div className='page home'>
			<h3 className='page-title'>Today's Picture</h3>
			{currentPicture[0] && (
				<>
					<h2 className='nasa-data-title'>{currentPicture[0].title}</h2>
					<figure>
						<img
							src={currentPicture[0].url}
							className='nasaImg-full'
							alt={currentPicture.title}
						/>
						<span className='date'>{currentPicture[0].date}</span>
						<span className='copyright-text'>
							Copyright: {currentPicture[0].copyright}
						</span>
					</figure>
					<div className={`text-wrapper ${isOpen ? 'show-text' : 'hide-text'}`}>
						<div className={`text-shadow ${isOpen ? 'hide' : 'show'}`} />
						<p className='nasa-data-text'>{currentPicture[0].explanation}</p>
					</div>
					<Button
						type='button'
						className={`button read-button ${isOpen && 'read-button-less'}`}
						innerText={isOpen ? 'Read less' : 'Read more'}
						onClick={toggleAccordion}
					/>
				</>
			)}
			<div
				className={`brightness-shadow ${
					navState.isShadowOn && 'fade-in slow-fade'
				}`}
			/>
		</div>
	);
};

export default Home;
