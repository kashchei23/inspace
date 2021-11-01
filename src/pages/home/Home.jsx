import React, { useContext, useRef, useState, useEffect } from 'react';
import { formatDate } from '../../helpers/dateRangeAndFormat';
import { useFetch } from '../../api/useFetch';
import { AppContext } from '../../context/AppContext';

import Button from '../../components/button/Button';
import './Home.scss';
import '../../styles/_utilities.scss';

const Home = () => {
	const { navState } = useContext(AppContext);
	const [isDateEntered, setIsDateEntered] = useState(false);
	const [isReadyToDisplay, setIsReadyToDisplay] = useState(false);
	const queryRef = useRef('');
	const currentDate = formatDate(new Date());

	const [isAccordionOpen, setIsAccordionOpen] = useState(false);
	const openAccordion = () => {
		setIsAccordionOpen(true);
	};

	const { currentNasaPicture, isLoading } = useFetch(
		queryRef.current,
		isDateEntered,
		setIsDateEntered
	);

	queryRef.current = {
		name: 'currentQuery',
		fromDate: currentDate,
		toDate: currentDate,
	};

	const currentPicture = currentNasaPicture && currentNasaPicture[0];

	useEffect(() => {
		if (!isLoading && currentNasaPicture) {
			setTimeout(() => {
				setIsReadyToDisplay(true);
			}, 1000);
		}
		setIsDateEntered(true);
	}, [isLoading, currentNasaPicture]);

	return (
		<div className='page home'>
			<h2 className='page-title page-title-underline'>Today's Picture</h2>

			{isReadyToDisplay ? (
				<>
					<h1 className='home-title'>{currentPicture.title}</h1>
					<figure>
						{currentPicture.media_type === 'image' ? (
							<img
								src={currentPicture.url}
								alt={currentPicture.title}
								className='home-image'
							/>
						) : (
							currentPicture.media_type === 'video' && (
								<iframe
									width='420'
									height='315'
									src={currentPicture.url}
									title={currentPicture.title}
									className='home-video'
								/>
							)
						)}
						<figcaption className='animate-content-text'>
							<span>{currentPicture.date}</span>
							<span>Copyright: {currentPicture.copyright}</span>
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
						<p className='animate-content-text'>{currentPicture.explanation}</p>
					</div>
					<Button
						type='button'
						className={`button read-more-button ${
							isAccordionOpen ? 'hide' : 'animate-fadeIn'
						}`}
						innerText='Read more'
						onClick={openAccordion}
					/>
				</>
			) : (
				<div className='content-loader'>
					<img
						src='https://res.cloudinary.com/obkidz/image/upload/v1635289887/inspace/loading_spinner_zrwwvx.gif'
						alt='Animated loading icon'
						className={`content-loader-image ${
							isReadyToDisplay ? 'hide' : 'show'
						}`}
					/>
				</div>
			)}
			<div
				className={`brightness-shadow ${
					navState.isShadowOn && 'brightness-shadow-show slow-fade'
				}`}
			/>
		</div>
	);
};

export default Home;
