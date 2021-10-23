import { useState, useEffect } from 'react';
import axios from 'axios';

const cache = {};

export const useFetch = ({ query, isDateEntered, setIsDateEntered }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [nasaData, setNasaData] = useState(
		JSON.parse(localStorage.getItem('storedObj'))
	);

	useEffect(() => {
		const nasaUrl = `https://api.nasa.gov/planetary/apod`;
		const fetchData = async () => {
			setIsLoading(true);
			console.log('fetching');
			console.log(cache[query]);
			//TODO Check media type of response data.  if video, show error msg on thumnail
			//! need to update cache with correct query date
			if (
				cache[query] &&
				cache[query].fromDate === query.fromDate &&
				cache[query].toDate === query.toDate
			) {
				setNasaData(cache[query].query);
				setIsLoading(false);
				console.log('set from cache', cache[query].query);
			} else {
				try {
					const response = await axios
						.get(
							`${nasaUrl}?start_date=${query.fromDate}&end_date=${query.toDate}&api_key=${process.env.REACT_APP_API_KEY}`
						)
						.then((res) => {
							cache[query] = {
								query: res.data,
								fromDate: query.fromDate,
								toDate: query.toDate,
							};
							setNasaData(res.data);
							setIsLoading(false);
							localStorage.setItem('storedObj', JSON.stringify(res.data));
							console.log('set from api useFetch', res.data);
						});
				} catch (e) {
					console.log(e);
				}
			}
		};

		// fetchData();

		if (isDateEntered) {
			console.log('is date entered', isDateEntered);
			fetchData();
			setIsDateEntered(false);
		}
	}, [query, isDateEntered, nasaData]);
	// return nasaData;
	return { nasaData, isLoading };
};
