import { Request, Response } from "express";

const getArticles = (req: Request, res: Response) => {
  return res.status(200).json("Tenes una sesión iniciada y por eso ves esto");
};

export { getArticles };
