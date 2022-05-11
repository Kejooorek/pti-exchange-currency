import { prisma } from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "method not allowed" });
  }
  const { title, amount } = req.body;
  const newTransaction = await prisma.transaction.create({
    data: {
      title: title,
      amount: amount,

    },
  });

  res.status(200).json({ message: "approved" });
}
