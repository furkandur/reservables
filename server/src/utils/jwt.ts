import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./constants";

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
  const token = jwt.sign(object, JWT_SECRET, {
    ...(options && options),
  });

  return `Bearer ${token}`;
}

export function verifyJwt<T>(token: string): T | null {
  try {
    const cleanedToken = token.replace("Bearer ", "");
    if (!cleanedToken) {
      return null;
    }
    return jwt.verify(cleanedToken, JWT_SECRET) as T;
  } catch (error) {
    return null;
  }
}
