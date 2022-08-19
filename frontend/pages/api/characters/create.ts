import { PrismaClient, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

let prisma = new PrismaClient()

export default async function (req: NextApiRequest, res: NextApiResponse) {
	try {
		const { userId, name, avatar } = req.body
		await prisma.character.create({
			data: {
				// data coming from request
				userId,
				name,
				avatar
			}
		})

		res.status(200).json({ message: 'Submitted successfully!' })
	} catch (error) {
		res.status(400).json({ error })
	}
}