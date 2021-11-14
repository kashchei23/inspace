import React, { useState } from 'react';
import { TheaterContextProvider } from './TheaterContext';

const TheaterViewProvider = ({ children }) => {
	const [isTheaterOn, setIsTheaterOn] = useState(false);

	const theater = { isTheaterOn, setIsTheaterOn };

	return (
		<TheaterContextProvider value={theater}>{children}</TheaterContextProvider>
	);
};

export default TheaterViewProvider;
