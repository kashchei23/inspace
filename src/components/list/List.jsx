import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NasaDataContext } from '../dataContextWrapper/NasaContext';

import './List.scss';

const List = ({ handleClick }) => {
	// const displayedRef = useRef(null);
	const nasaData = useContext(NasaDataContext);
	useEffect(() => {
		// if (displayedRef.current) {
		// 	displayedRef.current.setAttribute('class', 'nasa-data');
		// }
	}, [nasaData]);
	return (
		<>
			<p>List component</p>
			{nasaData ? (
				<div className='list'>
					{nasaData.date}
					{nasaData.map((data) => {
						return (
							<div key={data.date}>
								{data.date}
								<Link
									to={`/list/potd/${data.date}`}
									className='nasa-data-title'
									name={data.date}
									onClick={handleClick}
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
