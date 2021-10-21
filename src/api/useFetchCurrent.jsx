import { useEffect } from 'react';
import axios from 'axios';

const cache = {};
export const useFetchCurrent = (query, setCurrentPicture) => {
	useEffect(() => {
		const nasaUrl = `https://api.nasa.gov/planetary/apod`;

		const fetchCurrentData = async () => {
			if (cache[query] && cache[query][0].date === query.fromDate) {
				setCurrentPicture(cache[query]);
			} else {
				const response = await axios.get(
					`${nasaUrl}?start_date=${query.fromDate}&end_date=${query.toDate}&api_key=${process.env.REACT_APP_API_KEY}`
				);
				cache[query] = response.data;
				setCurrentPicture(response.data);
			}
		};
		fetchCurrentData();
	}, []);
	return null;
};
