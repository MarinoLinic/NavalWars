import data from '../components/data.json'
import * as React from 'react'
import { useState } from 'react'
import { Prisma, PrismaClient } from '@prisma/client'

let prisma = new PrismaClient()

const create = async () => {
	fetch('http://localhost:3000/api/users/create', {
		body: JSON.stringify(data),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	})
}

export const getServerSideProps = async () => {
	const users = await prisma.user.findMany()
	return {
		props: {
			data
		}
	}
}

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
			<div>
				<button onClick={() => create()}>Create user</button>
			</div>
		</>
	)
}

export default Cornelius
