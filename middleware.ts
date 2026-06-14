import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const middleware = auth((req) => {
  const isLoggedIn = !!req.auth;
  const pathname = req.nextUrl.pathname;

  if (isLoggedIn && pathname === "/") {
    const feedUrl = new URL("/feed", req.nextUrl.origin);
    return NextResponse.redirect(feedUrl);
  }

  if (!isLoggedIn && pathname.startsWith("/feed")) {
    const homeUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/", "/feed/:path*"],
};
