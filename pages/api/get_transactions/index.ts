import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   res.status(200).json({ name: "John Doe" });
  if (req.method !== "GET") {
    res.status(405).json({ message: "method not allowed" });
  }
  const transactionsList = await prisma.transaction.findMany();
  res.status(200).json(transactionsList);
}
