// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).send({ message: "Only POST requests allowed" });
    }
    const data = JSON.parse(req.body);

    const response = await openai.createImage(data);

    res.status(200).json({ data: response?.data?.data, message: "Success!" });
  } catch (error: any) {
    return res.status(400).json({
      errMessage: error?.response?.data?.error?.message || error?.message,
    });
  }
}
