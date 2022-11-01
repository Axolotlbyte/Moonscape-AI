// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface Prediction {
  status: string;
  urls: {
    get: string;
    cancel: string;
  };
  output: [string];
}

interface QueryParams {
  getUrl?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method);

  const { prompt } = req.body;
  const { getUrl }: QueryParams = req.query;

  console.log({prompt, getUrl})

  if (req.method === "GET") {
    try {
      const getUrl = req.query.getUrl;
      if (!getUrl) res.json({ errors: ["An unexpected error occured"] });

      const response = await axios.get(`${getUrl}`, {
        headers: {
          Authorization: `Token ${process.env.API_KEY}`,
          "Content-Type": "application/json",
        },
      });

      return res.json(response.data);
    } catch (error) {
      return res.json({ errors: ["An unexpected error occured"] });
    }
  } else if (req.method === "POST") {
    try {
      const response = await axios.post(
        "https://api.replicate.com/v1/predictions",
        // "http://localhost:3000/api/test",
        {
          version: "c24bbf13332c755f9e1c8b3f10c7f438889145def57d554a74ea751dc5e3b509",
          input: {
            prompt: prompt,
          },
        },
        {
          headers: {
            Authorization: `Token ${process.env.API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      return res.status(200).json(response.data);
    } catch (error) {
      console.log(error)
      return res.json({ errors: ["An unexpected error occured"] });
    }
  } else {
    return res.json({ errors: [`${req.method} is not allowed.`] });
  }
}
