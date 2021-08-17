// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type LoginResponseData = {
  user?: string;
};

interface LoginApiRequext extends NextApiRequest {
  body: {
    username: string;
    password: string;
  };
}

export default function handler(
  req: LoginApiRequext,
  res: NextApiResponse<LoginResponseData>
) {
  setTimeout(() => {
    if (req.body.username === "kidsloop" && req.body.password === "kidsloop") {
      res.status(200).json({ user: req.body.username });
    } else {
      res.status(401).json({ user: undefined });
    }
  }, 3000);
}
