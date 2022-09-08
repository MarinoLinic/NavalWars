import { prisma } from "../../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId, name, avatar } = req.body;
    await prisma.character.create({
      data: {
        userId,
        name,
        avatar,
      },
    });

    res.status(200).json({ message: "Submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error });
  }
}
