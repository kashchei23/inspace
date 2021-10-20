import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

import './Gallery.scss';

const Gallery = () => {
	const { fetchedData, endpointState } = useContext(AppContext);

	//! Change to clickHandler, create backbutton slide animation inside navBar
	const getEndpoint = (e) => {
		const endpoint = e.target.name;
		endpointState.setEndpoint(endpoint);

		// Store endpoint in local variable so it's not lost on refresh
		// localStorage.setItem('storedEndpoint', JSON.stringify(endpoint));
		return endpoint;
	};

	return (
		<>
			{fetchedData ? (
				<div className='page'>
					<header className='page-header'>
						<h1 className='page-title'>Picture of the Day</h1>
						{`${fetchedData[0].date}`}&nbsp; &#8212; &nbsp;
						{`${fetchedData[fetchedData.length - 1].date}`}
						{/* <p className='smaller-text'>Click for larger image</p> */}
					</header>
					<div className='gallery'>
						{fetchedData.map((data) => {
							return (
								<>
									<Link
										to={`/picture-of-the-day/${data.date}`}
										name={data.date}
										onClick={getEndpoint}
										key={data.date}
										className='gallery-card-link'
									>
										<div className='gallery-card'>
											<img
												src={data.url}
												alt={data.title}
												className='gallery-img'
											/>
											<div className='gallery-img-text'>
												<p className='gallery-img-date'>{data.date}</p>
												<p className='gallery-img-title'>{data.title}</p>
											</div>

											<div className='gallery-card-shadow'></div>
										</div>
									</Link>
								</>
							);
						})}
					</div>
				</div>
			) : (
				<>
					<p>No search entered</p>
					<button type='submit'>Search</button>
				</>
			)}
		</>
	);
};

export default Gallery;
