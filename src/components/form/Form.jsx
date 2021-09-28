import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import List from '../list/List';

const Form = () => {
	const DATE_PATTERN =
		'(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))';

	const initialQueryState = { fromDate: '', toDate: '' };
	const [query, setQuery] = useState(initialQueryState);
	const [isDateEntered, setIsDateEntered] = useState(false);
	const inputFromRef = useRef(null);
	const inputToRef = useRef(null);

	//* Initialize state with data in local storage
	const [nasaData, setData] = useState(
		JSON.parse(localStorage.getItem('storedObj'))
	);

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
		console.log('from Form', query);
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
			//* Store response in local storage for later retrieval
			localStorage.setItem('storedObj', JSON.stringify(response.data));
		};

		//* Fetch data on condition that valid dates have been entered
		if (isDateEntered) {
			fetchData();
			setIsDateEntered(false);
		}
	}, [query, nasaData, isDateEntered]);
	return (
		<>
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
			{nasaData && <List nasaData={nasaData} />}
		</>
	);
};

export default Form;

// //! List should contain links
// const List = ({ nasaData }) => {
// 	const displayedRef = useRef(null);

// 	useEffect(() => {
// 		console.log('from List nasa', nasaData);
// 		console.log('from List nasa', nasaData.date);
// 		// if (displayedRef.current) {
// 		// 	displayedRef.current.setAttribute('class', 'nasa-data');
// 		// }
// 	}, [nasaData]);

// 	let { url, path } = useRouteMatch();

// 	useEffect(() => {
// 		console.log(url, path);
// 	});
// 	return (
// 		<>
// 			{nasaData.map((data) => {
// 				return (
// 					<>
// 						<div className='nasa-data' ref={displayedRef} key={data.title}>
// 							<h4 className='nasa-data-title'>{data.title}</h4>
// 							<img className='nasa-data-img' src={data.url} alt={data.title} />
// 							<p className='nasa-data-txt'>{data.date}</p>
// 						</div>

// 						<Link to={`${url}/${data.date}`}>{data.date}</Link>
// 						<Switch>
// 							<Redirect from='//*' to='/*' />
// 							<Route exact path={path}>
// 								<h1>working</h1>
// 							</Route>
// 							<Route path={`${path}/${data.date}`}>
// 								<PictureOfTheDay data={data} />
// 							</Route>
// 						</Switch>
// 					</>
// 				);
// 			})}
// 		</>
// 	);
// };

// //! Picture of the day element

// const PictureOfTheDay = (data) => {
// 	return (
// 		// <div className='nasa-data' key={data.title}>
// 		// 	<h4 className='nasa-data-title'>{data.title}</h4>
// 		// 	<img className='nasa-data-img' src={data.url} alt={data.title} />
// 		<p className='nasa-data-txt'>{data.date}</p>
// 		// 	<p className='nasa-data-txt'>{data.explanation}</p>
// 		// </div>
// 		// <div>Hello</div>
// 	);
// };
