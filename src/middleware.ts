import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextFetchEvent } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/(.*)",
]);

const intlMiddleware = createIntlMiddleware(routing);

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent
) {
  // Handle Clerk authentication first
  const clerkHandler = clerkMiddleware((auth, req) => {
    if (!isPublicRoute(req)) {
      auth.protect();
    }
    return intlMiddleware(req);
  });

  const clerkResponse = await clerkHandler(request, event);
  if (clerkResponse) return clerkResponse;

  // Fallback to intl middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for
    // - API routes, trpc, Next.js internals, Vercel internals
    // - Static files with extensions
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

/* import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
 */
