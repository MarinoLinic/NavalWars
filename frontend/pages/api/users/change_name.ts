import { prisma } from "../../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email } = req.body;
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        name,
      },
    });

    res.status(200).json({ message: "Submitted successfully!" });
  } catch (error) {
    res.status(400).json({ error });
  }
}

// user.create differs such that "where:" is unnecessary
