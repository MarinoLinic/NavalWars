import data from '../components/data.json'
import * as React from 'react'
import { useState } from 'react'

function Cornelius() {
	const [klemens, setklemens] = useState('klemens')

	const create = async () => {
		fetch('http://localhost:3000/api/users/create', {
			body: JSON.stringify(data),
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}

	return (
		<>
			<div>
				<p>Klemsen er en bøsset sølvfisk</p>
				<button onClick={() => setklemens(klemens + 's')}>Click me!</button>
				{useState('klemens')[0]}
				{klemens}
			</div>
			<div>
				<button onClick={() => create()}>Create user</button>
			</div>
		</>
	)
}

export default Cornelius
