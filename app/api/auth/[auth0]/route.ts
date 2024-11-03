import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/marketplace',
    authorizationParams: {
      audience: 'https://farmers-marketplace/api',
      scope: 'openid profile email'
    }
  })
});