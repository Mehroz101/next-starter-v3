import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ['/dashboard/:path*'], // only dashboard routes
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get('authToken')?.value || 'token';

  if (!token) {
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  // Admin check only for /dashboard/admin
  if (url.pathname.startsWith('/dashboard/admin')) {
    const role = req.cookies.get('userRole')?.value;
    if (role !== 'admin') {
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
