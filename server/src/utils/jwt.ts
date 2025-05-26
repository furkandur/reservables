import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./constants";

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, JWT_SECRET, {
    ...(options && options),
  });
}

export function verifyJwt<T>(token: string): T | null {
  try {
    return jwt.verify(token, JWT_SECRET) as T;
  } catch (error) {
    return null;
  }
}
