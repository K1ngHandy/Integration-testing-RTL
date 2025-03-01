import React, { useState } from 'react';

export default function App() {
	const [friends, setFriends] = useState(['Cynthia', 'Fish', 'Alex']);

	return (
		<div data-testid="friends">
			<h2>Friends App</h2>
			<div>
				{friends.map((friend, idx) => {
					<div key={idx}>My friend {friend}</div>;
				})}
			</div>
		</div>
	);
}
