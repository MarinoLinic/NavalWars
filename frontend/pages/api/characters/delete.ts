import { prisma } from "../../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.body;
    await prisma.character.delete({
      where: {
        id: id,
      },
    });

    res.status(200).json({ message: "Deleted successfully!" });
  } catch (error) {
    res.status(400).json({ error });
  }
}
