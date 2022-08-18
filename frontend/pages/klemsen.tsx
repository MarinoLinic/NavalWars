import * as React from 'react'
import { useState } from 'react'

function Cornelius() {
	const [klemens, setklemens] = useState('klemens')

	return (
		<>
			<div>
				<p>Klemsen er en bøsset sølvfisk</p>
				<button onClick={() => setklemens(klemens + 's')}>Click me!</button>
				{useState('klemens')[0]}
				{klemens}
			</div>
			<div></div>
		</>
	)
}

export default Cornelius
