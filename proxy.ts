import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'outsourcedcallers.com';

function publicScheme(request: NextRequest) {
  const cfVisitor = request.headers.get('cf-visitor');
  if (cfVisitor) {
    try {
      const visitor = JSON.parse(cfVisitor) as { scheme?: string };
      if (visitor.scheme) return visitor.scheme.toLowerCase();
    } catch {
      // Fall back to the standard forwarding header when the value is invalid.
    }
  }
  return request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim().toLowerCase();
}

export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim();
  const requestHost = forwardedHost || request.headers.get('host') || request.nextUrl.hostname;
  const hostname = requestHost.split(':')[0].toLowerCase();
  const scheme = publicScheme(request);

  if (scheme === 'http' || hostname === `www.${CANONICAL_HOST}`) {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.hostname = 'outsourcedcallers.com';
    destination.port = '';
    return NextResponse.redirect(destination, 308);
  }
  return NextResponse.next();
}

export const config = { matcher: '/((?!_next/static|_next/image).*)' };
