import { useState, useEffect } from 'react';
import axios from 'axios';
import { cache } from './cache';

export const useFetch = (query, isDateEntered, setIsDateEntered) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [nasaData, setNasaData] = useState(
		JSON.parse(localStorage.getItem('storedObj'))
	);

	useEffect(() => {
		const nasaUrl = `https://api.nasa.gov/planetary/apod`;
		const storeResponse = (res) => {
			cache[query.name] = {
				query: res.data,
				fromDate: query.fromDate,
				toDate: query.toDate,
			};
			setNasaData(res.data);
			setIsLoading(false);
			if (query.name === 'galleryQuery') {
				localStorage.setItem('storedObj', JSON.stringify(res.data));
			}
		};
		console.log();
		const handleErrors = (err) => {
			if (err.response) {
				setError('Sorry, no data at this URL');
			} else if (err.request) {
				setError('Could not fetch, please check connection');
			} else {
				setError('Error, please try another search');
			}
		};
		const fetchData = async () => {
			setIsLoading(true);
			//TODO Check media type of response data.  if video, show error msg on thumbnail
			if (
				cache[query] &&
				cache[query].fromDate === query.fromDate &&
				cache[query].toDate === query.toDate
			) {
				setNasaData(cache[query].query);
				setIsLoading(false);
			} else {
				const response = await axios
					.get(
						`${nasaUrl}?start_date=${query.fromDate}&end_date=${query.toDate}&api_key=${process.env.REACT_APP_API_KEY}`
					)
					.then(storeResponse)
					.catch(handleErrors);
			}
		};

		if (isDateEntered) {
			fetchData();
			setIsDateEntered(false);
		}
	}, [query, isDateEntered, setIsDateEntered]);
	return { nasaData, isLoading, error };
};
