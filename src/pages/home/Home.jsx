import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentDate } from '../../helpers/getCurrentDate';
import { useFetchCurrent } from '../../api/useFetchCurrent';

const Home = () => {
	const [currentPicture, setCurrentPicture] = useState([]);
	const currentDate = getCurrentDate();

	const queryRef = useRef('');

	queryRef.current = { fromDate: currentDate, toDate: currentDate };

	useFetchCurrent(queryRef.current, setCurrentPicture);

	return (
		<>
			<h1>Home</h1>
			<h3>Today's Picture</h3>
			{currentPicture[0] && (
				<>
					<h1>{currentPicture[0].title}</h1>
					<div className='nasa-data-title' name={currentPicture.date}>
						{currentPicture[0].title}
					</div>
				</>
			)}
		</>
	);
};

export default Home;
