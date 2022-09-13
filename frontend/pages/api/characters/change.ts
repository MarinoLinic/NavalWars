import { prisma } from "../../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, id } = req.body;
    await prisma.character.update({
      data: {
        name: name,
      },
      where: {
        id: id, // property in the "where" object has to have a unique constraint in prisma.schema, duh
      },
    });

    res.status(200).json({ message: "Changed successfully!" });
  } catch (error) {
    res.status(400).json({ error });
  }
}
