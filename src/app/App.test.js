import { render } from '@testing-library/react';
import App from './App';

test('renders App without crashes', () => {
	render(<App />);
	const app = <App />;
	expect(app).toBeInTheDocument();
});
