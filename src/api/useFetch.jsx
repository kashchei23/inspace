import { useState, useEffect } from 'react';
import axios from 'axios';
import { cache } from './cache';

export const useFetch = (query, isDateEntered, setIsDateEntered) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [nasaData, setNasaData] = useState(
		JSON.parse(localStorage.getItem('galleryQuery'))
	);
	const [currentNasaPicture, setCurrentNasaPicture] = useState(
		JSON.parse(localStorage.getItem('currentQuery'))
	);

	useEffect(() => {
		const nasaUrl = `https://api.nasa.gov/planetary/apod`;
		const storeResponse = (res) => {
			cache[query.name] = {
				query: res.data,
				fromDate: query.fromDate,
				toDate: query.toDate,
			};
			if (query.name === 'galleryQuery') {
				localStorage.setItem('galleryQuery', JSON.stringify(res.data));
				setNasaData(res.data);
			} else if (query.name === 'currentQuery') {
				localStorage.setItem('currentQuery', JSON.stringify(res.data));
				setCurrentNasaPicture(JSON.parse(localStorage.getItem('currentQuery')));
			}
			setIsLoading(false);
		};

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
			if (
				cache[query.name] &&
				cache[query.name].fromDate === query.fromDate &&
				cache[query.name].toDate === query.toDate
			) {
				setNasaData(cache[query.name].query);
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
	return { nasaData, currentNasaPicture, isLoading, error };
};
