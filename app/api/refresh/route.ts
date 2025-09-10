// app/api/refresh/route.ts
import { NextResponse } from "next/server";
import { verifyRefreshToken, createAccessToken, createRefreshToken } from "@/lib/auth";

export async function POST(req: Request) {
  // 1️⃣ Get refresh token from cookies
  const cookie = req.headers.get("cookie") || "";
  const refreshToken = cookie
    .split("; ")
    .find((c) => c.startsWith("refreshToken="))
    ?.split("=")[1];

  if (!refreshToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
  }

  try {
    // 2️⃣ Verify the refresh token (JWT or DB session)
    const userData = verifyRefreshToken(refreshToken); // throws if invalid

    // 3️⃣ Issue new access token
    const newAccessToken = createAccessToken(userData);

    // 4️⃣ Optionally, rotate refresh token
    const newRefreshToken = createRefreshToken(userData);

    const response = NextResponse.json({ accessToken: newAccessToken });

    // 5️⃣ Set refresh token as HttpOnly cookie
    response.cookies.set("refreshToken", newRefreshToken, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production", // only secure in prod
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (err) {
    console.error("Refresh token verification failed:", err);
    return NextResponse.json({ message: "Unauthorized" }, { status: 400 });
  }
}
