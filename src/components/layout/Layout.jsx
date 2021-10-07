import React from 'react';

import NavBar from '../navigation/NavBar';
import DeleteThisComponent from '../../components/DeleteThisComponent';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			<DeleteThisComponent />
			{children}
			<Footer />
		</>
	);
};
export default Layout;
