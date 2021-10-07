import React, { useContext } from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, screen, cleanup } from '@testing-library/react';
import NavBar from '../NavBar';
import MobileSearchForm from '../../form/MobileSearchForm';

import { NasaDataContext } from '../../../context/NasaContext';

afterEach(() => {
	cleanup();
});

test('Mock should', () => {
	const mock = jest.fn(() => '');

	const { navState } = useContext(NasaDataContext);

	const handleSearchClick = () => {
		navState.setSearchIsActive((prevSearchIsActive) => !prevSearchIsActive);
		navState.setIsMenuOpen(false);
	};

	const toggleMenu = () => {
		navState.setSearchIsActive(false);
		navState.setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
});

// need to run integration tests
// unit tests only test one thing
