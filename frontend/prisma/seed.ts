import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() // always has to be instantiated

// You have to call Prisma in an asynchrounous function
export const main = async () => {
	const newUser = await prisma.user.create({
		data: {
			username: 'klesmen',
			email: 'klesmen@radenfisk.com',
			password: 'somepassword'
		}
	})
}

for (let i = 0; i < 5; i++) main()

// Install ts-node: npm i -D ts-node
// In package.json:
// "prisma": {
//   "seed": "ts-node -O {\"module\":\"CommonJS\"} prisma/seed.ts"
// }
// "-O {\"module\":\"CommonJS\"}" is required when you're working with NextJS

// Run the seed.ts script: npx prisma db seed
