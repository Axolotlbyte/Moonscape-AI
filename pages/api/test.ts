// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

interface Prediction {
  status: string;
  urls: {
    get: string;
    cancel: string;
  };
  output: [string];
}

const resp = <Prediction>{
  status: "working",
  urls: {
    get: "http://localhost:3000/api/test",
    cancel: "yes",
  },
  output: ["/examples/aiart.png"],
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(200).json(resp);
}
