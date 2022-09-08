import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma";

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
