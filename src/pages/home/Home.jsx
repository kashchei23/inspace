import React, { useContext, useRef, useState, useEffect } from 'react';
import { formatDate } from '../../helpers/dateRangeAndFormat';
import { useFetch } from '../../api/useFetch';

import './Home.scss';
import '../../styles/_page.scss';
import { TheaterContext } from '../../context/TheaterContext';
import TheaterView from '../../components/theaterView/TheaterView';
import { convertMonthToName } from '../../helpers/dateMonthFormatter';

const Home = () => {
	const { isTheaterOn } = useContext(TheaterContext);
	const [isDateEntered, setIsDateEntered] = useState(false);
	const [isReadyToDisplay, setIsReadyToDisplay] = useState(false);
	const queryRef = useRef('');
	const currentDate = formatDate(new Date());

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
		console.log(isTheaterOn);
		window.scrollTo({ top: 0 });
		if (!isLoading && currentNasaPicture) {
			setIsReadyToDisplay(true);
		}
		setIsDateEntered(true);
	}, [isLoading, currentNasaPicture, isTheaterOn]);

	return (
		<>
			{isTheaterOn && <TheaterView featurePicture={currentPicture} />}
			<div
				className={`page page-scale-default ${
					isTheaterOn && 'page-scale-down'
				}`}
			>
				{isReadyToDisplay ? (
					<>
						<div className='hero'>
							{currentPicture.media_type === 'image' ? (
								<img
									src={currentPicture.url}
									alt={currentPicture.title}
									className='hero-image'
								/>
							) : (
								currentPicture.media_type === 'video' && (
									<iframe
										width='420'
										height='315'
										src={currentPicture.url}
										title={currentPicture.title}
										className='hero-video'
										autoplay='false'
									/>
								)
							)}
						</div>
						<div className='feature-text'>
							<div>
								<h2 className='feature-text-title'>{currentPicture.title}</h2>
							</div>
							<div className='feature-text-date animate-content-text'>
								{convertMonthToName(currentPicture.date)}
							</div>

							<p className='animate-content-text'>
								{currentPicture.explanation}
							</p>
						</div>
					</>
				) : (
					<div className='content-loader'>
						<img
							src='https://res.cloudinary.com/obkidz/image/upload/v1636490565/inspace/loading_spinner_n5bm5z.gif'
							alt='Animated loading icon'
							className={`content-loader-image ${
								isReadyToDisplay
									? 'content-loader-image-hide'
									: 'content-loader-image-show'
							}`}
						/>
					</div>
				)}
			</div>
		</>
	);
};

export default Home;
