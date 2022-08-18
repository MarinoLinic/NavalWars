import { PrismaClient, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

let prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { username, email, password } = req.body
	try {
		await prisma.user.create({
			data: {
				// data coming from request
				username,
				email,
				password
			}
		})

		res.status(200).json({ message: 'Submitted successfully!' })
	} catch (err) {
		res.status(400).json({ err })
	}
}
