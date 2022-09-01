import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany();
    return res.send(users);
  } else if (req.method === "POST") {
    // const result = await prisma.user.create({
    // 	data: {
    // 		...req.body
    // 	}
    // })
    // res.json(result)

    //const { body: data } = req
    const data = req.body;
    const newUser = await prisma.user.create({ data });
    // We're missing server-side validation
    return res.status(201).send(newUser);
  }
}

/* 
Here's a sample object to test out: (POST -> BODY -> RAW -> JSON dropdown)
{
    "email": "test@example.com",
    "password": "testpass234",
    "name": "Test User"
}
*/
