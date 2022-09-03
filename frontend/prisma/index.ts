import { PrismaClient } from "@prisma/client";

// adding Prisma to the NodeJS global type
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

// only used in development mode
if (process.env.NODE_ENV !== "production") global.prisma = prisma;
