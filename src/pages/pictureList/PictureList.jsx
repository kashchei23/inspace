import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NasaDataContext } from '../../context/NasaContext';

import './PictureList.scss';

const PictureList = () => {
	const { fetchedData, endpointState } = useContext(NasaDataContext);

	const getEndpoint = (e) => {
		const endpoint = e.target.name;
		endpointState.setEndpoint(endpoint);
		return endpoint;
	};

	return (
		<>
			<p>List component</p>
			{fetchedData ? (
				<div className='list'>
					{fetchedData.date}
					{fetchedData.map((data) => {
						return (
							<div key={data.date}>
								{data.date}
								<Link
									to={`/picture-of-the-day/${data.date}`}
									className='nasa-data-title'
									name={data.date}
									onClick={getEndpoint}
								>
									{data.title}
								</Link>
							</div>
						);
					})}
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

export default PictureList;
