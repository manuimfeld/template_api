import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../helpers/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop(); // [Bearer 35723g] => [35723g]
    const isOk = verifyToken(`${jwt}`);
    if (!isOk) {
      res.status(401);
      res.send("Ha ocurrido un problema, vuelve a iniciar sesión");
    } else {
      //res.json("Estás autorizado, pasa al controlador");
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("SESIÓN INVÁLIDA");
  }
};

export { checkJwt };
