import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import './ImageList.scss';

const initialQueryState = { fromDate: '', toDate: '' };

const ImageList = (props) => {
	const DATE_PATTERN =
		'(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))';

	const [query, setQuery] = useState(initialQueryState);
	const [isDateEntered, setIsDateEntered] = useState(false);
	const inputFromRef = useRef(null);
	const inputToRef = useRef(null);

	const [nasaData, setData] = useState([]);
	const displayedRef = useRef(null);

	//* Set dates for search query
	const handleSubmit = (e) => {
		e.preventDefault();

		const startDate = inputFromRef.current.value;
		const endDate = inputToRef.current.value;

		setQuery({
			...query,
			fromDate: startDate,
			toDate: endDate,
		});
		setIsDateEntered(true);
		inputFromRef.current.value = '';
		inputToRef.current.value = '';
	};

	// //* Fetch API data in useEffect
	useEffect(() => {
		const nasaUrl = `https://api.nasa.gov/planetary/apod`;
		const fetchData = async () => {
			const response = await axios.get(
				`${nasaUrl}?start_date=${query.fromDate}&end_date=${query.toDate}&api_key=${process.env.REACT_APP_API_KEY}`
			);
			setData(response.data);
		};

		//* Fetch data on condition that valid dates have been entered
		if (isDateEntered) {
			if (displayedRef.current) {
				displayedRef.current.setAttribute('class', 'nasa-data hide');
				setTimeout(() => {
					fetchData();
				}, 250);
			} else {
				fetchData();
			}
			setIsDateEntered(false);
		}
	}, [query, isDateEntered]);

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='formInputs'>
					<label htmlFor='fromDate'>Start date</label>
					<input
						type='text'
						name='fromDate'
						placeholder='YYYY-MM-DD'
						required
						pattern={DATE_PATTERN}
						ref={inputFromRef}
						autoComplete='on'
					/>
				</div>
				<div className='formInputs'>
					<label htmlFor='toDate'>End date</label>
					<input
						type='text'
						name='toDate'
						placeholder='YYYY-MM-DD'
						required
						pattern={DATE_PATTERN}
						ref={inputToRef}
						autoComplete='on'
					/>
				</div>
				<button type='submit'>Search</button>
			</form>
			{nasaData &&
				nasaData.map((data) => {
					return (
						<div className='nasa-data' ref={displayedRef} key={data.title}>
							<h4 className='nasa-data-title'>{data.title}</h4>
							<img className='nasa-data-img' src={data.url} alt={data.title} />
							<p className='nasa-data-txt'>{data.explanation}</p>
						</div>
					);
				})}
		</div>
	);
};

export default ImageList;