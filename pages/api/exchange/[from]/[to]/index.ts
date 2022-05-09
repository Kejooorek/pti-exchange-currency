import { prisma } from "../../../../lib/prisma";
import { fetcher } from "../../../../lib/fetcher";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { from, to } = req.query;
  try {
    const searchedCurrency: { [key: string]: number } = await fetcher(
      `https://v6.exchangerate-api.com/v6/913bc4b025ef39823cd263e4/latest/${from}`
    ).then((a) => {
      return a.conversion_rates;
    });
    console.log(searchedCurrency[to as string]);
    res.status(200).json({ res: { from, to } });
  } catch (error) {
    return res.status(404).json({ status: "Invalid currency code" });
  }
}
