import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = async (username: string) => {
  const jwt = sign({ username }, JWT_SECRET || "jwt");
  return jwt;
};

const verifyToken = async (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET || "jwt");
  return isOk;
};

export { generateToken, verifyToken };
