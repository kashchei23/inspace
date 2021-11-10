import React, { useContext, useEffect } from 'react';
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

	const param = useParams();
	const selectedPicture = nasaData.find((e) => e.date === param.date);
	useEffect(() => {
		window.scrollTo({ top: 0 });
		navState.setIsBackButtonVisible(true);
		return () => {
			navState.setIsBackButtonVisible(false);
		};
	}, []);

	return (
		<>
			{isTheaterOn && <TheaterView featurePicture={selectedPicture} />}
			<div
				className={`page page-scale-default ${
					isTheaterOn && 'page-scale-down'
				}`}
			>
				{nasaData && (
					<>
						<div className='hero'>
							{selectedPicture.media_type === 'image' ? (
								<img
									src={selectedPicture.url}
									alt={selectedPicture.title}
									className='hero-image'
								/>
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
						<div className='feature-text'>
							<div>
								<h2 className='feature-text-title'>{selectedPicture.title}</h2>
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
