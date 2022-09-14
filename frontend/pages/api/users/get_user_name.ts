import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body.email;
  const name = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return res.send(name);
}
