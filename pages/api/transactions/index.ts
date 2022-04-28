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
  if(req.method !== 'POST'){
    return res.status(405).json({message:'Method is not allowed'});
  }
  
}
