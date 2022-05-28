import { prisma } from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ code: Math.random().toString().substr(2, 6) });
  } catch (error) {}
  res.status(404).json({ message: "something went wrong" });
}
