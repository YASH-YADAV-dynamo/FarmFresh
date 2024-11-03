import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired({
  returnTo: '/marketplace'
});

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/farmers/dashboard/:path*',
    '/admin/:path*',
    '/api/protected/:path*'
  ]
};