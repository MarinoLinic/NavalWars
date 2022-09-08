import { prisma } from "../../../prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.send(users);
  } else if (req.method === "POST") {
    const data = req.body;
    const newUser = await prisma.user.create({ data });
    // We're missing server-side validation
    return res.status(201).send(newUser);
  }
}

// == another way to write body: ==
// const result = await prisma.user.create({
// 	data: {
// 		...req.body
// 	}
// })
// res.json(result)

//const { body: data } = req
