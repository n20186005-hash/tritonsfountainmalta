import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware({
  ...routing,
  localePrefix: 'always'
});

export default function middleware(request: NextRequest) {
  // Consolidate the two hosts seen in Search Console onto the canonical host.
  if (request.nextUrl.hostname === 'www.tritonsfountainmalta.com') {
    const canonicalUrl = request.nextUrl.clone();
    canonicalUrl.hostname = 'tritonsfountainmalta.com';
    return NextResponse.redirect(canonicalUrl, 308);
  }
  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
