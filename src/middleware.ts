import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);

  console?.debug("middleware", request.nextUrl.href);
  headers.set("x-current-path", request.nextUrl.pathname);
  headers.set("x-full-path", request.nextUrl.href);
  return NextResponse.next({ headers });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};