import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/_sites/:path"],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get("host") || "localhost";

  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "subdomain-3.localhost:3000", "localhost:3000" is the root URL)
  // process.env.NODE_ENV === "production" indicates that the app is deployed to a production environment
  // process.env.VERCEL === "1" indicates that the app is deployed on Vercel
  const currentHost = hostname.split(".")[0] || "";

  // Prevent security issues – users should not be able to canonically access
  // the pages/sites folder and its respective contents.
  if (url.pathname.startsWith(`/_sites`)) {
    url.pathname = `/404`;
  } else if (currentHost !== hostname) {
    url.pathname = `/_sites/${currentHost}${url.pathname}`;
  } else {
    url.pathname = `/${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
