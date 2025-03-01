import React, { useState } from 'react';

export default function App() {
	const [friends] = useState(['Cynthia', 'Fish', 'Alex']);

	return (
		<div data-testid="friends">
			<h2>Friends App</h2>
			<div>
				{friends.map((friend, idx) => (
					<div key={idx}>My friend {friend}</div>
				))}
			</div>
			<form>
				<img
					alt="cute cat"
					src="./cat.jpg"
					data-testid="catImg"
				/>
				<input
					type="text"
					placeholder="Type cat name"
					role="textbox"
				/>
			</form>
		</div>
	);
}
