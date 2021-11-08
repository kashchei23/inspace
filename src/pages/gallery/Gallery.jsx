import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import { AppContext } from '../../context/AppContext';

import './Gallery.scss';

const Gallery = () => {
	const { nasaData, queryState, isLoading, error } = useContext(AppContext);

	const [isContentLoading, setIsContentLoading] = useState(false);
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const getLoadStatus = () => {
		setIsImageLoaded(true);
	};

	useEffect(() => {
		if (queryState.isDateEntered) {
			setIsImageLoaded(false);
		}
	}, [queryState.isDateEntered]);

	useEffect(() => {
		window.scrollTo({ top: 0 });
		if (!isLoading && nasaData) {
			setTimeout(() => {
				setIsContentLoading(false);
			}, 400);
		}
	}, [isLoading, nasaData]);

	return (
		<div className='page'>
			<div className='gallery-background' />
			{error ? (
				<p className=''>{error}</p>
			) : (
				<>
					<header className='page-header'>
						<h1 className='page-title'>Gallery</h1>
						{nasaData && (
							<h4>
								{`${nasaData[0].date}`}&nbsp; &#8212; &nbsp;
								{`${nasaData[nasaData.length - 1].date}`}
							</h4>
						)}
					</header>
					<div className='gallery'>
						{nasaData?.map((data) => {
							return (
								<div key={data.date}>
									{!isContentLoading && (
										<Link
											to={`/picture-of-the-day/${data.date}`}
											name={data.date}
											className='gallery-card-link'
										>
											<div className='gallery-card'>
												{data.media_type === 'image' ? (
													<>
														<LazyLoad
															height={150}
															offsetTop={100}
															onContentVisible={() =>
																console.log('look ma I have been lazyloaded!')
															}
														>
															<img
																src={data.url}
																alt={data.title}
																className='gallery-img'
																onLoad={getLoadStatus}
																loading='lazy'
															/>
														</LazyLoad>

														<div
															className={`placeholder ${
																isImageLoaded && 'hide-placeholder'
															}`}
														>
															<div className='test' />
															<div className='shimmer' />
														</div>
													</>
												) : (
													data.media_type === 'video' && (
														<>
															<iframe
																width='420'
																height='315'
																src={data.url}
																title={data.title}
																className='gallery-video'
																onLoad={getLoadStatus}
																loading='lazy'
															/>
															<div
																className={`test ${
																	isImageLoaded && 'hide-placeholder'
																}`}
																key={data.date}
															></div>
														</>
													)
												)}
												<div className='gallery-img-text'>
													<p className='gallery-img-date'>{data.date}</p>
													<h4 className='gallery-img-title'>{data.title}</h4>
												</div>
												<div className='gallery-card-shadow'></div>
											</div>
										</Link>
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
