import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { render, screen, cleanup } from '@testing-library/react';
import MobileNavLink from '../MobileNavLink';

afterEach(() => {
	cleanup();
});

test('Should render MobileNavLink component', () => {
	render(
		<BrowserRouter>
			<MobileNavLink text='test' to='/home' />
		</BrowserRouter>
	);
	const mobileNavLinkElement = screen.getByTestId('link');
	expect(mobileNavLinkElement).toBeInTheDocument();
	expect(mobileNavLinkElement).toHaveTextContent('test');
});

// need to run integration tests
// unit tests only test one thing
