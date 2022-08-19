import { PrismaClient, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

let prisma = new PrismaClient()

export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { username, email, password } = req.body
		await prisma.user.create({
			data: {
				// data coming from request
				username,
				email,
				password
			}
		})

		res.status(200).json({ message: 'Submitted successfully!' })
	} catch (error) {
		res.status(400).json({ error })
	}
}