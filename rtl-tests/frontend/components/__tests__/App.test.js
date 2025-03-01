import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('the container is present', () => {
	render(<App />); // render App for test
	const div = screen.queryByTestId('friends');
	expect(div).toBeInTheDocument(); // assertion
});
