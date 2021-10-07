import { useEffect } from 'react';
import axios from 'axios';

export const useFetchCurrent = (query, setCurrentPicture) => {
	useEffect(() => {
		const nasaUrl = `https://api.nasa.gov/planetary/apod`;

		const fetchCurrentData = async () => {
			const response = await axios.get(
				`${nasaUrl}?start_date=${query.fromDate}&end_date=${query.toDate}&api_key=${process.env.REACT_APP_API_KEY}`
			);
			setCurrentPicture(response.data);
		};
		fetchCurrentData();
	}, []);
	return null;
};
