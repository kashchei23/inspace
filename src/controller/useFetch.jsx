import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = ({ query, isDateEntered, setIsDateEntered }) => {
	//* Initialize state with data in local storage
	const [nasaData, setData] = useState(
		JSON.parse(localStorage.getItem('storedObj'))
	);
	useEffect(() => {
		const nasaUrl = `https://api.nasa.gov/planetary/apod`;
		const fetchData = async () => {
			const response = await axios.get(
				`${nasaUrl}?start_date=${query.fromDate}&end_date=${query.toDate}&api_key=${process.env.REACT_APP_API_KEY}`
			);
			setData(response.data);
			//* Store response in local storage for later retrieval
		};

		//* Fetch data on condition that dates have been entered
		if (isDateEntered) {
			fetchData();
			localStorage.setItem('storedObj', JSON.stringify(nasaData));
			setIsDateEntered(false);
		}
	}, [query, isDateEntered, setIsDateEntered, nasaData]);
	return nasaData;
};
