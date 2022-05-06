// import { Transaction } from "@prisma/client";
import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "method not allowed" });
  }
  const { transaction_id } = req.query;
  const transaction = await prisma.transaction.findUnique({
    where: {
      id: transaction_id,
    },
  });

  res.status(200).json({ res: transaction });
}
