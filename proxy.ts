import { getSessionCookie } from 'better-auth/cookies';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function proxy(request: NextRequest) {
const sessionCookie = getSessionCookie(request);

if (!sessionCookie){
  return NextResponse.redirect(new URL('/auth', request.url))
}

}
 
export const config = {
  matcher: ["/", "/assets", "/profile", "/assets",]
}