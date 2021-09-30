import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { NasaDataProvider } from './NasaContext';
import List from '../list/List';
import PictureOfTheDay from '../pictureOfTheDay/PictureOfTheDay';

const DataContextWrapper = ({ query, isDateEntered, setIsDateEntered }) => {
	//* Initialize state with data in local storage
	const [nasaData, setData] = useState(
		JSON.parse(localStorage.getItem('storedObj'))
	);
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

		//* Fetch data on condition that dates have been entered
		if (isDateEntered) {
			fetchData();
			setIsDateEntered(false);
		}
	}, [query, isDateEntered, setIsDateEntered]);

	return (
		<>
			<NasaDataProvider value={nasaData}>
				<List />
				<PictureOfTheDay />
			</NasaDataProvider>
		</>
	);
};

export default DataContextWrapper;
