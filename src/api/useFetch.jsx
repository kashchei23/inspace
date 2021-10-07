import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = ({ query, isDateEntered, setIsDateEntered }) => {
	const [nasaData, setNasaData] = useState(
		JSON.parse(localStorage.getItem('storedObj'))
	);
	useEffect(() => {
		const nasaUrl = `https://api.nasa.gov/planetary/apod`;

		const fetchData = async () => {
			const response = await axios.get(
				`${nasaUrl}?start_date=${query.fromDate}&end_date=${query.toDate}&api_key=${process.env.REACT_APP_API_KEY}`
			);
			setNasaData(response.data);
		};

		// Fetches data on the condition that dates have been entered by the user
		if (isDateEntered) {
			fetchData();
			console.log('fetched');
			localStorage.setItem('storedObj', JSON.stringify(nasaData));
			setIsDateEntered(false);
		}
	}, [query, isDateEntered, setIsDateEntered, nasaData]);
	return nasaData;
};
