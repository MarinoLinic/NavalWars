import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query as any;
  const parsedID = id.toString();

  const user = await prisma.user.findUnique({ where: { id: parsedID } });

  return user ? res.send(user) : res.status(404).end();
}

// - isNaN is a function that returns whether a variable is a number
// if (isNaN(id)) return res.status(400).end();
