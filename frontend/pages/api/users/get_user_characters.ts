import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body.email;
  const characters = await prisma.character.findMany({
    where: {
      userEmail: email,
    },
  });
  return res.send(characters);
}
