import { env } from "@/config/env";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
  role?: string; // optional role

}

// Secret keys (store in .env)
const ACCESS_TOKEN_SECRET = env.SECRET_KEY;
const REFRESH_TOKEN_SECRET = env.REFRESH_TOKEN_SECRET_KEY;

// 1️⃣ Create Access Token (short-lived, sent in response)
export function createAccessToken(user: UserPayload) {
  const { id, email } = user;
  return jwt.sign({ id, email }, ACCESS_TOKEN_SECRET, { expiresIn: "15m" }); // 15 minutes
}

// 2️⃣ Create Refresh Token (long-lived, stored in HttpOnly cookie)
export function createRefreshToken(user: UserPayload) {
  const { id, email } = user;

  return jwt.sign({ id, email }, REFRESH_TOKEN_SECRET, { expiresIn: "7d" }); // 7 days
}

// 3️⃣ Verify Access Token
export function verifyAccessToken(token: string) {
  const user = jwt.verify(token, ACCESS_TOKEN_SECRET);
  if (!user) {
    throw new Error("Invalid access token");
  }
  return user as UserPayload;
}

// 4️⃣ Verify Refresh Token
export function verifyRefreshToken(token: string) {
  try {
    const user = jwt.verify(token, REFRESH_TOKEN_SECRET);
    if (!user) {
      throw new Error("Invalid refresh token");
    }
    return user as UserPayload;
  }
  catch {
    throw new Error("Invalid refresh token");
  }

}
