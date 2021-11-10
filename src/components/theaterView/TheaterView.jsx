import React, { useRef, useEffect, useContext } from 'react';
import IconButton from '../button/iconButton/IconButton';
import './TheaterView.scss';
import { TheaterContext } from '../../context/TheaterContext';

const TheaterView = ({ featurePicture }) => {
	const { setIsTheaterOn } = useContext(TheaterContext);

	const closeTheaterView = () => {
		setIsTheaterOn(false);
	};
	const imgRef = useRef('');

	useEffect(() => {
		if (featurePicture.media_type === 'image') {
			imgRef.current.style.backgroundImage = `url(${featurePicture.url})`;
		} else if (featurePicture.media_type === 'video') {
		}
		return () => {
			setIsTheaterOn(false);
		};
	}, []);

	return (
		<div className='theater' data-name='theater'>
			<IconButton
				type='button'
				className='theater-exit'
				onClick={closeTheaterView}
				title='Exit Theater Mode'
			/>
			{featurePicture.media_type === 'image' ? (
				<div className='theater-image' ref={imgRef} />
			) : (
				featurePicture.media_type === 'video' && (
					<iframe
						width='420'
						height='315'
						src={featurePicture.url}
						title={featurePicture.title}
						className='theater-video'
					/>
				)
			)}
		</div>
	);
};

export default TheaterView;
