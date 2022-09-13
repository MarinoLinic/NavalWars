import { prisma } from "./index";

// You have to call Prisma in an asynchrounous function
export const main = async () => {
  const newCharacter = await prisma.character.create({
    data: {
      userEmail: "dev.navalwars@gmail.com",
      name: "Test Character",
      avatar: "/avatars/1.png",
    },
  });
};

for (let i = 0; i < 5; i++) main(); // 5 seeds

// Install ts-node: npm i -D ts-node

// In package.json:
//
// "prisma": {
//   "seed": "ts-node -O {\"module\":\"CommonJS\"} prisma/seed.ts"
// }

// "-O {\"module\":\"CommonJS\"}" is required when you're working with NextJS

// Run the seed.ts script: npx prisma db seed
