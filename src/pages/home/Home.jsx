import React, { useContext, useRef, useState, useEffect } from 'react';
import { formatDate } from '../../helpers/dateRangeAndFormat';
import { useFetch } from '../../api/useFetch';
import LazyLoad from 'react-lazy-load';

import './Home.scss';
import '../../styles/_page.scss';
import { TheaterContext } from '../../context/TheaterContext';
import TheaterView from '../../components/theaterView/TheaterView';
import { convertMonthToName } from '../../helpers/dateMonthFormatter';

const Home = () => {
	const { isTheaterOn } = useContext(TheaterContext);
	const [isDateEntered, setIsDateEntered] = useState(false);
	const [isImageReadyToDisplay, setIsImageReadyToDisplay] = useState(false);
	const queryRef = useRef('');
	const currentDate = formatDate(new Date());
	const currentRef = useRef(null);

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

	// window.scrollTo({ top: 0 });
	useEffect(() => {
		if (!isLoading && currentNasaPicture) {
			setTimeout(() => {
				setIsImageReadyToDisplay(true);
				if (currentPicture && currentPicture.media_type === 'image') {
					currentRef.current.style.background = `url('${currentPicture.url}') no-repeat center/cover`;
				}
			}, 1000);
		}
	}, [isLoading, currentNasaPicture, currentPicture]);

	useEffect(() => {
		currentDate && setIsDateEntered(true);
	}, [currentDate, setIsDateEntered]);

	return (
		<>
			{isTheaterOn && <TheaterView featurePicture={currentPicture} />}
			<div className='page'>
				{isImageReadyToDisplay ? (
					<>
						<LazyLoad>
							<div className={`hero scale-up ${isTheaterOn && 'scale-down'}`}>
								{currentPicture.media_type === 'image' ? (
									<div className='hero-image' ref={currentRef} />
								) : (
									currentPicture.media_type === 'video' && (
										<iframe
											width='420'
											height='315'
											src={currentPicture.url}
											title={currentPicture.title}
											className='hero-video'
										/>
									)
								)}
							</div>
						</LazyLoad>
						<div
							className={`feature-text scale-up ${isTheaterOn && 'scale-down'}`}
						>
							<div>
								<h2>{currentPicture.title}</h2>
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
								isImageReadyToDisplay
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
