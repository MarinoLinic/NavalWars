import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query as any;
  const parsedID = id.toString();

  if (isNaN(parsedID)) return res.status(400).end();

  const user = await prisma.user.findUnique({ where: { id: parsedID } });

  return user ? res.send(user) : res.status(404).end();
}
