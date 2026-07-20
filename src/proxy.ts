import { NextResponse, NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const locales = ["en-US", "pl"];
const defaultLocale = "en-US";

function getLocale(request: NextRequest) {
  const headers = Object.fromEntries(request.headers.entries());
  const languages = new Negotiator({ headers }).languages();

  if (!Array.isArray(languages) || languages.length === 0) {
    return defaultLocale;
  }

  const normalizedLanguages = languages.filter(
    (language): language is string => typeof language === "string" && language.trim().length > 0,
  );

  if (normalizedLanguages.length === 0) {
    return defaultLocale;
  }

  return match(normalizedLanguages, locales, defaultLocale);
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname.toLowerCase();

  // skip all static files and binary assets
  if (
    [
      ".jpeg",
      ".jpg",
      ".JPG",
      ".png",
      ".gif",
      ".svg",
      ".webp",
      ".ico",
      ".mp4",
      ".webm",
      ".mov",
      ".pdf",
      ".glb",
      ".bin",
      ".json",
      ".wasm",
      ".js",
      ".css",
      ".map",
      ".txt",
      ".ttf",
      ".otf",
      ".woff",
      ".woff2",
      ".eot",
    ].some((ext) => pathname.endsWith(ext))
  )
    return;

  // Check if there is any supported locale in the pathname
  const { pathname: rawPathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => rawPathname.startsWith(`/${locale}/`) || rawPathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${rawPathname}`;
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
