import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (!request.cookies.has('connect.sid')) {
    // console.log('미들웨어 실행');
    // const url = request.nextUrl.clone();
    // url.pathname = '/userlogin';
    // return NextResponse.redirect(url);
    return NextResponse.redirect(new URL('/userlogin', request.url));
  }
}

export const config = {
  matcher: '/closet/:path*',
};
