import { useState, useEffect } from 'react';
import axios from 'axios';

// import { cache } from './cache.js';
const cache = {};

export const useFetch = ({ query, isDateEntered, setIsDateEntered }) => {
	const [fetchStatus, setFetchStatus] = useState('idle');
	const [nasaData, setNasaData] = useState(
		JSON.parse(localStorage.getItem('storedObj'))
	);
	useEffect(() => {
		const nasaUrl = `https://api.nasa.gov/planetary/apod`;
		console.log(fetchStatus);
		const fetchData = async () => {
			setFetchStatus('fetching');
			//! need to update cache with correct query date
			if (
				cache[query] &&
				cache[query].fromDate === query.fromDate &&
				cache[query].toDate === query.toDate
			) {
				setNasaData(cache[query].query);
				console.log('set from cache', cache[query].query);
			} else {
				const response = await axios.get(
					`${nasaUrl}?start_date=${query.fromDate}&end_date=${query.toDate}&api_key=${process.env.REACT_APP_API_KEY}`
				);
				cache[query] = {
					query: response.data,
					fromDate: query.fromDate,
					toDate: query.toDate,
				};
				setNasaData(response.data);
				localStorage.setItem('storedObj', JSON.stringify(response.data));
				setFetchStatus('fetched');
				console.log('set from api', response.data);
			}
		};

		if (isDateEntered) {
			fetchData();
			setIsDateEntered(false);
		}
	}, [query, isDateEntered, setIsDateEntered, nasaData, fetchStatus]);
	return nasaData;
};
