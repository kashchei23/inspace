import React, { useContext } from 'react';
import { NasaDataContext } from '../../context/NasaContext';

const Home = () => {
	const yagaData = useContext(NasaDataContext);
	return (
		<>
			<h1>Home</h1>
			{yagaData && <h1>{yagaData[0]}</h1>}
			<h3>Today's Picture</h3>
		</>
	);
};

export default Home;
