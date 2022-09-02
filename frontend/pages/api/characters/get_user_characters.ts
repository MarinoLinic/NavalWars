import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId } = req.body;
  const characters = await prisma.character.findMany({
    where: {
      userId: userId,
    },
  });
  return res.send(characters);
}
