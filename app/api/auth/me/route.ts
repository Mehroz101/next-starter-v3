import { NextResponse } from "next/server";
import { verifyRefreshToken } from "@/lib/auth";

export async function GET(req: Request) {
  const cookie = req.headers.get("cookie") || "";

  const refreshToken = cookie
    .split("; ")
    .find(c => c.startsWith("refreshToken="))
    ?.split("=")[1];
  console.log("refreshToken", refreshToken);
  if (!refreshToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const user = verifyRefreshToken(refreshToken);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
