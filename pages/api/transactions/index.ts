import { PrismaClient, Transaction } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

type TransactiosnType = {
  transaction: Transaction[];
};

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const transactionsList = await prisma.transaction.findMany();
  res.status(200).json(transactionsList);
}
