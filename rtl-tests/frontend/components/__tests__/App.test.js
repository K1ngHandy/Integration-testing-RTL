import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('the container div is present', () => {
	render(<App />); // render App for test
	const div = screen.queryByTestId('friends');
	expect(div).toBeInTheDocument(); // assertion
});

test('the text "Friends App" renders', () => {
	render(<App />);
	const heading = screen.queryByText('Friends App', { exact: false });
	expect(heading).toBeInTheDocument();
	expect(heading).toBeVisible();
});

test('using a loop', () => {
	render(<App />);
	['Cynthia', 'Fish', 'Alex'].forEach((name) => {
		const friend = screen.queryByText(name, { exact: false });
		expect(friend).toBeVisible();
	});
});

test('using queryByAllText', () => {
	render(<App />);
	const friends = screen.queryAllByAltText('My Friend', { exact: false });
	expect(friends).toHaveLength(3);
});

test('capturing nodes in different ways besides text content', () => {
	render(<App />);
	let img = screen.queryByAltText('cute cat');
	expect(img).toBeInTheDocument();
	img = screen.queryByTestId('catImg');
	expect(img).toBeInTheDocument();
	let input = screen.queryByPlaceholderText('Type cat name');
	expect(input).toBeInTheDocument();
	input = screen.queryByRole('textbox');
	expect(input).toBeInTheDocument();
});
