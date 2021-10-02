import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NasaDataContext } from '../../context/NasaContext';

import './List.scss';

const List = ({ getEndpoint }) => {
	// const displayedRef = useRef(null);
	const { fetchedData } = useContext(NasaDataContext);
	useEffect(() => {
		// if (displayedRef.current) {
		// 	displayedRef.current.setAttribute('class', 'nasa-data');
		// }
		console.log(fetchedData);
	}, [fetchedData]);
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

export default List;
