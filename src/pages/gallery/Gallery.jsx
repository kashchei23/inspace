import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';

import './Gallery.scss';

const Gallery = () => {
	const { navState, nasaData, isLoading, error } = useContext(AppContext);
	const [loadingContent, setLoadingContent] = useState(false);

	const handleClick = (e) => {
		navState.setIsPictureMounted(true);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		if (!isLoading && nasaData) {
			setLoadingContent(true);
			setTimeout(() => {
				setLoadingContent(false);
			}, 1000);
		}
	}, [isLoading, nasaData]);

	return (
		<div className='page'>
			{error ? (
				<p className=''>{error}</p>
			) : (
				<>
					<header className='page-header'>
						<h1 className='page-title'>Gallery</h1>
						<p>
							{`${nasaData[0].date}`}&nbsp; &#8212; &nbsp;
							{`${nasaData[nasaData.length - 1].date}`}
						</p>
					</header>
					<div className='gallery'>
						{nasaData?.map((data) => {
							return (
								<div key={data.date}>
									{!loadingContent ? (
										<Link
											to={`/picture-of-the-day/${data.date}`}
											name={data.date}
											onClick={handleClick}
											className='gallery-card-link'
										>
											<div className='gallery-card'>
												{data.media_type === 'image' ? (
													<img
														src={data.url}
														alt={data.title}
														className='gallery-img'
													/>
												) : (
													data.media_type === 'video' && (
														<iframe
															width='420'
															height='315'
															src={data.url}
															title={data.title}
															className='gallery-video'
														/>
													)
												)}
												<div className='gallery-img-text'>
													<p className='gallery-img-date'>{data.date}</p>
													<p className='gallery-img-title'>{data.title}</p>
												</div>
												<div className='gallery-card-shadow'></div>
											</div>
										</Link>
									) : (
										<div className='gallery-card-placeholder' key={data.date}>
											<div className='shimmer'></div>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
};

export default Gallery;
