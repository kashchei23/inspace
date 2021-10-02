import React from 'react';

import NavBar from '../components/navigation/NavBar';
import DeleteThisComponent from '../components/DeleteThisComponent';
import Footer from '../components/footer/Footer';

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
