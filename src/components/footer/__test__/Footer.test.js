import React from 'react';
import Footer from '../Footer';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, cleanup } from '@testing-library/react';

afterEach(() => {
	cleanup();
});

test('This should render the footer component', () => {
	render(<Footer />);
	const FooterElement = screen.getByTestId('data-test-footer');
	expect(FooterElement).toBeInTheDocument();
});
