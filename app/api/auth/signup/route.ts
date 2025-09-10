import { createAccessToken, createRefreshToken } from "@/lib/auth";
import { NextResponse } from "next/server";

interface LoginBody {
  email: string;
  password: string;
  confirmPassword?: string;
}

export async function POST(req: Request) {
  const body: LoginBody = await req.json();

  if (body.email === "test@gmail.com" && body.password === body.confirmPassword) {
    const accessToken = createAccessToken({ email: "test@gmail.com", id: "mocked-id" });
    const refreshToken = createRefreshToken({ email: "test@gmail.com", id: "mocked-id" });

    const response = NextResponse.json({
      accessToken,
      user: {
        id: "mocked-id",
        email: "test@gmail.com",
        name: "test",
      },
    });

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  }

  return NextResponse.json(
    { message: "Invalid credentials" },
    { status: 401 }
  );
}
