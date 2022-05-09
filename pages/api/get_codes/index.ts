import type { NextApiRequest, NextApiResponse } from "next";
import { fetcher } from "../../lib/fetcher";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const currenciesCodes = await fetcher(
      "https://v6.exchangerate-api.com/v6/913bc4b025ef39823cd263e4/codes"
    ).then((a) => {
      return a.supported_codes;
    });
    res.status(200).json({ res: currenciesCodes });
  } catch (error) {
    return res.status(404).json({ status: "Something went wrong" });
  }
}
