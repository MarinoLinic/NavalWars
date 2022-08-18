import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default async function userCreate() {
	prisma.user.create({
		data: {
			username: 'klemenns',
			email: 'klemens@example.com',
			password: 'klemsen123'
		}
	})
}
