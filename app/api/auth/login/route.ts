import { env } from "@/config/env";
import { createAccessToken, createRefreshToken } from "@/lib/auth";
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  if (body.email === "test@gmail.com" && body.password === "12345678") {
    const accessToken = createAccessToken({ id: "mocked-id", email: "test@gmail.com" });
    const refreshToken = createRefreshToken({ id: "mocked-id", email: "test@gmail.com" });
    const response = NextResponse.json(
      {
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: {
          id: "mocked-id",
          email: "test@gmail.com",
          name: "test",
        },
      },
    );
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      secure: env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
    });
    return response;

  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });

  }
}