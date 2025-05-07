import { NextResponse, NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en-US", "pl"];
const defaultLocale = "en-US";

function getLocale(request: NextRequest) {
  const headers = Object.fromEntries(request.headers.entries());
  return match(new Negotiator({ headers }).languages(), locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // skip all static files
  if (
    [
      ".jpeg",
      ".jpg",
      ".png",
      ".gif",
      ".svg",
      ".webp",
      ".ico",
      ".mp4",
      ".webm",
      ".mov",
      ".pdf",
    ].some((ext) => request.nextUrl.pathname.endsWith(ext))
  )
    return;

  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // skip all static files
  ],
};
