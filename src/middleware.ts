import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isRouteEnabled } from "./utils/checkRoute";

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);

  const { pathname } = request.nextUrl;

  headers.set("x-current-path", request.nextUrl.pathname);
  headers.set("x-full-path", request.nextUrl.href);

  // console.log(!isRouteEnabled(pathname),"pppppppp")
  //if (!isRouteEnabled(pathname)) {
    //return NextResponse.redirect(new URL("/maintenance", request.url));
 // }

  return NextResponse.next({ headers });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

