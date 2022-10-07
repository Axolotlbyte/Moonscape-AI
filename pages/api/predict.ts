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
  getUrl?: string ;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method);

  const { prompt } = req.body;
  const { getUrl }: QueryParams = req.query ;

  console.log(getUrl);

  if (req.method === "GET") {
    try {
      const getUrl = req.query.getUrl;
      if (!getUrl) res.json({ errors: ["An unexpected error occured"] });

      const response = await axios.get(`${getUrl}`, {
        headers: {
          Authorization: "Token e82a89f60966cb392806d82f6e96763d6d22c049",
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
          version:
            "a9758cbfbd5f3c2094457d996681af52552901775aa2d6dd0b17fd15df959bef",
          input: {
            prompt: prompt,
          },
        },
        {
          headers: {
            Authorization: "Token e82a89f60966cb392806d82f6e96763d6d22c049",
            "Content-Type": "application/json",
          },
        }
      );

      return res.status(200).json(response.data);
    } catch (error) {
      return res.json({ errors: ["An unexpected error occured"] });
    }
  } else {
    return res.json({ errors: [`${req.method} is not allowed.`] });
  }
}
