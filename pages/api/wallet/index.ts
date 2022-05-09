import { prisma } from "./../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const wallet = await prisma.customerWallet.findMany();
  res.status(200).json({ wallet: wallet });
}
