import React, { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import './PictureOfTheDay.scss';
import '../../styles/_page.scss';
import { AppContext } from '../../context/AppContext';
import { TheaterContext } from '../../context/TheaterContext';
import TheaterView from '../../components/theaterView/TheaterView';
import { convertMonthToName } from '../../helpers/dateMonthFormatter';

const PictureOfTheDay = () => {
	const { nasaData, navState } = useContext(AppContext);
	const { isTheaterOn } = useContext(TheaterContext);
	const selectedRef = useRef('');

	const param = useParams();
	const selectedPicture = nasaData.find((e) => e.date === param.date);
	useEffect(() => {
		window.scrollTo({ top: 0 });
		navState.setIsBackButtonVisible(true);
		return () => {
			navState.setIsBackButtonVisible(false);
		};
	}, [navState]);

	useEffect(() => {
		if (selectedPicture && selectedPicture.media_type === 'image') {
			selectedRef.current.style.background = `url('${selectedPicture.url}') no-repeat center/cover`;
		}
	}, [nasaData, selectedPicture]);

	return (
		<>
			{isTheaterOn && <TheaterView featurePicture={selectedPicture} />}
			<div className='page'>
				{nasaData && (
					<>
						<div className={`hero scale-up ${isTheaterOn && 'scale-down'}`}>
							{selectedPicture.media_type === 'image' ? (
								<div className='hero-image' ref={selectedRef} />
							) : (
								selectedPicture.media_type === 'video' && (
									<iframe
										width='420'
										height='315'
										src={selectedPicture.url}
										title={selectedPicture.title}
										className='hero-video'
									/>
								)
							)}
						</div>
						<div
							className={`feature-text scale-up ${isTheaterOn && 'scale-down'}`}
						>
							<div>
								<h2>{selectedPicture.title}</h2>
							</div>
							<div className='feature-text-date animate-content-text'>
								{convertMonthToName(selectedPicture.date)}
							</div>

							<p className='animate-content-text'>
								{selectedPicture.explanation}
							</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default PictureOfTheDay;
