import { verifyAccessToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization") || "";
  console.log("req:", req);
  const refreshToken = authHeader.split(" ")[1];
  if (!refreshToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const user = verifyAccessToken(refreshToken);
    return NextResponse.json({ user }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
